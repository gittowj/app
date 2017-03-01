var express = require('express');
var path = require('path');
var xlsx = require('node-xlsx');
var fs = require('fs');
var router = express.Router();
var scoreDao = require('../dao/scoreDao');
var studentDao = require('../dao/studentDao');
var upload = require('../util/upload');
var pagination = require('pagination');
var score = require('./score');
var wchatPay = require('../public/wxpay/wchatPay');
var moment = require("moment");


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('admin/index', { title: 'hello world' });
});


// 导入学生
router.post('/uploadStudent', function (req, res) {
  res.send({ "rtnCode": "-1", "rtnInfo": "上传失败" }); 
  var file = req.files.file;
  var tmp_path = file.path;
  var newName = Date.now() + path.extname(file.name);
  var new_path = path.resolve("../public/upload/" + newName);
  fs.rename(tmp_path, new_path, function (err) {
    if (err) {
      // res.send({ "rtnCode": "-1", "rtnInfo": "上传失败" }); 
    }
  });
  importStudentFromFile(new_path);
  res.send({ "rtnCode": "0", "rtnInfo": "上传成功" }); 
});

function importStudentFromFile(filePath){ 
  var obj = xlsx.parse(filePath);
  var datas = obj[0].data;
}



router.get('/student', function (req, res, next) {
  res.render('admin/student', { title: 'hello world' });
});


router.get('/score', function (req, res, next) {
  // if(req.query.getScore != null){
  //   getScoreByPage(req, res);
    
  // }else{
    res.render('admin/score', { title: 'hello world' });
//
});

router.get('/score1', function (req, res, next) {
  // if(req.query.getScore != null){
  //   getScoreByPage(req, res);
    
  // }else{
    res.render('admin/score1', { title: 'hello world' });
//
});


router.post('/getscorelist', function (req, res, next) {
    //getScoreByPage(req, res, next);
    next();
});

router.post('/getStudentList', function (req, res, next) {
    getStudentByPage(req, res);
});


router.post('/deleteScore', function (req, res, next) {
  if(req.query.id == null){
     res.send({ "rtnCode": "0", "rtnInfo": "删除失败" });
     return;
  }
  scoreDao.deleteById(req.query.id, function(code){ 
    if(code = 0){
         res.send({ "rtnCode": "0", "rtnInfo": "删除失败" });
    }else{
       res.send({ "rtnCode": "1", "rtnInfo": "删除成功" });
    }
  });
});

router.post('/deleteStudent', function (req, res, next) {
  if(req.query.id == null){
     res.send({ "rtnCode": "0", "rtnInfo": "删除失败" });
     return;
  }
  studentDao.deleteById(req.query.id, function(code){ 
    if(code = 0){
         res.send({ "rtnCode": "0", "rtnInfo": "删除失败" });
    }else{
       res.send({ "rtnCode": "1", "rtnInfo": "删除成功" });
    }
  });
});


//导入成绩
router.post('/uploadScore', function (req, res, next) {
  var file = req.files.file;
  var tmp_path = file.path;

  var filename = file.name;
  var school = filename.substring(0, filename.indexOf("("));
  var grade = filename.substring(filename.indexOf("(") + 1, filename.indexOf(")"));

  if(school == "" || grade == ""){
     res.send({ "rtnCode": "-1", "rtnInfo": "文档的名字不对，应为‘学校(班级)’" }); 
     return ;
  }

  var newName = Date.now() + path.extname(file.name);
  //var new_path = path.resolve("../public/upload/" + newName);
  newName = "excelfile.XLSX";
  var new_path = path.resolve("C:/" + newName);
  fs.rename(tmp_path, new_path, function (err) {
    if (err) {
      res.send({ "rtnCode": "-1", "rtnInfo": "上传失败" }); 
    }else{
      score.importScoreFromFile(new_path, school, grade, function(err){
        if (err) 
            res.send({ "rtnCode": "-1", "rtnInfo": "上传失败" });
        else
            res.send({ "rtnCode": "0", "rtnInfo": "上传成功" });
      });
      
    }
  });

  //new_path = path.resolve("C:/萍乡四中2016年下学期初三期中考试成绩.xlsx");
});

router.post('/getScore', function(req, res, next) {
  scoreDao.getCount(req, function(count){
    //req.query.pageCount = count;
    res.send({"pageCount":count});
  });
});

router.post('/getStudent', function(req, res, next) {
  studentDao.getCount(req, function(count){
    //req.query.pageCount = count;
    res.send({"pageCount":count});
  });
});

function getScoreByPage(req, res, next){
    var page = 1;
    if(req.query.page){
      page = req.query.page;
    };
    if(req.body.page){
      page = req.body.page;
    }

    var rowcount = 20;
    if(req.query.rows){
      rowcount = req.query.rows;
    };
    if(req.body.rows){
      rowcount = req.body.rows;
    }

    var score = [];
    // if(req.query.score.name){
    //   scroe.name = req.query.score.name;
    // };
    // if(req.body.score.name){
    //   scroe.name = req.body.score.name;
    // }

    // if(req.query.score.no){
    //   scroe.no = req.query.score.no;
    // };
    // if(req.body.score.no){
    //   scroe.no = req.body.score.no;
    // }

    // if(req.query.score.school){
    //   scroe.school = req.query.score.school;
    // };
    // if(req.body.score.school){
    //   scroe.school = req.body.score.school;
    // }

    scoreDao.getScoreByPage(score,page, rowcount, 0,function (err, result) {
          if(err){
            res.send(err);
          }else{
              res.json(result);
          }
          next();
         // res.render('admin/scorelist', { scores:scores});
    });

    // getByPage(req, res, function(changePer_page,per_page){
    //   scoreDao.getByPage(changePer_page,per_page, req,function (err, scores) {
    //         if (err) {
    //           scores = [];
    //         };

    //         //var total_rows  = req.query.pageCount;
    //         //var total_rows = 30;
    //         // var paginator = new pagination.ItemPaginator({prelink:base_url, current: changePer_page, rowsPerPage: per_page, totalResult: total_rows});
    //         // var Create_links = paginator.render();
    //         //res.send({ title: '主页',innerHtml:res.render('admin/scorelist', { title: '主页',scores:scores,Create_links:Create_links, pageCount:total_rows}), pageCount:total_rows})
    //         //res.render('admin/scorelist', { scores:scores,Create_links:Create_links});
    //         res.render('admin/scorelist', { scores:scores});
    //   });
    // });
}

function getStudentByPage(req, res){
    getByPage(req, function(changePer_page,per_page){
      studentDao.getByPage(changePer_page,per_page, req,function (err, students) {
            if (err) {
              students = [];
            };
            res.render('admin/studentlist', { students:students});
      });
    });
}

function getByPage(req, callback){
  var per_pages = 1;
    if(req.query.page){
      per_pages = req.query.page;
    };
    if(req.body.per_page){
      per_pages = req.body.page;
    }

    var per_page = 20;
    if(req.query.pageCount){
      per_page = req.query.pageCount;
    };
    if(req.body.pageCount){
      per_page = req.body.pageCount;
    }

    var changePer_page = ( per_pages - 1 ) * per_page;
    callback(changePer_page,per_page);
}

module.exports = router;
