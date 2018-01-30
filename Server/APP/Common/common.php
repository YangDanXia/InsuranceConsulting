<?php
/**
 * @Author: anchen
 * @Date:   2017-11-23 20:42:17
 * @Last Modified by:   anchen
 * @Last Modified time: 2018-01-24 11:12:06
 */
/**
 * 输出数组函数
 * @param  [type] $array [description]
 * @return [type]        [description]
 */
function p($array) {
    dump($array, 1, '<br>', 0);
}

/**
 * 判断是否有访问权限
 * @return boolean [description]
 */
function hasKey() {
    if(isset($_POST['key']) and $_POST['key']=='haiqian' ) {
        return true;
    }else return false;
}

/**
 * 输出函数
 * @param  [type] $code [description]
 * @param  [type] $msg  [description]
 * @param  string $data [description]
 * @return [type]       [description]
 */
function response($code, $msg, $data=''){
    $response = array(
        'code'=>$code,
        'msg' => $msg,
        'data' => $data,
    );
    //进行编码(设置中文不编码)
    echo json_encode($response,JSON_UNESCAPED_UNICODE);
}
/**
 * 随机生成数字函数[rand_number description]
 * @param  [type] $min [description]
 * @param  [type] $max [description]
 * @return [type]      [description]
 */
function rand_number ($min,$max) {
    return sprintf("%0".strlen($max)."d", mt_rand($min,$max));
}

