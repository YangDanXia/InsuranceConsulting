FUNCTION     - | URL
---------------|-------------------------------
[添加用户](#1) | http://120.78.89.170/user/add
[提问问题](#2) | http://120.78.89.170/user/ask
[历史记录](#3) | http://120.78.89.170/question/list
[精品问题列表](#4)| http://120.78.89.170/boutique/list
[回复问题](#5) | http://120.78.89.170/question/replay
[评价问题](#6) | http://120.78.89.170/evaluate
[保险顾问申请](#7)| http://120.78.89.170/consultant/add
[发送验证码](#8)| http://120.78.89.170/code
[登记号码](#9) | http://120.78.89.170/Phone
[图片上传](#10) | http://120.78.89.170/upload
[当前话题](#11) | http://120.78.89.170/topic/now
[话题列表](#12) | http://120.78.89.170/list
[发表评论](#13) | http://120.78.89.170/comment/add
[问题列表查看](#14)| http://120.78.89.170/question/list


<h4 id="1" > 1.添加用户</h4>

URL       |http://120.78.89.170/user/add
----------|--------------------
请求方式  |POST
返回值格式|JSON

参数名      |类型  |必填|默认|说明
------------|------|----|-----|------
key         |string|√   |     |密钥(haiqian)
userWechatId|string|√   |     |微信Id
userNickName|string|√   |     |用户昵称
userPicture |string|√   |     |用户头像

##### success：
--- |内容      |说明
--- |----------|--- 
code|200       |
msg |添加成功！|
data|userId    |

##### failed:
--------------|内容      |说明|
--------------|----------|----|
code          |404       |
msg           |添加失败！|
data          |          |


<h4 id="2" > 2.提问问题</h4>

URL|http://120.78.89.170/user/ask
---|---
请求方式|POST
返回值格式|JSON

参数名|类型|必填|默认|说明
---|---|---|---|---
key|string|√||密钥(haiqian)
userId|string|√||用户Id
questionType|string|√||问题类型
questionTitle|string|√||问题标题
questionDetail|string|√||问题详情
questionPhoto|string|×||问题照片
questionCost|string|√||费用类型

##### success：
---|内容|说明|
---|---|---|
code|200
msg|提问成功！
data|

##### failed:
---|内容|说明|
---|---|---|
code|404
msg|提问失败！
data|

<h4 id="3" > 3.历史记录</h4>

URL|http://120.78.89.170/question/list
---|---
请求方式|POST
返回值格式|JSON

参数名|类型|必填|默认|说明
---|---|---|---|---
key|string|√||密钥(haiqian)
userId|string|×||若传值则查询该用户历史提问
consultantId|string|×||若传值则查询该顾问历史回复

##### success：
---|内容|说明|
---|---|---|
code|200
msg|查询成功！
data|userId<br> userNickName<br> questionId<br> questionTitle<br> questionDetail<br> questionPhoto<br> questionType<br> questionCost<br> isClass<br> consultantId<br> consultantName<br> questionReply<br> questionSatis<br> isResolve<br>

##### failed:
---|内容|说明|
---|---|---|
code|404
msg|查询失败！
data|


<h4 id="4" > 4.精品问题列表</h4>

URL|http://120.78.89.170/question/list
---|---
请求方式|POST
返回值格式|JSON

参数名|类型|必填|默认|说明
---|---|---|---|---
key|string|√||密钥(haiqian)
questionId|string|×||若传值则查询该问题详情

##### success：
---|内容|说明|
---|---|---|
code|200
msg|查询成功！
data|questionId<br> questionTitle<br> questionDetail<br> questionPhoto<br> questionType<br> questionCost<br>questionTime<br>questionReply<br>

##### failed:
---|内容|说明|
---|---|---|
code|404
msg|查询失败！
data|

<h4 id="5" > 5.回复问题</h4>

URL|http://120.78.89.170/question/reply
---|---
请求方式|POST
返回值格式|JSON

参数名|类型|必填|默认|说明
---|---|---|---|---
key|string|√||密钥(haiqian)
userId|string|√||顾问编号
questionId|string|√||问题编号
questionReply|string|√||问题回复

##### success：
---|内容|说明|
---|---|---|
code|200
msg|回复成功！
data|

##### failed:
---|内容|说明|
---|---|---|
code|404
msg|回复失败！
data|

<h4 id="6" > 6.保险顾问申请</h4>

URL|http://120.78.89.170/consultant/add
---|---
请求方式|POST
返回值格式|JSON

参数名|类型|必填|默认|说明
---|---|---|---|---
key|string|√||密钥(haiqian)
userId|string|√||用户编号
consultantName|string|√||保险顾问姓名
consultantPhone|string|√||手机号码
consultantPhoto|string|×||保险顾问头像
consultantProof|string|√||专业资格证
consultnatExp|string|√||工作经历

##### success：
---|内容|说明|
---|---|---|
code|200
msg|申请成功，正在等待审核！
data|userId

##### failed:
---|内容|说明|
---|---|---|
code|404
msg|申请失败！
data|

<h4 id="7" > 7.评价问题</h4>

URL|http://120.78.89.170/evaluate
---|---
请求方式|POST
返回值格式|JSON

参数名|类型|必填|默认|说明
---|---|---|---|---
key|string|√||密钥(haiqian)
questionId|string|√||问题编号
questionSatis|string|√||1满意 2不满意
isResolve|string|√||是否解决

##### success：
---|内容|说明|
---|---|---|
code|200
msg|评价成功！
data|

##### failed:
---|内容|说明|
---|---|---|
code|404
msg|评价失败！
data|

<h4 id="8" > 8.添加用户</h4>

URL|http://120.78.89.170/code
---|---
请求方式|POST
返回值格式|JSON

参数名|类型|必填|默认|说明
---|---|---|---|---
key|string|√||密钥(haiqian)
mobile|string|√||手机号码
content|string|√||验证码

##### success：
---|内容|说明|
---|---|---|
code|200
msg|验证码发送成功！
data|

##### failed:
---|内容|说明|
---|---|---|
code|404
msg|验证码发送失败！
data|

<h4 id="9" > 9.登记号码</h4>

URL|http://120.78.89.170/Phone
---|---
请求方式|POST
返回值格式|JSON

参数名|类型|必填|默认|说明
---|---|---|---|---
key|string|√||密钥(haiqian)
userId|string|√||用户编号
userPhone|string|√||电话号码

##### success：
---|内容|说明|
---|---|---|
code|200
msg|登记成功！
data|

##### failed:
---|内容|说明|
---|---|---|
code|404
msg|登记失败！
data|

<h4 id="10" > 10.图片上传</h4>

URL|http://120.78.89.170/upload
---|---
请求方式|POST
返回值格式|JSON

参数名|类型|必填|默认|说明
---|---|---|---|---

##### success：
---|内容|说明|
---|---|---|
code|200
msg|上传成功！
data|

##### failed:
---|内容|说明|
---|---|---|
code|404
msg|上传失败！
data|



<h4 id="11" > 11.当前话题</h4>

URL|http://120.78.89.170/topic/now
---|---
请求方式|POST
返回值格式|JSON

参数名|类型|必填|默认|说明
---|---|---|---|---
key|string|√||密钥(haiqian)

##### success：

字段|说明|
---|---|
topicId|话题编号
topicTitle|话题标题
topicContent|话题内容
topicPicture|话题图片
topicCreateTime|话题发布时间
userId|用户编号
commentContent|评论内容
commentCreateTime|评论时间

##### failed: 
    查询失败！



<h4 id="12" > 12.话题列表</h4>

URL|http://120.78.89.170/topic/list
---|---
请求方式|POST
返回值格式|JSON

参数名|类型|必填|默认|说明
---|---|---|---|---
key|string|√||密钥(haiqian)

##### success：

字段|说明|
---|---|
topicId|话题编号
topicTitle|话题标题
topicContent|话题内容
topicPicture|话题图片
topicCreateTime|话题发布时间
gmt_modified|修改时间

##### failed:
    查询失败！


<h4 id="13" > 13.发表评论</h4>

URL|http://120.78.89.170/comment/add
---|---
请求方式|POST
返回值格式|JSON

参数名|类型|必填|默认|说明
---|---|---|---|---
key|string|√||密钥(haiqian)
commentContent|string|√||评论内容
userId|string|√||用户编号
topicId|string|√||话题编号

##### success：
    评论成功！

##### failed:
    评论失败！


<h4 id="14" > 14.问题列表查看</h4>

URL|http://120.78.89.170/question/list
---|---
请求方式|POST
返回值格式|JSON

参数名|类型|必填|默认|说明
---|---|---|---|---
key|string|√||密钥(haiqian)

##### success：
---|内容|说明|
---|---|---|
code|200
msg|查询成功！
data|userId<br> userNickName<br> questionId<br> questionTitle<br> questionDetail<br> questionPhoto<br> questionType<br> questionCost<br> isClass<br> consultantId<br> consultantName<br> questionReply<br> questionSatis<br> isResolve<br>


##### failed:
---|内容|说明|
---|---|---|
code|404
msg|查询失败！
data|

