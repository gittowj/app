//神经内科
var template = {
		//table结果显示
		tableTitle:'检验结果'
};

//颈部CTA检查(10087)
//录入模板：template.jbctajc.enter();
//显示模板：/WEB-INF/view/model/sjnk/jbctajc.jsp
template.jbctajc = {
		//录入模板
		enter : function() {
			return ['<li class="dp_cont"><div class="model-div">	<div>		<label class="md-title"><span style="color: red">*</span>检查结果：</label>				<span id="dataModel_10087_-1_colsPanel_jcjg"></span>	</div>	<div id="jcjgzcPanel">		<div>			<label class="md-title"><span style="color: red">*</span>异常项目：</label>						<span id="dataModel_10087_-1_colsPanel_ycxm"></span>		</div>		<div id="ycxmqtzdPanel" >			<label class="md-title"><span style="color: red">*</span>异常项目其他诊断：</label>		<span id="dataModel_10087_-1_colsPanel_qtzd"></span>		</div>		<table id="ycjgzcPanel" class="model-table">			<tbody>				<tr>					<th rowspan="7">狭窄程度</th>					<th colspan="7">责任病灶部位</th>				</tr>				<tr>					<td rowspan="2">A</td>					<th colspan="5">左侧</th>					<td rowspan="2">IA</td>				</tr>				<tr>					<td>SA</td>					<td>CCA</td>					<td>ICA</td>					<td>ECA</td>					<td>VA</td>				</tr>				<tr>					<td rowspan="4">		<span id="dataModel_10087_-1_colsPanel_axzcd"></span>					</td>					<td>		<span id="dataModel_10087_-1_colsPanel_zcxzcd"></span>					</td>					<td>	<span id="dataModel_10087_-1_colsPanel_zcxzcd1"></span>					</td>					<td>		<span id="dataModel_10087_-1_colsPanel_zcxzcd3"></span>					</td>					<td>		<span id="dataModel_10087_-1_colsPanel_zcxzcd4"></span>					</td>					<td>		<span id="dataModel_10087_-1_colsPanel_zcxzcd5"></span>					</td>					<td rowspan="4">		<span id="dataModel_10087_-1_colsPanel_iaxzcd"></span>					</td>				</tr>				<tr>					<th colspan="5">右侧</th>				</tr>				<tr>					<td>SA</td>					<td>CCA</td>					<td>ICA</td>					<td>ECA</td>					<td>VA</td>				</tr>				<tr>					<td>		<span id="dataModel_10087_-1_colsPanel_ycxzcd"></span>					</td>					<td><span id="dataModel_10087_-1_colsPanel_ycxzcd1"></span>					</td>					<td>	<span id="dataModel_10087_-1_colsPanel_ycxzcd2"></span>					</td>					<td><span id="dataModel_10087_-1_colsPanel_ycxzcd3"></span>					</td>					<td><span id="dataModel_10087_-1_colsPanel_ycxzcd4"></span>					</td>				</tr>			</tbody>		</table>	</div></div></li>'].join('');
		}
};

//颈部MRA检查(10088)
//录入模板：template.jbmrajc.enter();
//显示模板：/WEB-INF/view/model/sjnk/jbmrajc.jsp
template.jbmrajc = {
		//录入模板
		enter : function() {
			return ['<li class="dp_cont"><div class="model-div">	<div>		<label class="md-title"><span style="color: red">*</span>检查结果：</label>	<span id="dataModel_10088_-1_colsPanel_jcjg"></span>	</div>	<div id="ctajcjgzcPanel">		<div>			<label class="md-title"><span style="color: red">*</span>异常项目：</label>		<span id="dataModel_10088_-1_colsPanel_ycxm"></span>		</div>		<div id="ctaycxmqtzdPanel" >			<label class="md-title"><span style="color: red">*</span>异常项目其他诊断：</label>			<span id="dataModel_10088_-1_colsPanel_qtzd"></span>		</div>		<table id="ctaycjgzcPanel" class="model-table">			<tbody>				<tr>					<th rowspan="7">狭窄程度</th>					<th colspan="7">责任病灶部位</th>				</tr>				<tr>					<td rowspan="2">A</td>					<th colspan="5">左侧</th>					<td rowspan="2">IA</td>				</tr>				<tr>					<td>SA</td>					<td>CCA</td>					<td>ICA</td>					<td>ECA</td>					<td>VA</td>				</tr>				<tr>					<td rowspan="4">				<span id="dataModel_10088_-1_colsPanel_axzcd"></span>					</td>					<td>				<span id="dataModel_10088_-1_colsPanel_zcxzcd"></span>					</td>					<td>				<span id="dataModel_10088_-1_colsPanel_zcxzcd2"></span>					</td>					<td>				<span id="dataModel_10088_-1_colsPanel_zcxzcd3"></span>					</td>					<td>				<span id="dataModel_10088_-1_colsPanel_zcxzcd4"></span>					</td>					<td>				<span id="dataModel_10088_-1_colsPanel_zc5"></span>					</td>					<td rowspan="4">				<span id="dataModel_10088_-1_colsPanel_1"></span>					</td>				</tr>				<tr>					<th colspan="5">右侧</th>				</tr>				<tr>					<td>SA</td>					<td>CCA</td>					<td>ICA</td>					<td>ECA</td>					<td>VA</td>				</tr>				<tr>					<td>					<span id="dataModel_10088_-1_colsPanel_ycxzcd"></span>					</td>					<td>					<span id="dataModel_10088_-1_colsPanel_ycxzcd1"></span>					</td>					<td>					<span id="dataModel_10088_-1_colsPanel_ycxzcd2"></span>					</td>					<td>					<span id="dataModel_10088_-1_colsPanel_ycxzcd3"></span>					</td>					<td>					<span id="dataModel_10088_-1_colsPanel_yc"></span>					</td>				</tr>			</tbody>		</table>	</div></div></li>'].join('');
		}
};

//颅多普勒TCD(10089)
//录入模板：template.ldpntcd.enter();
//显示模板：/WEB-INF/view/model/sjnk/ldpntcd.jsp
template.ldpntcd = {
		//录入模板
		enter : function() {
			return ['<li class="dp_cont"><div class="model-div">	<div>		<label class="md-title"><span style="color: red">*</span>检查结果：</label>		<span id="dataModel_10089_-1_colsPanel_jcjg"></span>	</div>	<div id="tcdldpljcjgzcPanel" style="display: block;">		<table class="model-table">			<tbody>				<tr>					<th rowspan="9" style="width: 150px;">狭窄/闭塞</th>					<th colspan="11">责任病灶部位</th>				</tr>				<tr>					<th colspan="5">左侧</th>				</tr>				<tr>					<td>ICA</td>					<td>MCA</td>					<td>ACA</td>					<td>PCA</td>					<td>VA</td>				</tr>				<tr>					<td style="text-align: center">					<span id="dataModel_10089_-1_colsPanel_zcxzbs"></span>					</td>					<td style="text-align: center">					<span id="dataModel_10089_-1_colsPanel_zcxzbs1"></span>					</td>					<td>					<span id="dataModel_10089_-1_colsPanel_zcxzcd"></span>					</td>					<td style="text-align: center">					<span id="dataModel_10089_-1_colsPanel_zcxzcd1"></span>					</td>					<td style="text-align: center">					<span id="dataModel_10089_-1_colsPanel_zcxzbs2"></span>					</td>				</tr>				<tr>					<th colspan="5">右侧</th>				</tr>				<tr>					<td>ICA</td>					<td>MCA</td>					<td>ACA</td>					<td>PCA</td>					<td>VA</td>				</tr>				<tr>					<td style="text-align: center">					<span id="dataModel_10089_-1_colsPanel_ycxzbs"></span>					</td>					<td style="text-align: center">					<span id="dataModel_10089_-1_colsPanel_yc"></span>					</td>					<td style="text-align: center">					<span id="dataModel_10089_-1_colsPanel_ycxzbs1"></span>					</td>					<td style="text-align: center">					<span id="dataModel_10089_-1_colsPanel_ycxzbs2"></span>					</td>					<td style="text-align: center">			<span id="dataModel_10089_-1_colsPanel_ycxzbs4"></span>					</td>				</tr>				<tr>					<td colspan="5">BA</td>				</tr>				<tr>					<td style="text-align: center" colspan="5">					<span id="dataModel_10089_-1_colsPanel_xzbs"></span>					</td>				</tr>				<tr>					<th rowspan="2">侧支血管循环评估</th>					<td colspan="11" style="text-align: left;">					<span id="dataModel_10089_-1_colsPanel_czxgxhpg"></span>					</td>				</tr>				<tr>					<td colspan="11" style="text-align: left;">								<div class="col-md-12">						<span id="dataModel_10089_-1_colsPanel_czxgxhpgxm"></span>						</div>					</td>				</tr>			</tbody>		</table>	</div></div></li>'].join('');
		}
};

//头颅CT(10084)
//录入模板：template.tlct.enter();
//显示模板：/WEB-INF/view/model/sjnk/tlct.jsp
template.tlct = {
		//录入模板
		enter : function() {
			return ['<li class="dp_cont"><div class="model-div">	<div>		<label class="md-title"><span style="color: red">*</span>检查结果：</label>			<span id="dataModel_10084_-1_colsPanel_jcjg"></span>	</div>	<div id="tlctjcjgPanel" style="display: block;">		<table class="model-table">							<tbody>								<tr>																		<td colspan="13">责任病灶部位</td>								</tr>								<tr>									<td colspan="6">左侧</td>									<td colspan="5">右侧</td>									<td rowspan="2">脑室</td>									<td rowspan="2">蛛网膜下腔</td>								</tr>								<tr><td>&nbsp;</td>									<td>大脑半球</td>									<td>放射冠</td>									<td>基底节区</td>									<td>脑干</td>									<td>小脑</td>									<td>大脑半球</td>									<td>放射冠</td>									<td>基底节区</td>									<td>脑干</td>									<td>小脑</td>								</tr>								<tr><td>诊断分型</td>									<td>									<span id="dataModel_10084_-1_colsPanel_zcdnbq"></span>									</td>									<td>									<span id="dataModel_10084_-1_colsPanel_zcfsg"></span>									</td>									<td><span id="dataModel_10084_-1_colsPanel_zcjdjq"></span>									</td>									<td><span id="dataModel_10084_-1_colsPanel_zcng"></span>									</td>									<td><span id="dataModel_10084_-1_colsPanel_zc"></span>									</td>									<td><span id="dataModel_10084_-1_colsPanel_ycdnbq"></span>									</td>									<td>									<span id="dataModel_10084_-1_colsPanel_ycfsg"></span>									</td>									<td>									<span id="dataModel_10084_-1_colsPanel_ycjdjq"></span>									</td>									<td>									<span id="dataModel_10084_-1_colsPanel_ycng"></span>									</td>									<td>									<span id="dataModel_10084_-1_colsPanel_ycxn"></span>									</td>									<td>									<span id="dataModel_10084_-1_colsPanel_ns"></span>									</td>									<td>									<span id="dataModel_10084_-1_colsPanel_zwmxq"></span>									</td>								</tr>								<tr>									<td rowspan="4">伴发病灶</td>									<td colspan="12"  style="text-align: left;"><span>有无伴随缺血性脱髓鞘病变：</span> 									<span id="dataModel_10084_-1_colsPanel_ywbsqxxtsqbb"></span>									</td>								</tr>								<tr>									<td colspan="12" style="text-align: left;"><span>有无陈旧性脑梗死灶：</span> 									<span id="dataModel_10084_-1_colsPanel_ywcjxngsz"></span>									</td>								</tr>								<tr>									<td colspan="12" style="text-align: left;"><span>有无陈旧性脑出血灶：</span> 									<span id="dataModel_10084_-1_colsPanel_ywcjxncxz"></span>									</td>								</tr>							</tbody>						</table>	</div></div></li>'].join('');
		}
};

//头颅CTA(10091)
//录入模板：template.tlcta.enter();
//显示模板：/WEB-INF/view/model/sjnk/tlcta.jsp
template.tlcta = {
		//录入模板
		enter : function() {
			return ['<li class="dp_cont"><div class="model-div">	<div>		<label class="md-title"><span style="color: red">*</span>检查结果：</label>				<span id="dataModel_10091_0_colsPanel_jcjg"></span>	</div>	<div id="tlctajcjgPanel" style="display: block;">		<div>			<label class="md-title"><span style="color: red">*</span>异常项目：</label>						<span id="dataModel_10091_0_colsPanel_ycxm"></span>		</div>		<div id="jbctaycxmqtzdPanel" >			<label class="md-title"><span style="color: red">*</span>异常项目其他诊断：</label>						<span id="dataModel_10091_0_colsPanel_qtzd"></span>		</div>				<table id="jbctaycjgzcPanel" class="model-table">								<tbody>									<tr>										<td rowspan="7">狭窄程度</td>										<td colspan="6">责任病灶部位</td>									</tr>									<tr>										<td colspan="5">右侧</td>										<td rowspan="2">BA</td>									</tr>									<tr>										<td>ICA</td>										<td>MCA</td>										<td>ACA</td>										<td>PCA</td>										<td>VA</td>									</tr>									<tr>										<td><span id="dataModel_10091_0_colsPanel_ycxzcd"></span></td>										<td><span id="dataModel_10091_0_colsPanel_ycxzcd1"></span></td>										<td><span id="dataModel_10091_0_colsPanel_ycxzcd2"></span></td>										<td><span id="dataModel_10091_0_colsPanel_ycxzcd5"></span></td>										<td><span id="dataModel_10091_0_colsPanel_ycxzcd6"></span></td>										<td rowspan="4"><span id="dataModel_10091_0_colsPanel_xzcd"></span></td>									</tr>									<tr>										<td colspan="5">左侧</td>									</tr>									<tr>										<td>ICA</td>										<td>MCA</td>										<td>ACA</td>										<td>PCA</td>										<td>VA</td>									</tr>									<tr>										<td><span id="dataModel_10091_0_colsPanel_zcxzcd"></span></td>										<td><span id="dataModel_10091_0_colsPanel_zcxzcd1"></span></td>										<td><span id="dataModel_10091_0_colsPanel_zcxzcd2"></span></td>										<td><span id="dataModel_10091_0_colsPanel_zcxzcd3"></span></td>										<td><span id="dataModel_10091_0_colsPanel_zcxzcd5"></span></td>									</tr>									<tr>										<td rowspan="2">侧支血管循环评估</td>										<td colspan="6" style="text-align: left;"><span id="dataModel_10091_0_colsPanel_czxgxhpg"></span></td>									</tr>									<tr>										<td colspan="6" style="text-align: left;"><span id="dataModel_10091_0_colsPanel_czxgxhpgxm"></span></td>									</tr>								</tbody>							</table>	</div></div></li>'].join('');
		}
};

//头颅MRA(10083)
//录入模板：template.tlmra.enter();
//显示模板：/WEB-INF/view/model/sjnk/tlmra.jsp
template.tlmra = {
		//录入模板
		enter : function() {
			return ['<li class="dp_cont"><div class="model-div">	<div>		<label class="md-title"><span style="color: red">*</span>检查结果：</label>				<span id="dataModel_10083_-1_colsPanel_jcjg"></span>	</div>	<div id="mratlctajcjgPanel" style="display: block;">		<div>			<label class="md-title"><span style="color: red">*</span>异常项目：</label>						<span id="dataModel_10083_-1_colsPanel_ycxm"></span>		</div>		<div id="mrajbctaycxmqtzdPanel" >			<label class="md-title"><span style="color: red">*</span>异常项目其他诊断：</label>						<span id="dataModel_10083_-1_colsPanel_ycxmqtzd"></span>		</div>				<table id="mrajbctaycjgzcPanel" class="model-table">								<tbody>									<tr>										<td rowspan="7">狭窄程度</td>										<td colspan="6">责任病灶部位</td>									</tr>									<tr>										<td colspan="5">右侧</td>										<td rowspan="2">BA</td>									</tr>									<tr>										<td>ICA</td>										<td>MCA</td>										<td>ACA</td>										<td>PCA</td>										<td>VA</td>									</tr>									<tr>										<td><span id="dataModel_10083_-1_colsPanel_ycxzcd"></span></td>										<td><span id="dataModel_10083_-1_colsPanel_ycxzcd1"></span></td>										<td><span id="dataModel_10083_-1_colsPanel_ycxzcd2"></span></td>										<td><span id="dataModel_10083_-1_colsPanel_ycxzcd3"></span></td>										<td><span id="dataModel_10083_-1_colsPanel_ycxzcd4"></span></td>										<td rowspan="4"><span id="dataModel_10083_-1_colsPanel_xzcd"></span></td>									</tr>									<tr>										<td colspan="5">左侧</td>									</tr>									<tr>										<td>ICA</td>										<td>MCA</td>										<td>ACA</td>										<td>PCA</td>										<td>VA</td>									</tr>									<tr>										<td><span id="dataModel_10083_-1_colsPanel_zcxzcd"></span></td>										<td><span id="dataModel_10083_-1_colsPanel_zcxzcd1"></span></td>										<td><span id="dataModel_10083_-1_colsPanel_zcxzcd2"></span></td>										<td><span id="dataModel_10083_-1_colsPanel_zcxzcd4"></span></td>										<td><span id="dataModel_10083_-1_colsPanel_zcxzcd5"></span></td>									</tr>									<tr>										<td rowspan="2">侧支血管循环评估</td>										<td colspan="6" style="text-align: left;"><span id="dataModel_10083_-1_colsPanel_czxgxhpg"></span></td>									</tr>									<tr>										<td colspan="6" style="text-align: left;"><span id="dataModel_10083_-1_colsPanel_czxgxhpgxm"></span></td>									</tr>								</tbody>							</table>	</div></div></li>'].join('');
		}
};

//头颅MRI(10085)
//录入模板：template.tlmri.enter();
//显示模板：/WEB-INF/view/model/sjnk/tlmri.jsp
template.tlmri = {
		//录入模板
		enter : function() {
			return ['<li class="dp_cont"><div class="model-div">	<div>		<label class="md-title"><span style="color: red">*</span>检查结果：</label>				<span id="dataModel_10085_-1_colsPanel_jcjg"></span>	</div>	<div id="mritlctjcjgPanel" style="display: block;">		<table class="model-table">							<tbody>								<tr>																	<td colspan="13">责任病灶部位</td>								</tr>								<tr>									<td colspan="6">左侧</td>									<td colspan="5">右侧</td>									<td rowspan="2">脑室</td>									<td rowspan="2">蛛网膜下腔</td>								</tr>								<tr>	<td>&nbsp;</td>								<td>大脑半球</td>									<td>放射冠</td>									<td>基底节区</td>									<td>脑干</td>									<td>小脑</td>									<td>大脑半球</td>									<td>放射冠</td>									<td>基底节区</td>									<td>脑干</td>									<td>小脑</td>								</tr>								<tr> <td>诊断分型</td>									<td> 										<span id="dataModel_10085_-1_colsPanel_zcdnbq"></span>									</td>									<td>										<span id="dataModel_10085_-1_colsPanel_zcfsg"></span>									</td>									<td>										<span id="dataModel_10085_-1_colsPanel_zcjdjq"></span>									</td>									<td>										<span id="dataModel_10085_-1_colsPanel_zcng"></span>									</td>									<td>										<span id="dataModel_10085_-1_colsPanel_zcxn"></span>									</td>									<td>										<span id="dataModel_10085_-1_colsPanel_ycdnbq"></span>									</td>									<td>										<span id="dataModel_10085_-1_colsPanel_yc"></span>									</td>									<td>										<span id="dataModel_10085_-1_colsPanel_ycfsg"></span>									</td>									<td>										<span id="dataModel_10085_-1_colsPanel_ycng"></span>									</td>									<td>										<span id="dataModel_10085_-1_colsPanel_ycxn"></span>									</td>									<td>										<span id="dataModel_10085_-1_colsPanel_ns"></span>									</td>									<td>										<span id="dataModel_10085_-1_colsPanel_zwmxq"></span>									</td>								</tr>								<tr>									<td rowspan="4">伴发病灶</td>									<td colspan="12" style="text-align: left;"><span>有无伴随缺血性脱髓鞘病变：</span>										<span id="dataModel_10085_-1_colsPanel_ywbsqxxtsqbb"></span>									</td>								</tr>								<tr>									<td colspan="12" style="text-align: left;"><span>有无陈旧性脑梗死灶：</span>										<span id="dataModel_10085_-1_colsPanel_ywcjxngsz"></span>									</td>								</tr>								<tr>									<td colspan="12" style="text-align: left;"><span>有无陈旧性脑出血灶：</span>										<span id="dataModel_10085_-1_colsPanel_ywcjxncxz"></span>									</td>								</tr>							</tbody>						</table>	</div></div></li>'].join('');
		}
};


//血管造影(10086)
//录入模板：template.xgzy.enter();
//显示模板：/WEB-INF/view/model/sjnk/xgzy.jsp
template.xgzy = {
		//录入模板
		enter : function() {
			return ['<li class="dp_cont"><div class="model-div">	<div>		<label class="md-title"><span style="color: red">*</span>检查结果：</label>				<span id="dataModel_10086_-1_colsPanel_jcjg"></span>	</div>	<div id="jcjgzcPanel">		<div>			<label class="md-title"><span style="color: red">*</span>异常项目：</label>						<span id="dataModel_10086_-1_colsPanel_ycxm"></span>		</div>		<div id="ycxmqtzdPanel">			<label class="md-title"><span style="color: red">*</span>异常项目其他诊断：</label>		<span id="dataModel_10086_-1_colsPanel_qtzd"></span>		</div>		<table id="ycjgzcPanel" class="model-table">			<tbody>				<tr><td rowspan="7" class="style1">狭窄程度</td><td colspan="6" class="style1">责任病灶部位</td></tr><tr><td colspan="5" class="style2">右侧</td><td rowspan="2" class="style2">BA</td></tr><tr><td class="style2">ICA</td><td class="style2">MCA</td><td class="style2">ACA</td><td class="style2">PCA</td><td class="style2">VA</td></tr><tr><td>												<span id="dataModel_10086_-1_colsPanel_ycxzcd"></span>	</td><td><span id="dataModel_10086_-1_colsPanel_ycxzcd1"></span>	</td><td><span id="dataModel_10086_-1_colsPanel_ycxzcd2"></span></td><td><span id="dataModel_10086_-1_colsPanel_ycxzcd3"></span></td><td><span id="dataModel_10086_-1_colsPanel_ycxzcd4"></span></td><td><span id="dataModel_10086_-1_colsPanel_baxzcd"></span></td></tr><tr><td colspan="5" class="style2">左侧</td><td rowspan="2" class="style2">IA</td></tr><tr><td class="style2">ICA</td><td class="style2">MCA</td><td class="style2">ACA</td><td class="style2">PCA</td><td class="style2">VA</td></tr><tr><td><span id="dataModel_10086_-1_colsPanel_zcxzcd"></span></td><td><span id="dataModel_10086_-1_colsPanel_zcxzcd1"></span></td><td><span id="dataModel_10086_-1_colsPanel_zcxzcd2"></span></td><td><span id="dataModel_10086_-1_colsPanel_zcxzcd4"></span></td><td><span id="dataModel_10086_-1_colsPanel_zcxzcd5"></span></td><td><span id="dataModel_10086_-1_colsPanel_iaxzcd"></span></td></tr><tr><td rowspan="2" class="style1">侧支血管循环评估</td><td colspan="6"><div class="col-md-12"><div class="form-group success"><div align="left"><span id="dataModel_10086_-1_colsPanel_czxgxhpg"></span></div></div></div></td></tr><tr><td colspan="6"><div align="left">                                                	<span id="dataModel_10086_-1_colsPanel_czxgxhpgxm"></span></div></td></tr>			</tbody>		</table>	</div></div></li>'].join('');
		}
};