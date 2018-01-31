<?php
/**
 * @Author: anchen
 * @Date:   2017-11-20 13:30:10
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-12-21 23:35:28
 */
header("Access-Control-Allow-Origin: * ");
session_start();
class LoginAction extends Action {
    /**
     * 管理员登录
     * @return [type] [description]
     */
    
    //定义返回状态,返回信息
    private $response = '';

    public function index() {
        if(!$_POST) {
            $response = array(
                'code'=>'404',
                'msg' => '请登录!',
                'data' => '',
            );
            //进行编码(设置中文不编码)
            echo json_encode($response,JSON_UNESCAPED_UNICODE);
        }else {
            //接收账户密码
            $login['adminAccount']=$_POST['name'];
            $login['adminPassword']=md5($_POST['pwd']);
            
            //实例化管理员表
            $user = M('information_admin');
            $match=$user->where($login)->find();

            //账号密码匹配成功
            if ($match) {
                //判断是否为默认密码
                if ($login['adminPassword']==md5('0000')) 
                    $_SESSION['default']=1;
                else $_SESSION['default']=0;

                //判断管理员类型,实现权限管理(不过本应该用RBAC来实现)
                switch ($match['adminType']) {
                    case '1':
                        //超级管理员登录
                        $_SESSION['isLogin']=1;
                        $response = array(
                            'code'=>'200',
                            'msg' => '登录成功!',
                            'data' => array('adminType'=>$match['adminType'],'isDefaultPwd'=>$match['isDefaultPwd']),
                        );
                        //进行编码(设置中文不编码)
                        echo json_encode($response,JSON_UNESCAPED_UNICODE);
                        break;
                    
                    default:
                        //官方顾问登录
                        $_SESSION['isLogin']=1;
                        $response = array(
                            'code'=>'200',
                            'msg' => '登录成功!',
                            'data' => array('adminType'=>$match['adminType']),
                        );
                        //进行编码(设置中文不编码)
                        echo json_encode($response,JSON_UNESCAPED_UNICODE);
                        break;
                }
            }else {
                $response = array(
                    'code'=>'404',
                    'msg' => '账号或密码错误!',
                    'data' => '',
                );
                //进行编码(设置中文不编码)
                echo json_encode($response,JSON_UNESCAPED_UNICODE);
            }
        }
    }
}