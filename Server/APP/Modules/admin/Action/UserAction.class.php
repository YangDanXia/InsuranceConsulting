<?php
/**
 * @Author: anchen
 * @Date:   2017-11-21 17:32:22
 * @Last Modified by:   anchen
 * @Last Modified time: 2018-01-25 13:55:51
 */
header("Access-Control-Allow-Origin: * ");
class UserAction extends Action {

    /**
     * 增加问题
     * @return [type] [description]
     */
    public function user_ask() {
        if (!IS_POST) {
            //非POST访问
            $this->error('页面不存在!');
        }else {
            if(hasKey()){
                //接收问题信息
                $data['userId'] = I('userId');
                $data['questionType'] = I('questionType');
                $data['questionTitle'] = I('questionTitle');
                $data['questionDetail'] = I('questionDetail');
                $data['questionPhoto'] = I('questionPhoto');
                $data['questionCost'] = I('questionCost');
                //实例化问题申请表
                $question = M('application_question');
                //添加问题
                $result = $question->data($data)->add();
                //返回数据设置
                $result = array('questionId'=>$result);
                //若添加成功
                if ($result) response('200','提问成功！',$result);  
                //添加失败  
                else response('404','提问失败！');
            }
            //无密钥
            else response('404','请获取访问权限！');
        }
    }



    /**
     * 小程序登陆时记录用户
     * @return [type] [description]
     */
    public function user_add(){
        if (IS_POST) {
            if (hasKey()) {
                //获取用户信息
                $data['userWechatId'] = I('userWechatId');
                $data['userNickName'] = I('userNickName');
                $data['userPicture'] = I('userPicture');
                //实例化用户信息表
                $user = M('information_user');
                //判断用户是否存在
                $result1 = $user->field('userId,adminType')->where(array('userWechatId'=>$data['userWechatId']))->find();
                if (!$result1) {
                    //添加用户
                    $result = $user->data($data)->add();
                    //返回数据设置
                    $result = array('userId'=>$result,'adminType'=>0);
                    //若添加成功
                    if ($result) response('200','用户添加成功！',$result);
                    //添加用户失败
                    else response('404', '用户添加失败！');
                }
                else response('200','用户已存在，登陆成功！',$result1);   
            }
            //无密钥
            else response('404','请获取访问权限！');
        }
        //非POST访问
        else $this->error('页面不存在!');
    }


    /**
     * 保险顾问申请
     * @return [type] [description]
     */
    public function consultant_add(){
        if (IS_POST) {
            if (hasKey()) {
                //获取用户信息
                $data['userId'] = I('userId');
                $data['consultantName'] = I('consultantName');
                $data['consultantPhoto'] = I('consultantPhoto');
                $data['consultantPhone'] = I('consultantPhone');
                $data['consultantProof'] = I('consultantProof');
                $data['consultantExp'] = I('consultantExp');
                //实例化保险顾问表
                $consultant = M('application_consultant');
                //保险顾问申请
                $result = $consultant->data($data)->add();
                //返回数据设置
                $result = array('userId'=>$result);
                //若添加成功
                if ($result) {
                    // print_r($this->Proof);
                    response('200','保险顾问申请成功，正在等到审核！',$this->Proof);
                }
                //添加用户失败
                else response('404', '保险顾问申请失败！');
            }
            //无密钥
            else response('404','请获取访问权限！');
        }
        //非POST访问
        else $this->error('页面不存在!');
    }


    /**
     * 评价问题回复
     * @return [type] [description]
     */
    public function evaluate() {
        if (IS_POST) {
            if (hasKey()) {
                //接收评价信息
                $data['questionId'] = I('questionId');
                $data['questionSatis'] = I('questionSatis');
                $data['isResolve'] = I('isResolve');
                //实例化问题情况表
                $evaluate = M('question_state');
                //评价问题情况
                $result = $evaluate->data($data)->add();
                if ($result) response('200','评价成功！');
                else response('404','评价失败！');
            }
            else response('404','请获取访问权限！');
        }
        else $this->error('页面不存在！');
    }


    /**
     * 验证码发送
     * @return [type] [description]
     */
    public function code() {
        //SDK
        require_once('Public/lib/SmsSendConn.php');
        //南方短信节点url地址
        $url = 'http://api01.monyun.cn:7901/sms/v2/std/';
        $smsSendConn = new SmsSendConn($url);
        //设置账号
        $data['userid']='E100C4';
        //设置密码
        $data['pwd']='aI9Z4V';
        //接收电话号码
        $data['mobile']=$_POST['mobile'];
        //设置发送短信内容
        $con=$_POST['content'];
        $data['content']='验证码：'.$con.'，打死都不要告诉别人哦！';
        //发送验证码
        $result = $smsSendConn->singleSend($data);
        //若发送成功
        if ($result['result'] === 0) response('200', '验证码发送成功！');
        //发送失败
        else response('200','验证码发送失败！');
    }

    /**
     * 号码验证
     * @return [type] [description]
     */
    public function Phone() {
        //POST请求方式
        if (IS_POST) {
            //有访问密钥
            if (hasKey()) {
                //接收用户Id，验证号码
                $userId = $_POST['userId'];
                $userPhone = $_POST['userPhone'];
                //实例化用户信息表
                $user = M('information_user');
                //修改用户号码
                $result = $user->where(array('userId'=>$userId))->setfield(array('userPhone'=>$userPhone));
                //若修改成功
                if ($result) response('200','号码添加成功！', 1);
                //修改失败
                else response('404','号码添加失败！', 0);
            }
            //无密钥
            else response('404','请获取访问权限！');
        }
        //非POST访问
        else $this->error('页面不存在！');
    }

    /**
     * 上传图片
     * @return [type] [description]
     */
    Public function upload () {
        if (IS_POST) {
            // if (hasKey()) {
                //加载上传文件类
                import('ORG.Net.UploadFile');
                // 实例化上传类
                $upload = new UploadFile();
                // 设置附件上传大小
                $upload->maxSize  = 3145728 ;
                // 设置附件上传类型
                $upload->allowExts  = array('jpg', 'gif', 'png', 'jpeg');
                // 设置附件上传目录
                $upload->savePath =  './Public/Image/';
                //上传错误提示错误信息
                if(!$upload->upload()) {
                    $this->error($upload->getErrorMsg());
                //上传成功 获取上传文件信息
                }else{
                    //获取上传后的图片信息
                    $info =  $upload->getUploadFileInfo();
                    //返回图片名称
                    echo $info[0]['savename'];
                }
            // }
            // else response('404','请获取访问权限！');
        }
        else $this->error('页面不存在！');
    }

    public function topic_now() {
        if (IS_POST) {
            if (hasKey()) {
                //实例化话题评论视图
                // $topicComment = D('tc');
                $topic = M('topic');
                //查询当前话题Id
                $topicId = $topic->max('topicId');
                //话题内容
                $topic_list = $topic->where(array('topicId'=>$topicId))->find();

                $comment = D('uc');
                $comment_list = $comment->where(array('topicId'=>$topicId))->select();

                if ($topic_list) {
                    $total_list[] = $topic_list;
                    $total_list[] = $comment_list;
                    echo json_encode($total_list,JSON_UNESCAPED_UNICODE);
                }
                //查询失败
                else echo "查询失败！";
            }
            else echo "请获取访问权限！";
        }
        else $this->error('页面不存在！');
    }

    public function topic_select() {
        if (IS_POST) {
            if (hasKey()) {
                //实例化话题评论视图
                // $topicComment = D('tc');
                $topic = M('topic');
                //查询当前话题Id
                $topicId = array('topicId'=>I('topicId'));
                //话题内容
                $topic_list = $topic->where($topicId)->find();

                $comment = D('uc');
                $comment_list = $comment->where($topicId)->select();

                if ($topic_list) {
                    $total_list[] = $topic_list;
                    $total_list[] = $comment_list;
                    echo json_encode($total_list,JSON_UNESCAPED_UNICODE);
                }
                //查询失败
                else echo "查询失败！";
            }
            else echo "请获取访问权限！";
        }
        else $this->error('页面不存在！');
    }

    public function topic_select1() {
        if (IS_POST) {
            if (hasKey()) {
                //实例化话题评论视图
                // $topicComment = D('tc');
                $topic = M('topic');
                //查询当前话题Id
                $topicId = array('topicId'=>I('topicId'));
                //话题内容
                $topic_list = $topic->where($topicId)->find();

                $comment = D('uc');
                $comment_list = $comment->where($topicId)->select();

                if ($topic_list) {
                    // $total_list[] = $topic_list;
                    // $total_list[] = $comment_list;
                    echo response('200', $topic_list, $comment_list);
                }
                //查询失败
                else echo "查询失败！";
            }
            else echo "请获取访问权限！";
        }
        else $this->error('页面不存在！');
    }

    /**
     * 话题列表
     * @return [type] [description]
     */
    public function topic_list() {
        //POST请求方式
        if (IS_POST) {
            //有访问密钥
            if (hasKey()) {
                //实例化话题表
                $topic = M('topic');
                //查询
                $topic_list = $topic->field('gmt_create',true)->order('topicId desc')->select();
                //查询成功
                if ($topic_list) echo json_encode($topic_list,JSON_UNESCAPED_UNICODE);
                //查询失败
                else echo "查询失败！";
            }
            //无访问权限
            else echo "请获取访问权限！";
        }
        //非POST访问
        else $this->error('页面不存在！');
    }

    /**
     * 发布话题
     * @return [type] [description]
     */
    public function topic_add() {
        if (!IS_POST) {
            //非POST访问
            $this->error('页面不存在!');
        }else {
            if(hasKey()){
                //接收话题内容
                $data['topicTitle'] = I('topicTitle');
                $data['topicContent'] = I('topicContent');
                $data['topicPicture'] = I('topicPicture');
                //实例化话题表
                $topic = M('topic');
                //添加话题
                $result = $topic->data($data)->add();
                //若添加成功
                if ($result) response('200','话题发布成功！');  
                //添加失败  
                else response('404','话题发布失败！');
            }
            //无密钥
            else response('404','请获取访问权限！');
        }
    }

    /**
     * 发表评论
     * @return [type] [description]
     */
    public function comment_add() {
        if (!IS_POST) {
            //非POST访问
            $this->error('页面不存在!');
        }else {
            if(hasKey()){
                //接收评论内容
                $data['commentContent'] = I('commentContent');
                $data['userId'] = I('userId');
                $data['topicId'] = I('topicId');

                //实例化评论表
                $comment = M('comment');
                //发表评论
                $result = $comment->data($data)->add();
                //若发表成功
                if ($result) echo "评论发表成功！";
                //发表失败  
                else echo "评论发表失败！";
            }
            //无密钥
            else response('404','请获取访问权限！');
        }
    }


    /**
     * 未读消息条数
     * @return [type] [description]
     */
    public function new_num() {
        if (!IS_POST) {
            //非POST访问
            $this->error('页面不存在!');
        }else {
            if(hasKey()){
                $question = M('information_question');

                $count = $question->where(array('userId'=>I('userId'), 'isNew'=>1))->count();
                $count = array('count'=>$count);
                // $result = $question->where(array('userId'=>I('userId'), 'isNew'=>1))->select();
                // $result = array_merge($count, $result);

                // print_r($result);
                echo json_encode($count,JSON_UNESCAPED_UNICODE);
            }
            //无密钥
            else echo "请获取访问权限！";
        }
    }

    /**
     * 未读消息列表
     * @return [type] [description]
     */
    public function new_list() {
        if (!IS_POST) {
            //非POST访问
            $this->error('页面不存在!');
        }else {
            if(hasKey()){
                $question = M('information_question');

                $result = $question->field('questionId,questionTitle,questionType,questionTime')->where(array('userId'=>I('userId'), 'isNew'=>1))->select();

                echo json_encode($result,JSON_UNESCAPED_UNICODE);
            }
            //无密钥
            else echo "请获取访问权限！";
        }
    }

    /**
     * 设置已读消息
     * @return [type] [description]
     */
    public function new_read() {
        if (!IS_POST) {
            //非POST访问
            $this->error('页面不存在!');
        }else {
            if(hasKey()){
                $questionId = array('questionId'=>I('questionId'));
                $new = D('showAnser');
                $result = $new->where($questionId)->find();
                $question = M('information_question');
                $question->where($questionId)->setfield(array('isNew'=>0));
                if ($result) echo json_encode($result,JSON_UNESCAPED_UNICODE);
                else echo('读取消息失败！');
            }
            //无密钥
            else echo "请获取访问权限！";
        }
    }

    public function userList() {
        $servername = "localhost";
        $username = "root";
        $password = "9611";
        $dbname = "BankInfo";
         
        // 创建连接
        $conn = new mysqli($servername, $username, $password, $dbname);
        $conn->query("SET NAMES utf8");
        // 检测连接
        if ($conn->connect_error) {
            die("连接失败: " . $conn->connect_error);
        } 

        $sql = "SELECT * FROM member";
        $result=mysqli_query($conn,$sql); 
        $list = mysqli_fetch_all($result,MYSQLI_ASSOC); 
        $list = json_encode($list, JSON_UNESCAPED_UNICODE);
        print_r($list);
        $conn->close();
    }
                
}