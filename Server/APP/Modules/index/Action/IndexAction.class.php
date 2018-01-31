<?php
/**
 * @Author: anchen
 * @Date:   2017-12-10 10:45:48
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-12-12 02:45:07
 */
session_start();
class IndexAction extends Action {
    public function index () {
        $response = array(
            'code'=>'404',
            'msg' => '页面不存在!',
            'data' => '',
        );
        //进行编码(设置中文不编码)
        echo json_encode($response,JSON_UNESCAPED_UNICODE); 
    }
}