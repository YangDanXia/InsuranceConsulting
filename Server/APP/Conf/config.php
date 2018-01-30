<?php
return array(
	//'配置项'=>'配置值'
    
    //应用分组设置
    'APP_GROUP_LIST' => 'index,admin',
    'DEFAULT_GROUP' => 'index',
    'APP_GROUP_MODE' => 1,

    //路由设置
    'URL_ROUTER_ON' => true,
    'URL_ROUTE_RULES' => array(
            //消息提醒条数
            array('newNum','admin/User/new_num','', 'post' , ''),
            //消息提醒列表
            array('newList','admin/User/new_list','', 'post' , ''),
            //
            array('newRead','admin/User/new_read','', 'post' , ''),
            //管理员登录
            array('admin/login', 'admin/Login/index', '', 'post', ''),
            //用户列表查看
            array('user/list', 'admin/Admin/user_list', '', 'post', ''),
            //用户添加
            array('user/add', 'admin/User/user_add', '', 'post', ''),
            //用户提问问题
            array('user/ask', 'admin/User/user_ask', '', 'post', ''),
            //精品问题列表查看
            array('boutique/list', 'admin/Admin/boutique_list', '', 'post', ''),
            //管理员修改密码
            array('changepwd', 'admin/Admin/changepwd', '', 'post', ''),
            //官方顾问列表
            array('official/list', 'admin/Admin/official_list', '', 'post', ''),
            //官方顾问增加
            array('official/add', 'admin/Admin/official_add', '', 'post', ''),
            //保险顾问申请表查看
            array('consultant/application/list', 'admin/Admin/application_consultant_list', '', 'post', ''),
            //保险顾问列表查看
            array('consultant/list', 'admin/Admin/consultant_list', '', 'post', ''),
            //保险顾问申请
            array('consultant/add', 'admin/User/consultant_add', '', 'post', ''),
            //保险顾问审核通过
            array('consultant/pass', 'admin/Admin/consultant_pass', '', 'post', ''),
            //保险顾问审核不通过
            array('consultant/notpass', 'admin/Admin/consultant_not_pass', '', 'post', ''),
            //问题付费列表查看
            array('question/charge', 'admin/Official/que_list_charge', '', 'post', ''),
            //问题非付费列表查看
            array('question/free', 'admin/Official/que_list_free', '', 'post', ''),//顺序要注意
            //问题申请表查看
            array('question/application/list', 'admin/Admin/question_application_list', '', 'post', ''),
            //问题列表查看
            array('question/list', 'admin/Admin/que_list', '', 'post', ''),
            //问题回复
            array('question/reply', 'admin/Official/reply', '', 'post', ''),
            //问题审核通过
            array('question/pass', 'admin/Admin/question_pass', '', 'post', ''),
            //问题审核不通过
            array('question/notpass', 'admin/Admin/question_not_pass', '', 'post', ''),
            //问题设置为精品
            array('question/boutique', 'admin/Admin/boutique', '', 'post', ''),
            //评价问题回复
            array('evaluate', 'admin/User/evaluate', '', 'post', ''),
            //验证码发送
            array('code', 'admin/User/code', '', 'post', ''),
            //上传图片
            array('upload', 'admin/User/upload', '', 'post', ''),
            //话题发布
            array('topic/add', 'admin/User/topic_add', '', 'post', ''),
            //当前话题
            array('topic/now', 'admin/User/topic_now', '', 'post', ''),
            //话题列表
            array('topic/list', 'admin/User/topic_list', '', 'post', ''),
            //话题选择
            array('topic/select1', 'admin/User/topic_select1', '', 'post', ''),
            //话题选择
            array('topic/select', 'admin/User/topic_select', '', 'post', ''),
            //记录号码
            array('Phone', 'admin/User/Phone', '', 'post', ''),
            //发表评论
            array('comment/add', 'admin/User/comment_add', '', 'post', ''),
            //消息提醒
            array('showanswer','admin/User/show_answer','', 'post' , ''),
            //删除官方顾问
            array('revoke','admin/Admin/revoke_admin','','post',''),

            //
            array('userList','admin/User/userList','','post',''),


            //若前面路由无效,统一回到登录界面
            array(':default', 'index/Index/index', '', 'get', ''),
            array(':default', 'index/Index/index', '', 'post', ''),
        ),

    //数据库设置
    'DB_HOST' => 'localhost',
    'DB_USER' => 'root',
    'DB_PWD' => '9611',
    'DB_NAME' => 'baoxian',
    'DB_PREFIX' => '',
);
?>