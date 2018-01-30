<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
</head>
<body>
    <h3>官方顾问列表(总条数:<?php echo ($admin_count); ?>)</h3>
        <?php if(is_array($admin_list)): foreach($admin_list as $key=>$v): ?><tr>
                <td><?php echo ($v["adminAccount"]); ?></td>
                <td><?php echo ($v["adminType"]); ?></td><hr />
            </tr><?php endforeach; endif; ?>
        <p><?php echo ($admin_page); ?></p>
</body>
</html>