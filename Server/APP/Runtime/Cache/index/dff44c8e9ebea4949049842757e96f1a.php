<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <script type="text/javascript" src="APP/Public/Js/jquery.js"></script>
</head>
<body>
    <h1>official_list</h1>
    <?php echo U('admin/Admin/official_list');?>
    <button id="but" onclick="a()">查询</button>
    <p></p>
</body>
    <script type="text/javascript">
        // $('#but').click(function() {
        //     // alert('message');
        //     $.get('<?php echo U('admin/Admin/official_list','','');?>', function(data) {
        //         alert(date);
        //     });
        // });

        function a() {
            // alert('message');
            // window.location.href="index1.html";
            // window.location.href="<?php echo U('admin/Admin/official_list','','');?>";
            // $.post('<?php echo U('admin/Admin/official_list');?>', {data : 'hehe'}, function(data) {
            //     $('h1').text(data);
            // });
            // $.get('<?php echo U('admin/Admin/official_list');?>', function(data) {
            //     $('h1').text(data);
            // });
            
            $.get('/text/read/consultant/1.json', function(data) {
                $('h1').text(data);
            });
        }
    </script>
</html>