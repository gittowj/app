/*
* @Author: anziguoer
* @Email: anziguoer@sina.com
* @Date:   2016-09-14 11:40:12
* @Last Modified by:   anziguoer
* @Last Modified time: 2016-09-14 11:40:31
* @Descrition : wechat 微信支付功能
*/

/*
* @Author: anziguoer
* @Email: anziguoer@sina.com
* @Date:   2016-09-14 11:40:12
* @Last Modified by:   anziguoer
* @Last Modified time: 2016-09-14 11:40:31
* @Descrition : wechat 微信支付功能
*/

var url = require('url');
var queryString = require('querystring');
var crypto = require('crypto');
var request = require('request');
var xml2jsparseString = require('xml2js').parseString;
// 引入项目的配置信息
var config = require('./config/index.js');
var sha1 = require('sha1'); 

module.exports = {
    /**
     * 获取微信统一下单参数
     */
    getUnifiedorderXmlParams(obj){
        var body = '<xml> ' +
            '<appid>'+config.wxappid+'</appid> ' +
            '<attach>'+obj.attach+'</attach> ' +
            '<body>'+obj.body+'</body> ' +
            '<mch_id>'+config.mch_id+'</mch_id> ' +
            '<nonce_str>'+obj.nonce_str+'</nonce_str> ' +
            '<notify_url>'+obj.notify_url+'</notify_url>' +
            '<openid>'+obj.openid+'</openid> ' +
            '<out_trade_no>'+obj.out_trade_no+'</out_trade_no>'+
            '<spbill_create_ip>'+obj.spbill_create_ip+'</spbill_create_ip> ' +
            '<total_fee>'+obj.total_fee+'</total_fee> ' +
            '<trade_type>'+obj.trade_type+'</trade_type> ' +
            '<sign>'+obj.sign+'</sign> ' +
            '</xml>';
        return body;
    },

    /**
     * 获取微信统一下单参数
     */
    getUnifiedorderXmlParams(obj){
        var body = '<xml> ' +
            '<appid>'+config.wxappid+'</appid> ' +
            '<attach>'+obj.attach+'</attach> ' +
            '<body>'+obj.body+'</body> ' +
            '<mch_id>'+config.mch_id+'</mch_id> ' +
            '<nonce_str>'+obj.nonce_str+'</nonce_str> ' +
            '<notify_url>'+obj.notify_url+'</notify_url>' +
            '<openid>'+obj.openid+'</openid> ' +
            '<out_trade_no>'+obj.out_trade_no+'</out_trade_no>'+
            '<spbill_create_ip>'+obj.spbill_create_ip+'</spbill_create_ip> ' +
            '<total_fee>'+obj.total_fee+'</total_fee> ' +
            '<trade_type>'+obj.trade_type+'</trade_type> ' +
            '<sign>'+obj.sign+'</sign> ' +
            '</xml>';
        return body;
    },

    /**
     * 获取微信统一下单的接口数据
     */
    getPrepayId(obj){
        var that = this;
        // 生成统一下单接口参数
        var UnifiedorderParams = {
            appid : config.wxappid,
            attach : obj.attach,
            body : obj.body,
            mch_id : config.mch_id,
            nonce_str: this.createNonceStr(),
            notify_url : obj.notify_url,// 微信付款后的回调地址
            openid : obj.userInfo.openid,
            out_trade_no : obj.out_trade_no,//new Date().getTime(), //订单号
            spbill_create_ip : obj.spbill_create_ip,
            total_fee : obj.total_fee,
            trade_type : 'JSAPI',
            // sign : getSign(),
        };
        // 返回 promise 对象
        return  new Promise(function (resolve, reject) {
            // 获取 sign 参数
            UnifiedorderParams.sign = that.getSign(UnifiedorderParams);
            var url = 'https://api.mch.weixin.qq.com/pay/unifiedorder';
            request.post({url : url, body:JSON.stringify(that.getUnifiedorderXmlParams(UnifiedorderParams))}, function (error, response, body) {
                var prepay_id = '';
                if (!error && response.statusCode == 200) {
                    // 微信返回的数据为 xml 格式， 需要装换为 json 数据， 便于使用
                    xml2jsparseString(body, {async:true}, function (error, result) {
                        prepay_id = result.xml.prepay_id[0];
                        // 放回数组的第一个元素
                        resolve(prepay_id);
                    });
                } else {
                    reject(body);
                }
            });
        })
    },

     /**
     * 获取微信支付的签名
     * @param payParams
     */
    getSign(signParams){
        // 按 key 值的ascll 排序
        var keys = Object.keys(signParams);
        keys = keys.sort();
        var newArgs = {};
        keys.forEach(function (val, key) {
            if (signParams[val]){
                newArgs[val] = signParams[val];
            }
        })
        var string = queryString.stringify(newArgs)+'&key='+config.wxpaykey;
        // 生成签名
        return crypto.createHash('md5').update(queryString.unescape(string), 'utf8').digest("hex").toUpperCase();
    },
    /**
     * 微信支付的所有参数
     * @param req 请求的资源, 获取必要的数据
     * @returns {{appId: string, timeStamp: Number, nonceStr: *, package: string, signType: string, paySign: *}}
     */
    getBrandWCPayParams( obj, callback ){
        var that = this;
        var prepay_id_promise = that.getPrepayId(obj);
        prepay_id_promise.then(function (prepay_id) {
            var prepay_id = prepay_id;
            var wcPayParams = {
                "appId" : config.wxappid,     //公众号名称，由商户传入
                "timeStamp" : parseInt(new Date().getTime() / 1000).toString(),         //时间戳，自1970年以来的秒数
                "nonceStr" : that.createNonceStr(), //随机串
                // 通过统一下单接口获取
                "package" : "prepay_id="+prepay_id,
                "signType" : "MD5",         //微信签名方式：
            };
            wcPayParams.paySign = that.getSign(wcPayParams); //微信支付签名
            callback(null, wcPayParams);
        },function (error) {
            callback(error);
        });
    },

    /**
     * 获取随机的NonceStr
     */
    createNonceStr() {
        return Math.random().toString(36).substr(2, 15);
    },

    getOauthUrlForCode(redirect_url){
        var that = this;

        redirect_url = config.redirect_url + redirect_url;
        var getCodeUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+config.wxappid+"&redirect_uri="+redirect_url+"&response_type=code&scope=snsapi_base&state=123#wechat_redirect";
        //res.redirect(getCodeUrl);
        request.redirect(getCodeUrl);
    },

    /**
     * 获取微信的 AccessToken
     */
    getAccessToken(obj, cb){
        if(!obj.userInfo.code){
            req.url + req.queryString
            getOauthUrlForCode(res, req.url + req.queryString)
        }

        var that = this;
        var getAccessTokenUrl = "https://api.weixin.qq.com/sns/oauth2/access_token?appid="+config.wxappid+"&secret="+config.wxappsecret+"&code="+obj.userInfo.code+"&grant_type=authorization_code";
        request.post({url : getAccessTokenUrl}, function (error, response, body) {
            if (!error && response.statusCode == 200){
                if (40029 == body.errcode) {
                    cb(error, body);
                } else {
                    body = JSON.parse(body);


                    obj.userInfo.access_token = body.access_token;
                    obj.userInfo.expires_in = body.expires_in;
                    obj.userInfo.refresh_token = body.refresh_token;
                    obj.userInfo.openid = body.openid;
                    obj.userInfo.scope = body.scope;
                    console.log(obj.userInfo);
                    // 拼接微信的支付的参数
                    that.getBrandWCPayParams(obj, function (error, responseData) {
                        if (error) {
                            cb(error);
                        } else {
                            cb(null, responseData);
                        }
                    });
                }
            } else {
                cb(error);
            }
        });
    },
    sign(){
        return function(req, res, next){  
        config = config || {};  
        var q = req.query;  
        var token = config.token;  
        var signature = q.signature; //微信加密签名  
            var nonce = q.nonce; //随机数  
            var timestamp = q.timestamp; //时间戳  
            var echostr = q.echostr; //随机字符串  
            /* 
                1）将token、timestamp、nonce三个参数进行字典序排序 
                2）将三个参数字符串拼接成一个字符串进行sha1加密 
                3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信 
            */  
            var str = [token, timestamp, nonce].sort().join('');  
            var sha = sha1(str);  
            if (req.method == 'GET') {  
    
                if (sha == signature) {  
                    res.send(echostr+'')  
                }else{  
                    res.send('err');  
                }  
            }  
            else if(req.method == 'POST'){  
                if (sha != signature) {  
                    return;  
                }  
                next();  
            }  
        }
    }

}