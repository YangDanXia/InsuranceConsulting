## 1.管理员
FUNCTION| URL
-----|-----
|登录 | http://120.78.89.170/admin/login|
|用户列表查看 |http://120.78.89.170/user/list|
|官方顾问列表查看|http://120.78.89.170/official/list|
|保险顾问列表查看|http://120.78.89.170/consultant/list|
|保险顾问申请表查看|http://120.78.89.170/consultant/application/list|
|问题列表查看|http://120.78.89.170/question/list|
|问题申请表查看|http://120.78.89.170/question/application/list|
|精品问题查看|http://120.78.89.170/boutique/list|
|修改密码|http://120.78.89.170/changepwd|
|添加官方顾问|http://120.78.89.170/official/add|
|问题设置为精品|	http://120.78.89.170/question/boutique|
|保险顾问审核通过|	http://120.78.89.170/consultant/pass|
|保险顾问审核不通过|	http://120.78.89.170/consultant/notpass|
|问题审核通过|	http://120.78.89.170/question/pass|
|问题审核不通过|	http://120.78.89.170/question/notpass|
|发布话题	|http://120.78.89.170/topic/add|


## 2.官方顾问
FUNCTION| URL
-----|-----
|付费问题列表|http://120.78.89.170/question/charge|
|非付费问题列表|http://120.78.89.170/question/free|
|问题回复|http://120.78.89.170/question/reply|

 <table>
 <tr>
 <td>功能</td><td colspan="5"><h1>登陆</td></tr>
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



<table>
 <tr>
 <td>功能</td><td colspan="5"><h1>官方顾问列表查看</td></tr>
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
 <td>功能</td><td colspan="5"><h1>保险顾问申请表查看</td></tr>
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
 <td>功能</td><td colspan="5"><h1>精品问题列表查看</td></tr>
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
 <td>功能</td><td colspan="5"><h1>修改密码</td></tr>
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
 <td>功能</td><td colspan="5"><h1>设置为精品问题</td></tr>
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
 <td>功能</td><td colspan="5"><h1>添加官方顾问</td></tr>
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
 <td>功能</td><td colspan="5"><h1>保险顾问审核通过</td></tr>
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


<table>
 <tr>
 <td>功能</td><td colspan="5"><h1>保险顾问审核不通过</td></tr>
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
 <td>功能</td><td colspan="5"><h1>问题审核通过</td></tr>
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
 <td>功能</td><td colspan="5"><h1>问题审核不通过</td></tr>
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
 <td>功能</td><td colspan="5"><h1>查看非付费问题列表</td></tr>
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
 <td>功能</td><td colspan="5"><h1>查看付费问题列表</td></tr>
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



<table>
 <tr>
 <td>功能</td><td colspan="5"><h1>回复问题</td></tr>
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




<table>
 <tr>
 <td>功能</td><td colspan="5"><h1>问题列表查看</td></tr>
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
 <td>功能</td><td colspan="5"><h1>用户列表查看</td></tr>
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
 <td>功能</td><td colspan="5"><h1>问题申请表查看</td></tr>
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



<table>
 <tr>
 <td>功能</td><td colspan="5"><h1>发布话题</td></tr>
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



