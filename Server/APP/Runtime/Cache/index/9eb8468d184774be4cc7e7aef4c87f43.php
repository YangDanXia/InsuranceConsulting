<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <script type="text/javascript" src="APP/Public/Js/jquery.js"></script>
</head>
<body>
    
    <h1>official_list</h1>
    <!-- 查看U方法生成的完整地址 -->
    <!-- <?php echo U('admin/Admin/official_list');?> -->
    <p>name<input type="text" id="name" /></p>
    <p>pwd:<input type="password" id="pwd" /></p>
    <p>new:<input type="password" id="newpwd"></p>
    <p>uId:<input type="text" id="userId"></p>
    <p>qId:<input type="text" id="questionId"></p>

    <button id="but1" onclick="a()">official</button>
    <button id="but2" onclick="b()">show</button>
    <p><?php echo ($isLogin); ?></p>
</body>
    <script type="text/javascript">
        function a() {
            // window.location.href='<?php echo U('index/Index/index1');?>';
            //登录接口
            $name = $('#name').val();
            $pwd = $('#pwd').val();
            $.post("/text/admin/login", {name:$name, pwd:$pwd}, function(data) {
                $('h1').html(data);
            });
        }

        function b() {
            //登录接口
            // $name = $('#name').val();
            // $pwd = $('#pwd').val();
            // $.post("/text/admin/login", {name:$name, pwd:$pwd}, function(data) {
            //     $('h1').html(data);
            // });

            //修改密码接口
            // $name = $('#name').val();
            // $pwd = $('#pwd').val();
            // $newpwd = $('#newpwd').val();
            // $.post("/text/changepwd", {name:$name, pwd:$pwd, newpwd:$newpwd}, function(data) {
            //     $('h1').html(data);
            // });
            

            //用户审核接口
            // $userId = $('#userId').val();
            // $.post("/text/consultant/notpass", {userId:$userId}, function(data) {
            //     $('h1').html(data);
            // });
            

            //问题审核接口
            // $questionId = $('#questionId').val();
            // $.post("/text/question/notpass", {questionId:$questionId}, function(data) {
            //     $('h1').html(data);
            // });
            
            // $questionId = $('#questionId').val();
            
            
            
            // $.post("/text/question/list", {key:'haiqian'}, function(data) {
            //     $('h1').html(data);
            // });





            // $questionId = $('#questionId').val();
            // $.get("http://120.78.89.170/question/list", function(data) {
            //     $('h1').html(data);
            // });

            //查看官方顾问接口
            //请求方法别搞错
            // $firstRow = 0;
            // $.post("/text/official/read", {firstRow : $firstRow}, function(data) {
            //     $('h1').html(data);
            // });
            

            window.location.href='index1.html';
        }

    </script>
</html>