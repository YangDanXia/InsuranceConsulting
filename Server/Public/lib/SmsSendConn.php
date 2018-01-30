<?php

/**
 * Created by PhpStorm.
 * Date: 2017-9-5
 * Time: 8:45
 * @功能概要：发送管理类
 * @公司名称： ShenZhen Montnets Technology CO.,LTD.
 */
class SmsSendConn
{
    /**
     * API请求地址
     */
    private $BaseUrl;


    public $ERROR_310099=-310099;//http请求失败错误码

    public function  __construct($BaseUrl)
    {
        if (!empty($BaseUrl)) {
            $this->BaseUrl = $BaseUrl;
        } else {
            throw new Exception("API请求地址错误");
        }
    }

    /**
     * 密码加密
     * $userid：用户账号
     * $pwd：用户密码
     */
    public function encrypt_pwd($userid, $pwd)
    {
        try {
            $char = '00000000';//固定字符串
            $time = date('mdHis', time());//时间戳
            $pwd = md5($userid . $char . $pwd . $time);//拼接字符串进行加密
            return array('pwd' => $pwd, 'time' => $time);
        } catch (Exception $e) {
            print_r($e->getMessage());  //输出捕获的异常消息
        }
    }
    /**
     * 短信内容加密
     * $content：短信内容
     */
    public function encrypt_content($content)
    {
        try {
            return urlencode(iconv('UTF-8', 'GBK', $content));//短信内容转化为GBK格式再进行urlencode格式加密
        }catch (Exception $e) {
            print_r($e->getMessage());  //输出捕获的异常消息
        }
    }

    /**
     * 短连接请求方法
     * $url：请求地址
     * $post_data：请求数据
     */
    private function connection($url,$post_data)
    {
        try {
            $attributes = array('Accept:text/plain;charset=utf-8', 'Content-Type:application/json', 'charset=utf-8', 'Expect:', 'Connection: Close');//请求属性
            $ch = curl_init();//初始化一个会话
            /* 设置验证方式 */
            curl_setopt($ch, CURLOPT_HTTPHEADER, $attributes);//设置访问
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);//设置返回结果为流
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);//设置请求超时时间
            curl_setopt($ch, CURLOPT_TIMEOUT, 60);//设置响应超时时间
            /* 设置通信方式 */
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);//使用urlencode格式请求

            $result = curl_exec($ch);//获取返回结果集
            $result=preg_replace('/\"msgid":(\d{1,})./', '"msgid":"\\1",', $result);//正则表达式匹配所有msgid转化为字符串
            $result = json_decode($result, true);//将返回结果集json格式解析转化为数组格式
            if (curl_errno($ch) !== 0) //网络问题请求失败
            {
                $result['result'] = $this->ERROR_310099;
                curl_close($ch);//关闭请求会话
                return $result;
            } else {
                $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
                if ($statusCode != 200||!isset($result['result']))//域名问题请求失败或不存在返回结果
                {
                    $result='';//清空result集合
                    $result['result'] = $this->ERROR_310099;
                }
                curl_close($ch);//关闭请求会话
                return $result;
            }
        } catch (Exception $e) {
            print_r($e->getMessage());//输出捕获的异常消息
            $result['result'] = $this->ERROR_310099;//返回http请求错误代码
            return $result;
        }
    }

    /*
    * 单条发送
     * $data:请求数据集合
    */
    public function singleSend($data)
    {
        try {
            $data['userid'] = strtoupper($data['userid']);//用户名转化为大写
            $encrypt=$this->encrypt_pwd($data['userid'],$data['pwd']);//密码进行MD5加密
            $data['pwd']=$encrypt['pwd'];//获取MD5加密后的密码
            $data['timestamp']=$encrypt['time'];//获取加密时间戳
            $data['content'] = $this->encrypt_content($data['content']);//短信内容进行urlencode加密
            $post_data = json_encode($data);//将数组转化为JSON格式
            $result = $this->connection($this->BaseUrl.'single_send',$post_data);//根据请求类型进行请求
            return $result;//返回请求结果
        }catch (Exception $e) {
            print_r($e->getMessage());  //输出捕获的异常消息
        }
    }

    /*
   * 相同内容群发
    * $data:请求数据集合
   */
    public function batchSend($data)
    {
        try{
            $data['userid']=strtoupper($data['userid']);//用户名转化为大写
			$encrypt=$this->encrypt_pwd($data['userid'],$data['pwd']);//密码进行MD5加密
			$data['pwd']=$encrypt['pwd'];//获取MD5加密后的密码
			$data['timestamp']=$encrypt['time'];//获取加密时间戳
            $data['content']=$this->encrypt_content($data['content']);//短信内容进行urlencode加密
            $post_data=json_encode($data);//将数组转化为JSON格式
            $result = $this->connection($this->BaseUrl.'batch_send',$post_data);//根据请求类型进行请求
            return $result;
        }catch (Exception $e) {
            print_r($e->getMessage());  //输出捕获的异常消息
        }
    }

    /*
    * 个性化内容群发
     * $data:请求数据集合
    */
    public function multiSend($data)
    {
        try{
            $data['userid']=strtoupper($data['userid']);//用户名转化为大写
			$encrypt=$this->encrypt_pwd($data['userid'],$data['pwd']);//密码进行MD5加密
			$data['pwd']=$encrypt['pwd'];//获取MD5加密后的密码
			$data['timestamp']=$encrypt['time'];//获取加密时间戳
            foreach($data['multimt'] as $k=>$v)
            {
                $data['multimt'][$k]['content'] = $this->encrypt_content($v['content']);//每一条个性化的短信内容进行urlencode加密
            }
            $post_data=json_encode($data);//将数组转化为JSON格式
            $result=$this->connection($this->BaseUrl.'multi_send',$post_data);//根据请求类型进行请求
            return $result;
        }catch (Exception $e) {
            print_r($e->getMessage());  //输出捕获的异常消息
        }
    }

    /*
   * 查询余额
    * $data:请求数据集合
   */
    public function getBalance($data)
    {
        try{
            $data['userid']=strtoupper($data['userid']);//用户名转化为大写
			$encrypt=$this->encrypt_pwd($data['userid'],$data['pwd']);//密码进行MD5加密
			$data['pwd']=$encrypt['pwd'];//获取MD5加密后的密码
			$data['timestamp']=$encrypt['time'];//获取加密时间戳
            $post_data=json_encode($data);//将数组转化为JSON格式
            $result=$this->connection($this->BaseUrl.'get_balance',$post_data);//根据请求类型进行请求
            return $result;
        }catch (Exception $e) {
            print_r($e->getMessage());  //输出捕获的异常消息
        }
    }

    /*
     * 请求获取上行
     * $requestPath:请求地址
     * $data:请求数据集合
     * $isEncryptPwd:是否加密
    */
    public function getMo($data)
    {
        try{
            $data['userid']=strtoupper($data['userid']);//用户名转化为大写
			$encrypt=$this->encrypt_pwd($data['userid'],$data['pwd']);//密码进行MD5加密
			$data['pwd']=$encrypt['pwd'];//获取MD5加密后的密码
			$data['timestamp']=$encrypt['time'];//获取加密时间戳
            $post_data = json_encode($data);//将数组转化为JSON格式
            $result=$this->connection($this->BaseUrl.'get_mo',$post_data);//根据请求类型进行请求
            return $result;//返回请求结果
        }catch (Exception $e) {
            print_r($e->getMessage());  //输出捕获的异常消息
        }
    }

    /*
  * 请求获取状态报告
  * $requestPath:请求地址
  * $data:请求数据集合
  * $isEncryptPwd:是否加密
 */
    public function getRpt($data)
    {
        try{
            $data['userid']=strtoupper($data['userid']);//用户名转化为大写
			$encrypt=$this->encrypt_pwd($data['userid'],$data['pwd']);//密码进行MD5加密
			$data['pwd']=$encrypt['pwd'];//获取MD5加密后的密码
			$data['timestamp']=$encrypt['time'];//获取加密时间戳
            $post_data = json_encode($data);//将数组转化为JSON格式
            $result=$this->connection($this->BaseUrl.'get_rpt',$post_data);//根据请求类型进行请求
            return $result;
        }catch (Exception $e) {
            print_r($e->getMessage());  //输出捕获的异常消息
        }
    }
}
?>