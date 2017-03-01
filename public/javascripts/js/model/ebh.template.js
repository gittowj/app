//耳鼻喉
var template = {
		//table结果显示
		tableTitle:'检验结果'
};

//颈部template.jb.enter();
template.jb = {
		//录入模板
		enter : function() {
			return ['<li class="dp_cont">			<table class="dg_table" rules="rows">				<tr>					<th>项目名</th>					<th>检验结果</th>					<th>单位</th>					<th>参考范围</th>				</tr>				<tr>					<td class="dgt_title">淋巴结肿大</td>					<td>					<span id="dataModel_314_-1_colsPanel_linbajiezhongda"></span>					先发生于<span id="dataModel_314_-1_colsPanel_xianfashengyuna"></span>側					左侧<span id="dataModel_314_-1_colsPanel_zuocege"></span>个/					右侧<span id="dataModel_314_-1_colsPanel_youcege"></span>个					最大<span id="dataModel_314_-1_colsPanel_zuidacm"></span>cm X 					<span id="dataModel_314_-1_colsPanel_cm"></span>cm					</td>					<td></td>					<td>~</td>				</tr>				<tr>					<td class="dgt_title">质地</td>					<td><div id="dataModel_314_-1_colsPanel_zhidi"></div></td>					<td></td>					<td>~</td>				</tr>				<tr>					<td class="dgt_title">压痛</td>					<td><div id="dataModel_314_-1_colsPanel_yatong"></div></td>					<td></td>					<td>~</td>				</tr>				<tr>					<td class="dgt_title">活动度</td>					<td><div id="dataModel_314_-1_colsPanel_huodongdu"></div></td>					<td></td>					<td>~</td>				</tr>			</table>		</li>'].join('');
		}
};

//鼻咽癌template.bya.enter();
template.bya = {
		//录入模板
		enter : function() {
			return ['<li class="dp_cont"><table class="dg_table" rules="rows">				<tr>					<th>项目名</th>					<th>检验结果</th>					<th>单位</th>					<th>参考范围</th>				</tr>				<tr>					<td class="dgt_title">临床分期</td>					<td><span id="dataModel_337_-1_colsPanel_col_5614"></span>						T<span id="dataModel_337_-1_colsPanel_col_5617"></span>、 N<span						id="dataModel_337_-1_colsPanel_col_5618"></span>、 M<span						id="dataModel_337_-1_colsPanel_col_5619"></span>、 G<span						id="dataModel_337_-1_colsPanel_col_5620"></span>。</td>					<td></td>					<td>~</td>				</tr>				<tr>					<td class="dgt_title">病理分期</td>					<td><div id="dataModel_337_-1_colsPanel_col_5621"></div></td>					<td></td>					<td>~</td>				</tr>				<tr>					<td class="dgt_title">确诊时间</td>					<td><div id="dataModel_337_-1_colsPanel_col_5622"></div></td>					<td></td>					<td>~</td>				</tr>			</table></li>'].join('');
		}
};

//治疗template.zl.enter();
template.zl = {
		//录入模板
		enter : function() {
			return ['<li class="dp_cont"><table class="dg_table" rules="rows">					<tr>						<th>项目名</th>						<th>检验结果</th>						<th>单位</th>						<th>参考范围</th>					</tr>					<tr>						<td class="dgt_title">治疗时间</td>						<td><div id="dataModel_524_-1_colsPanel_col_10283"></div></td>						<td></td>						<td>~</td>					</tr>					<tr>						<td class="dgt_title">治疗医院</td>						<td><span id="dataModel_524_-1_colsPanel_col_10284"></span>							，医院的类别：<span id="dataModel_524_-1_colsPanel_col_10286"></span>						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td colspan="4">治疗方式（化疗剂量的单位（Gy））</td>					</tr>					<tr>						<td colspan="4">放疗方案：普通放疗</td>					</tr>					<tr>						<td class="dgt_title">原发部位</td>						<td>单次剂量<span							id="dataModel_524_-1_colsPanel_col_10287"></span>							*次数<span							id="dataModel_524_-1_colsPanel_col_10289"></span>							=（总剂量<span							id="dataModel_524_-1_colsPanel_col_10290"></span>）						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td class="dgt_title">颈 部</td>						<td>单次剂量<span							id="dataModel_524_-1_colsPanel_col_10291"></span>							*次数<span							id="dataModel_524_-1_colsPanel_col_10292"></span>							=（总剂量<span							id="dataModel_524_-1_colsPanel_col_10293"></span>）						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td class="dgt_title" rowspan="2">补 量</td>						<td>区域：<span								id="dataModel_524_-1_colsPanel_col_10294"></span></td>						<td></td>						<td>~</td>					</tr>					<tr>						<td>单次剂量<span							id="dataModel_524_-1_colsPanel_col_10295"></span>							*次数<span							id="dataModel_524_-1_colsPanel_col_10296"></span>							=（总剂量<span							id="dataModel_524_-1_colsPanel_col_10297"></span>）						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td class="dgt_title" rowspan="2">转移部位</td>						<td>区域:<span								id="dataModel_524_-1_colsPanel_col_10301"></span></td>						<td></td>						<td>~</td>					</tr>					<tr>						<td>单次剂量<span							id="dataModel_524_-1_colsPanel_col_10298"></span>							*次数<span							id="dataModel_524_-1_colsPanel_col_10299"></span>							=（总剂量<span							id="dataModel_524_-1_colsPanel_col_10300"></span>）						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td colspan="4">放疗方案：调强放疗</td>					</tr>					<tr>						<td class="dgt_title">PGTVnx</td>						<td>单次剂量<span							id="dataModel_524_-1_colsPanel_col_10302"></span>							*次数<span id="dataModel_524_-1_colsPanel_col_10303"></span>							=（总剂量<span							id="dataModel_524_-1_colsPanel_col_10304"></span>）						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td class="dgt_title">PGTVnd</td>						<td>单次剂量<span							id="dataModel_524_-1_colsPanel_col_10305"></span>							*次数<span id="dataModel_524_-1_colsPanel_col_10306"></span>							=（总剂量<span							id="dataModel_524_-1_colsPanel_col_10307"></span>）						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td class="dgt_title">PTV1</td>						<td>单次剂量<span							id="dataModel_524_-1_colsPanel_col_10308"></span>							*次数<span id="dataModel_524_-1_colsPanel_col_10309"></span>							=（总剂量<span							id="dataModel_524_-1_colsPanel_col_10310"></span>）						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td class="dgt_title">PTV2</td>						<td>单次剂量<span							id="dataModel_524_-1_colsPanel_col_10311"></span>							*次数<span id="dataModel_524_-1_colsPanel_col_10312"></span>							=（总剂量<span							id="dataModel_524_-1_colsPanel_col_10313"></span>）						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td colspan="4">化疗方案</td>					</tr>					<tr>						<td class="dgt_title" rowspan="3">诱导化疗</td>						<td>药名<span							id="dataModel_524_-1_colsPanel_col_10314"></span> （剂量<span							id="dataModel_524_-1_colsPanel_col_10315"></span>							*<span							id="dataModel_524_-1_colsPanel_col_10316"></span>							天数）*<span							id="dataModel_524_-1_colsPanel_col_10317"></span>次数						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td>药名<span							id="dataModel_524_-1_colsPanel_col_10318"></span> （剂量<span							id="dataModel_524_-1_colsPanel_col_10319"></span>							*<span							id="dataModel_524_-1_colsPanel_col_10320"></span>							天数）*<span							id="dataModel_524_-1_colsPanel_col_10321"></span>次数						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td>药名<span							id="dataModel_524_-1_colsPanel_col_10322"></span> （剂量<span							id="dataModel_524_-1_colsPanel_col_10323"></span>							*<span							id="dataModel_524_-1_colsPanel_col_10324"></span>							天数）*<span							id="dataModel_524_-1_colsPanel_col_10325"></span>次数						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td class="dgt_title" rowspan="3">辅助化疗</td>						<td>药名<span							id="dataModel_524_-1_colsPanel_col_10326"></span> （剂量<span							id="dataModel_524_-1_colsPanel_col_10327"></span>							*<span							id="dataModel_524_-1_colsPanel_col_10328"></span>							天数）*<span							id="dataModel_524_-1_colsPanel_col_10329"></span>次数						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td>药名<span							id="dataModel_524_-1_colsPanel_col_10330"></span> （剂量<span							id="dataModel_524_-1_colsPanel_col_10331"></span>							*<span							id="dataModel_524_-1_colsPanel_col_10332"></span>							天数）*<span							id="dataModel_524_-1_colsPanel_col_10333"></span>次数						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td>药名<span							id="dataModel_524_-1_colsPanel_col_10334"></span> （剂量<span							id="dataModel_524_-1_colsPanel_col_10335"></span>							*<span							id="dataModel_524_-1_colsPanel_col_10336"></span>							天数）*<span							id="dataModel_524_-1_colsPanel_col_10337"></span>次数						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td class="dgt_title" rowspan="3">同步化疗</td>						<td>药名<span							id="dataModel_524_-1_colsPanel_col_10338"></span> （剂量<span							id="dataModel_524_-1_colsPanel_col_10339"></span>							*<span							id="dataModel_524_-1_colsPanel_col_10340"></span>							天数）*<span							id="dataModel_524_-1_colsPanel_col_10342"></span>次数						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td>药名<span							id="dataModel_524_-1_colsPanel_col_10343"></span> （剂量<span							id="dataModel_524_-1_colsPanel_col_10344"></span>							*<span							id="dataModel_524_-1_colsPanel_col_10345"></span>							天数）*<span							id="dataModel_524_-1_colsPanel_col_10346"></span>次数						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td>药名<span							id="dataModel_524_-1_colsPanel_col_10347"></span> （剂量<span							id="dataModel_524_-1_colsPanel_col_10348"></span>							*<span							id="dataModel_524_-1_colsPanel_col_10349"></span>							天数）*<span							id="dataModel_524_-1_colsPanel_col_10350"></span>次数						</td>						<td></td>						<td>~</td>					</tr>					<tr>						<td class="dgt_title">手术</td>						<td><div id="dataModel_524_-1_colsPanel_col_10351"></div></td>						<td></td>						<td>~</td>					</tr>			</table></li>'].join('');
		}
};