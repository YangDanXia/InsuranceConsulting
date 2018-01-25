## 1.管理员<span id="30">
FUNCTION| URL
-----|-----
|[登录](#1)| http://120.78.89.170/admin/login|
|[用户列表查看](#2) |http://120.78.89.170/user/list|
|[官方顾问列表查看](#3)|http://120.78.89.170/official/list|
|[保险顾问列表查看](#4)|http://120.78.89.170/consultant/list|
|[保险顾问申请表查看](#5)|http://120.78.89.170/consultant/application/list|
|[问题列表查看](#6)|http://120.78.89.170/question/list|
|[问题申请表查看](#7)|http://120.78.89.170/question/application/list|
|[精品问题查看](#8)|http://120.78.89.170/boutique/list|
|[修改密码](#9)|http://120.78.89.170/changepwd|
|[删除官方顾问](#20)|http://120.78.89.170/revoke|
|[添加官方顾问](#10)|http://120.78.89.170/official/add|
|[问题设置为精品](#11)|	http://120.78.89.170/question/boutique|
|[保险顾问审核通过](#12)|	http://120.78.89.170/consultant/pass|
|[保险顾问审核不通过](#13)|	http://120.78.89.170/consultant/notpass|
|[问题审核通过](#14)|	http://120.78.89.170/question/pass|
|[问题审核不通过](#15)|	http://120.78.89.170/question/notpass|
|[发布话题](#16)|http://120.78.89.170/topic/add|
|[话题列表](#21)|http://120.78.89.170/topic/list|
|[话题选择](#22)|http://120.78.89.170/topic/select|


## 2.官方顾问
FUNCTION| URL
-----|-----
|[付费问题列表](#17)|http://120.78.89.170/question/charge|
|[非付费问题列表](#18)|http://120.78.89.170/question/free|
|[问题回复](#19)|http://120.78.89.170/question/reply|



 <table>
 <tr>
 <td>功能</td><td colspan="5"><h1><span id="1">登录<span></td></tr>
<tr>
<tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/admin/login</td>
 </tr>
<tr>
    <td rowspan="4">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>name</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>账户</td>
</tr>
<tr>
   <td>pwd</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>密码</td>
</tr>
<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 登录成功! </td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2"> adminType:<br>
    1(管理员)
    0(官方顾问)<br>
isDefaultPwd:
            1(是)
            0(不是)	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 账户或密码错误 !</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>
</a>





<table>
 <tr>
 <td>功能</td><td colspan="5"><h1><span id="3"></a>官方顾问列表查看</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/official/list</td>
 </tr>
<tr>
    <td rowspan="3">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>adminAccount</td>
    <td> String </td>
    <td>×</td>
    <td> </td>
    <td>若传值则查询该官方顾问详情</td>
</tr>

<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询成功! </td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2"> adminAccount<br>
adminNickName<br>
adminPhone<br>
adminType	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询失败(无此官方顾问!)</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>



<table>
 <tr>
 <td>功能</td><td colspan="5"><h1><span id="4"></a>保险顾问列表查看</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/consultant/list</td>
 </tr>
<tr>
    <td rowspan="3">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>userId</td>
    <td> String </td>
    <td>×</td>
    <td> </td>
    <td>若传值则查询该顾问详情</td>
</tr>

<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询成功! </td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2"> userId
consultantName<br>
consultantPhoto<br>
consultantPhone<br>
consultantProof
consultantExp	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询失败(无此顾问!)</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>



<table>
 <tr>
 <td>功能</td><td colspan="5"><h1><span id="5"></a>保险顾问申请表查看</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/official/list</td>
 </tr>
<tr>
    <td rowspan="3">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>userId</td>
    <td> String </td>
    <td>×</td>
    <td> </td>
    <td>若传值则查询该官方顾问详情</td>
</tr>

<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询成功! </td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2"> adminAccount<br>
adminNickName<br>
adminPhone<br>
adminType	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询失败(无此官方顾问!)</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>


<span id=""></a>
<table>
 <tr>
 <td>功能</td><td colspan="5"><h1>保险顾问列表查看</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/consultant/list</td>
 </tr>
<tr>
    <td rowspan="3">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>userId</td>
    <td> String </td>
    <td>×</td>
    <td> </td>
    <td>若传值则查询该顾问详情</td>
</tr>

<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询成功! </td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2"> userId<br>
consultantName<br>
consultantPhoto<br>
consultantPhone<br>
consultantProof<br>
consultantExp	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询失败(无此顾问!)</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>

<span id=""></a>
<table>
 <tr>
 <td>功能</td><td colspan="5"><h1>保险顾问申请表查看</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/application/consultant/list</td>
 </tr>
<tr>
    <td rowspan="3">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>userId</td>
    <td> String </td>
    <td>×</td>
    <td> </td>
    <td>若传值则查询该顾问详情</td>
</tr>

<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询成功! </td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2"> userId<br>
consultantName<br>
consultantPhone<br>
consultantPhoto<br>
consultantProof<br>
consultantExp<br>
isFailed<br>
consultantResult	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询失败(无此顾问!)</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>
</table>

<table>
 <tr>
 <td>功能</td><td colspan="5"><span id="8"></a><h1>精品问题列表查看</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/boutique/list</td>
 </tr>
<tr>
    <td rowspan="3">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>questionId</td>
    <td> String </td>
    <td>×</td>
    <td> </td>
    <td>若传值则查询该顾问详情</td>
</tr>

<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询成功! </td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">
    questionId<br>
userId<br>
questionTitle<br>
questionDetail<br>
questionPhoto<br>
questionType<br>
questionCost<br>
questionTime<br>
isclassic<br>
questionSatis<br>
isResolve<br>
questionReply<br>
userWeChatId<br>
userNickName<br>
userPicture<br>
userPhone<br>
adminType<br>
consultantId<br>
consultantName<br>
consultantPhoto<br>
consultantPhone<br>
consultantProof<br>
consultantExp	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询失败(问题不存在</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>


<table>
 <tr>
 <td>功能</td><td colspan="5"><span id="9"></a><h1>修改密码</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/changepwd</td>
 </tr>
<tr>
    <td rowspan="5">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>name</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>账户</td>
</tr>
<tr>
   <td>pwd</td>
    <td> String </td>
    <td>√</td>
    <td></td>
    <td>密码</td>
</tr>
<tr>
   <td>newpwd</td>
    <td> String </td>
    <td>√</td>
    <td></td>
    <td>新密码</td>
</tr>

<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 修改成功! </td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 修改失败!(账户或密码错误)</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>

<table>
 <tr>
 <td>功能</td><td colspan="5"><span id="11"></a><h1>设置为精品问题</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/question/boutique</td>
 </tr>
<tr>
    <td rowspan="3">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>questionId</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>问题编号</td>
</tr>

<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 设置成功!</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 设置失败(问题不存在|问题无回复)</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>
</table>

<table>
 <tr>
 <td>功能</td><td colspan="5"><span id="20"></a><h1>删除官方顾问</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/revoke</td>
 </tr>
<tr>
    <td rowspan="3">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>adminCount</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>官方顾问编号</td>



<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 删除官方顾问成功</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">删除官方顾问失败!</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>


<table>
 <tr>
 <td>功能</td><td colspan="5"><span id="10"></a><h1>添加官方顾问</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/official/add</td>
 </tr>
<tr>
    <td rowspan="4">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>adminNickName</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>官方顾问昵称</td>
</tr>
<tr>
   <td>adminPhone</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>官方顾问手机</td>
</tr>


<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 添加成功</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">name 
    pwd
</td>
    <td>返回生成的账户与密码</td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">添加失败!</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>



<table>
 <tr>
 <td>功能</td><td colspan="5"><span id="12"></a><h1>保险顾问审核通过</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/consultant/pass</td>
 </tr>
<tr>
    <td rowspan="3">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>

<tr>
   <td>userId</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>顾问编号</td>
</tr>


<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 审核通过!</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">审核失败!</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>

[回到顶部](#30)
<table>
 <tr>
 <td>功能</td><td colspan="5"><h1><span id="13"></a>保险顾问审核不通过</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/consultant/pass</td>
 </tr>
<tr>
    <td rowspan="4">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>

<tr>
   <td>userId</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>顾问编号</td>
</tr>
<tr>
   <td>consultantResult</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>审核不通过原因</td>
</tr>


<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 已审核, 审核不通过!</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">审核失败!</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>


<table>
 <tr>
 <td>功能</td><td colspan="5"><h1><span id="14"></a>问题审核通过</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/question/pass</td>
 </tr>
<tr>
    <td rowspan="3">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>

<tr>
   <td>questionId</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>问题编号</td>
</tr>



<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 审核通过!</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">审核失败!</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>


<table>
 <tr>
 <td>功能</td><td colspan="5"><h1><span id="15"></a>问题审核不通过</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/question/notpass</td>
 </tr>
<tr>
    <td rowspan="4">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>

<tr>
   <td>userId</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>顾问编号</td>
</tr>
<tr>
   <td>consultantResult</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>问题审核不通过原因</td>
</tr>


<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 已审核, 审核不通过!</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">审核失败!</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>


<table>
 <tr>
 <td>功能</td><td colspan="5"><h1><span id="18"></a>查看非付费问题列表</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/question/free</td>
 </tr>
<tr>
    <td rowspan="2">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询成功!</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">userId<br>
userNickName<br>
questionId<br>
questionTitle<br>
questionDetail<br>
questionPhoto<br>
questionType<br>
questionCost<br>
isClassic<br>
consultantId<br>
consultantName<br>
questionReply<br>
questionSatis<br>
isResolve	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">查询失败!</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>



<table>
 <tr>
 <td>功能</td><td colspan="5"><h1><span id="17"></a>查看付费问题列表</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/question/charge</td>
 </tr>
<tr>
    <td rowspan="2">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 查询成功!</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">userId<br>
userNickName<br>
questionId<br>
questionTitle<br>
questionDetail<br>
questionPhoto<br>
questionType<br>
questionCost<br>
isClassic<br>
consultantId<br>
consultantName<br>
questionReply<br>
questionSatis<br>
isResolve	</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">查询失败!</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>

[回到顶部](#30)

<table>
 <tr>
 <td>功能</td><td colspan="5"><span id="19"></a><h1>回复问题</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/question/replay</td>
 </tr>
<tr>
    <td rowspan="5">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>userId</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>顾问编号</td>
</tr>
<tr>
   <td>questionId</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>问题编号</td>
</tr>
<tr>
   <td>questionReply</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>问题回复</td>
</tr>
<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2"> 回复成功!</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2"></td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">回复失败!</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>


[回到顶部](#30)

<table>
 <tr>
 <td>功能</td><td colspan="5"><h1><span id="6"></a>问题列表查看</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/question/list</td>
 </tr>
<tr>
    <td rowspan="6">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>questionId</td>
    <td> String </td>
    <td>×</td>
    <td> </td>
    <td>若传值则查询该顾问详情</td>
</tr>
<tr>
   <td>userId</td>
    <td> String </td>
    <td>×</td>
    <td> </td>
    <td>若传值则查询该顾问详情</td>
</tr>
<tr>
   <td>consultantId</td>
    <td> String </td>
    <td>×</td>
    <td> </td>
    <td>若传值则查询该顾问历史回复</td>
</tr>
<tr>
   <td>keyWord</td>
    <td> String </td>
    <td>×</td>
    <td> </td>
    <td>若传值则进行关键字查询</td>
</tr>
<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">查询成功!</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">userId<br>
userNickName<br>
questionId<br>
questionTitle<br>
questionDetail<br>
questionPhoto<br>
questionType<br>
questionCost<br>
isClassic<br>
consultantId<br>
consultantName<br>
questionReply<br>
questionSatis<br>
isResolve</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">查询失败!</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>




<table>
 <tr>
 <td>功能</td><td colspan="5"><h1><span id="2"></a>用户列表查看</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/user/list</td>
 </tr>
<tr>
    <td rowspan="4">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>userId</td>
    <td> String </td>
    <td>×</td>
    <td> </td>
    <td>若传值则查询该顾问详情</td>
</tr>
<tr>
   <td>userName</td>
    <td> String </td>
    <td>×</td>
    <td> </td>
    <td>若传值则查询该顾问详情(优先级低于Id)</td>
</tr>

<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">查询成功!</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">userId<br>
userWechatId<br>
userNickName<br>
userPicture<br>
userPhone<br>
adminType</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">查询失败(无此用户!)</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>




<table>
 <tr>
 <td>功能</td><td colspan="5"><span id="7"></a><h1>问题申请表查看</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/question/application/list</td>
 </tr>
<tr>
    <td rowspan="3">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>questionId</td>
    <td> String </td>
    <td>×</td>
    <td> </td>
    <td>若传值则查询该问题详情</td>
</tr>


<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">查询成功!</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2">userId<br>
userNickName<br>
questionId<br>
questionTitle<br>
questionDetail<br>
questionPhoto<br>
questionType<br>
questionCost<br>
isFailed<br>
questionResult</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">查询失败!</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>

[回到顶部](#30)


<table>
 <tr>
 <td>功能</td><td colspan="5"><span id="16"></a><h1>发布话题</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/topic/add</td>
 </tr>
<tr>
    <td rowspan="5">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>topicTitle</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>话题标题</td>
</tr>
<tr>
   <td>topicContent</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>话题内容</td>
</tr>
<tr>
   <td>topicPicture</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>话题图片</td>
</tr>


<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="4">Success</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>code</td>
    <td colspan="2"> 200 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">话题发表成功！</td>
    <td></td>
</tr>
<tr>
   <td>data</td>
    <td colspan="2"></td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
    <td>   </td>
    <td colspan="2">内容</td>
    <td>说明</td>
</tr>
<tr>
   <td>	code</td>
    <td colspan="2"> 404 </td>
    <td></td>
</tr>
<tr>
   <td>msg</td>
    <td colspan="2">话题发表失败！</td>
    <td></td>
</tr>
<tr>
   <td>	data</td>
    <td colspan="2">  </td>
    <td></td>
</tr>

</table>



<table>
 <tr>
 <td>功能</td><td colspan="5"><span id="21"></a><h1>话题列表</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/topic/list</td>
 </tr>
<tr>
    <td rowspan="2">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
    <td rowspan="8">返回值(json)</td>
    <td rowspan="6">success</td>
    <td colspan="2">内容</td>
    <td colspan="2">说明</td>
    
</tr>
<tr>
   <td colspan="2">topicId</td>
    <td colspan="1">话题编号</td>
    <td></td>
</tr>
<tr>
   <td colspan="2">topicTitle</td>
    <td colspan="1">话题标题</td>
    <td></td>
</tr>
<tr>
   <td colspan="2">topicPicture</td>
    <td colspan="1">话题图片</td>
    <td></td>
</tr>
<tr>
   <td colspan="2">topicContent</td>
    <td colspan="1">话题内容</td>
    <td></td>
</tr>
<tr>
   <td colspan="2">gmt_modified</td>
    <td colspan="1">修改时间</td>
    <td></td>
</tr>
<tr>
    <td rowspan="4">Failed</td>
   
</tr>

<tr>
    <td colspan="3">查询失败！</td>
    <td></td>
</tr>


</table> 


<table>
 <tr>
 <td>功能</td><td colspan="5"><span id="22"></a><h1>话题选择</td></tr>
 <tr>
 <td>URL</td><td colspan="5">http://120.78.89.170/topic/select</td>
 </tr>
<tr>
    <td rowspan="3">参数(post)<br/>
        </td>
    <td>参数名</td>
    <td> 类型 </td>
    <td>必填</td>
    <td>默认</td>
    <td>说明</td>
</tr>
<tr>
   <td>key</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>秘钥(haiqian)</td>
</tr>
<tr>
   <td>topicId</td>
    <td> String </td>
    <td>√</td>
    <td> </td>
    <td>话题编号</td>
</tr>
<tr>
    <td rowspan="2">返回值(json)</td>
    <td rowspan="1">success</td>
    <td colspan="4">
        topicTitle<br>
        topicContent<br>
        topicPicture<br>
        topicCreateTime<br>
        userId<br>
        commentContent<br>
        commentCreateTime<br>
    </td>
</tr>
<tr>
    <td rowspan="1">Failed</td>
    <td colspan="4">查询失败！</td>
</tr>

</table>

[回到顶部](#30)

