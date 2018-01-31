<?php
/**
 * @Author: anchen
 * @Date:   2017-11-21 10:40:41
 * @Last Modified by:   anchen
 * @Last Modified time: 2018-01-30 16:02:31
 */
header("Access-Control-Allow-Origin: * ");
session_start();                 //开启缓存
import('ORG.Util.Page');         // 导入分页类

class AdminAction extends Action { 
    /**
     * 查看官方顾问列表
     * @var [type]
     */
    public function official_list () {   
        //判断是否登录
        if (hasKey()) { 
            //实例化管理员信息表
            $admin = M('information_admin');
            //无条件查找
            if (empty($_POST['adminAccount']) || trim($_POST['adminAccount'])=='') {
                $admin_list = $admin->field('adminPassword,isDefaultPwd',true)->select();
                 response('200', '查询成功！', $admin_list);
            }else {
                $admin_list = $admin->field('adminPassword,isDefaultPwd',true)->where(array('adminAccount'=>$_POST['adminAccount']))->select();
                if ($admin_list) {
                    response('200', '查询成功！', $admin_list);
                }else response('404', '账号不存在！');
            }
            
        }     
        else response('404', '请获取访问权限！');
    }



    /**
     * 查看用户列表
     * @var [type]
     */
    public function user_list () {

        //判断是否登录
        if (hasKey()) { 
            //实例化用户信息表
            $user = M('information_user');
            //按用户编号查询
            if (isset($_POST['userId']) and trim($_POST['userId'])!='') {
                $user_list = $user->where(array('userId'=>$_POST['userId']))->select();
                if ($user_list) {
                    response('200', '查询成功！', $user_list);
                }else response('404', '用户不存在！');
            }
            //按用户昵称查询
            elseif (isset($_POST['userNickName']) and trim($_POST['userNickName'])!='') {
                $user_list = $user->where(array('userNickName'=>$_POST['userNickName']))->select();
                if ($user_list) {
                    response('200', '查询成功！', $user_list);
                }else response('404', '用户不存在！');
            }
            //查询全部用户列表
            else {
                $user_list = $user->select();
                response('200', '查询成功！', $user_list);
            }
        }
        //无访问权限     
        else response('404', '请获取访问权限！');
    }


    /**
     * 查看问题列表
     * @var [type]
     */
    public function que_list() {
        //判断是否登录
        if (hasKey()) { 
            //实例化问题信息表
            $question = D('Detail');   
            //查询questionId的详情
            if (isset($_POST['questionId']) and trim($_POST['questionId'])!='') {
                //查询
                $que_list = $question->where(array('questionId'=>$_POST['questionId']))->select();
                //存在数据
                if ($que_list) response('200', '查询成功！', $que_list);
                //没有该问题的相关信息
                else response('404', '问题不存在！');
            }
            //查询历史提问
            elseif (isset($_POST['userId']) and trim($_POST['userId'])!='') {
                // //实例化问题信息表
                $information = D('Detail');
                //实例化问题申请表
                $application = M('application_question');
                //问题信息表查询
                $info_list = $information->where(array('userId'=>$_POST['userId']))->select();
                //问题申请查看
                $app_list = $application->where(array('userId'=>$_POST['userId']))->select();
                //若信息表存在该用户提问
                if ($info_list) {
                    //若申请表存在该用户提问
                    if ($app_list) {
                        //合并信息表和申请表的数据
                        $que_list = array_merge($info_list,$app_list);
                        response('200', '查询成功！', $que_list);
                    }
                    //只输出信息表
                    else response('200', '查询成功！', $info_list);
                }
                //若申请表存在该用户提问
                elseif ($app_list) response('200', '查询成功！', $app_list);
                //无历史提问
                else response('404', '无历史提问！');
            }
            //查询历史回复
            elseif (isset($_POST['consultantId']) and trim($_POST['consultantId'])!='') {
                //实例化问题信息表
                $information = D('Detail');
                //问题回复表查询
                $que_list = $information->where(array('consultantId'=>$_POST['consultantId']))->select();
                //问题信息表或者问题申请表存在该用户提问
                if ($que_list) response('200', '查询成功！', $que_list);
                //无历史提问
                else response('404', '无历史回复！');
            }
            //关键字查询
            elseif (isset($_POST['keyWord']) and trim($_POST['keyWord'])!='') {
                //接收关键字
                $keyWord = array("like","%".trim(I('keyWord'))."%");
                //关键字查询
                $que_list = $question->where(array('questionDetail'=>$keyWord))->select();
                //查询成功
                if ($que_list) response('200', '查询成功！', $que_list);
                //无此关键字信息
                else response('404', '无相关信息！');
            }
            //不传问题ID时查询全部列表
            else {
                $que_list = $question->select();
                response('200', '查询成功！', $que_list);
            }
        }     
        else response('404', '请获取访问权限！');
    }


    /**
     * 查看问题申请表
     * @var [type]
     */
    public function question_application_list() {
        //判断是否登录
        if (hasKey()) { 
            $question = D('queApp');   
            //无条件查找
            if (empty($_POST['questionId']) || trim($_POST['questionId'])=='') {
                $que_list = $question->select();
                 response('200', '查询成功！', $que_list);
            }else {
                $que_list = $question->where(array('questionId'=>$_POST['questionId']))->select();
                if ($que_list) {
                    response('200', '查询成功！', $que_list);
                }else response('404', '问题不存在！');
            }
        }     
        else response('404', '请获取访问权限！');
    }



    /**
     * 查看精品问题列表
     * @var [type]
     */
    public function boutique_list () {
        //判断是否登录
        if (hasKey()) { 

            $boutique = new Model();
            if (empty($_POST['questionId']) || trim($_POST['questionId'])=='') {
                $boutique_list = $boutique->query('select information_question.questionId, information_question.questionDetail,information_question.questionPhoto,information_question.questionTime,information_question.questionTitle, information_question.questionType, questionReply from information_question left join question_reply on information_question.questionId=question_reply.questionId where information_question.isClassic=1');
                 response('200', '查询成功！', $boutique_list);
            }else {
                $boutique_list = $boutique->query('select information_question.questionId, information_question.questionDetail,information_question.questionPhoto,information_question.questionTime,information_question.questionTitle, information_question.questionType, questionReply from information_question left join question_reply on information_question.questionId=question_reply.questionId where information_question.isClassic=1 and information_question.questionId='.$_POST['questionId']);
                if ($boutique_list) {
                    response('200', '查询成功！', $boutique_list);
                }
                else response('404', '问题不存在！');
            }
            // $boutique = D('boutique');
            // $list = $boutique->select();
            // print_r($list);
        }     
        else response('404', '请获取访问权限！');
    }

    /**
     * 查看保险顾问申请表
     * @var [type]
     */
    public function application_consultant_list() {
        //判断是否登录
        if (hasKey()) { 

            $consultant=M('application_consultant');

            if (empty($_POST['userId']) || trim($_POST['userId'])=='') {
                $consultant_list = $consultant->select();
                 response('200', '查询成功！', $consultant_list);
            }else {
                $consultant_list = $consultant->where(array('userId'=>$_POST['userId']))->select();
                if ($consultant_list) {
                    response('200', '查询成功！', $consultant_list);
                }else response('404', '用户不存在！');
            }
        }     
        else response('404', '请获取访问权限！');  
    }

    /**
     * 查看保险顾问信息表
     * @var [type]
     */
    public function consultant_list() {
        //判断是否登录
        if (hasKey()) { 

            $consultant=M('information_consultant');

            if (empty($_POST['userId']) || trim($_POST['userId'])=='') {
                $consultant_list = $consultant->select();
                 response('200', '查询成功！', $consultant_list);
            }else {
                $consultant_list = $consultant->where(array('userId'=>$_POST['userId']))->select();
                if ($consultant_list) {
                    response('200', '查询成功！', $consultant_list);
                }else response('404', '用户不存在！');
            }
        }     
        else response('404', '请获取访问权限！');  
    }

    // /**
    //  * 修改密码操作
    //  * @return [type] [description]
    //  */
    // public function changepwd () {
    //     //判断是否登录
    //     if (hasKey()) { 
    //         //判断请求方式是否为post
    //         if(IS_POST) {
    //             //获取账号密码的post变量
    //             $login['adminAccount'] = $_POST['name'];
    //             $login['adminPassword'] = md5($_POST['pwd']);
    //             $change=md5($_POST['newpwd']);
    //             //实例化管理员信息表
    //             $admin = M('information_admin');
    //             $match=$admin->where($login)->select();
    //             //账户密码登录,如果账户密码正确
    //             if ($match) {
    //                 //修改原密码
    //                 if ($admin->where($login)->setfield(array('adminPassword'=>$change, 'isDefaultPwd'=>0))) response('200','密码修改成功！');
    //                 //密码修改发生异常
    //                 else response('404','修改密码失败，请重试！');
    //             }
    //             //账户密码不正确
    //             else response('404','账号或密码错误！');
    //         }
    //         //非POST请求
    //         else $this->error('页面不存在!');
    //     }
    //     //用户没有登录     
    //     else {
    //         $response = array(
    //             'code'=>'404',
    //             'msg' => '请获取访问权限!',
    //             'data' => '',
    //         );
    //         //进行编码(设置中文不编码)
    //         echo json_encode($response,JSON_UNESCAPED_UNICODE);
    //     }
    // }
    

    /**
     * 修改密码操作
     * @return [type] [description]
     */
    public function changepwd () {
        //判断是否登录
        if (hasKey()) { 
            //判断请求方式是否为post
            if(IS_POST) {
                //获取账号密码的post变量
                $login['adminAccount'] = $_POST['name'];
                $login['adminPassword'] = md5($_POST['pwd']);
                $change=md5($_POST['newpwd']);
                //实例化管理员信息表
                $admin = M('information_admin');
                $match=$admin->where($login)->select();
                //账户密码登录,如果账户密码正确
                if ($match) {
                    //修改原密码
                    $sql="alter user '$id' @'localhost' identified by '$pwd';";
                    $change=$m->execute($sql);
                    if($change==0)
                    {
                         $updated=$admin->where($id)->setField('pwd',$pwd);
                         if($update>0)
                            response('200','修改密码成功！');
                        else response('404','修改密码失败，请重试！');
                    }
                }
                //账户密码不正确
                else response('404','账号或密码错误！');
            }
            //非POST请求
            else $this->error('页面不存在!');
        }
        //用户没有登录     
        else {
            $response = array(
                'code'=>'404',
                'msg' => '请获取访问权限!',
                'data' => '',
            );
            //进行编码(设置中文不编码)
            echo json_encode($response,JSON_UNESCAPED_UNICODE);
        }
    }

    // /**
    //  * 添加官方顾问
    //  * @return [type] [description]
    //  */
    // public function official_add() {
    //     //判断是否登录
    //     if (hasKey()) { 
    //         //实例化管理员信息表
    //         $official = M('information_admin');
    //         //新增官方顾问的账户为自增字段,密码默认0000
    //         $data = array(
    //             'adminNickName' => $_POST['adminNickName'],
    //             'adminPhone' => $_POST['adminPhone'],
    //         );
    //         $dat['name'] = $official->data($data)->add();
    //         $dat['pwd'] = '0000';
    //         //账户新增成功,返回账户密码
    //         if ($dat['name']) response('200','成功添加官方顾问！',$dat);
    //         //账户增加异常
    //         else response('404','顾问添加失败！');    
    //     }     
    //     else response('404','请获取访问权限！');
    // }
    

    /**
     *添加官方顾问 [official_add description]
     * @return [type] [description]
     */
    public function  official_add(){
        //判断是否登录
        if (hasKey()) {
            if(IS_POST){
            $Admin = $_POST['adminNickName'];
            $AdminMoblie=$_POST['adminPhone'];
            $adminId= rand_number(1000,1100);
            $pwd= rand_number(100000,1000000);
            //实例化空模型
            $createAdmin=M();
            $sql="grant select,update on information_question,question_reply to '$adminId' @'localhost' identified by '$pwd'";
            $create=$createAdmin->execute($sql);
                //实例化管理员信息表
                $success=M('information_admin');
                $adminadd=array(
                    'adminAccount'=>$adminId,
                    'adminPassword'=>$pwd,
                    'adminNickName'=>$Admin,
                    'adminPhone'  =>$AdminMoblie,
                    'isDefaultPwd' =>1,
                    'adminType'    =>0,
                    'gtm_create'   =>date(),
                    'gtm_modified' =>date()
                    );
                
                $ok=$success->add($adminadd);
                if($ok>0)
                {
                    //实例化空模型
                    $createAdmin=M();
                    //进行数据库角色授权
                    $sql="grant select,update on information_question,question_reply to '$adminId' @'localhost' identified by '$pwd'";
                    $create=$createAdmin->execute($sql);
                    if($create==0){
                        //账户新增成功,返回账户密码
                      $type=array('code'=>'200',
                                'msg' => '添加成功',
                                'data'=> array('adminAccount'=>$adminId,'adminPassword'=>$pwd));
                      //进行编码(设置中文不编码)
                     echo json_encode($type,JSON_UNESCAPED_UNICODE);
                 }
                 else{
                  $response = array(
                            'code'=>'404',
                            'msg' => '官方顾问授权失败!',
                            'data' => '',
                        );
                        //进行编码(设置中文不编码)
                        echo json_encode($response,JSON_UNESCAPED_UNICODE);
                    }
                }
                else{
                    $response = array(
                            'code'=>'404',
                            'msg' => '添加失败!',
                            'data' => '',
                        );
                        //进行编码(设置中文不编码)
                        echo json_encode($response,JSON_UNESCAPED_UNICODE);
                }

        
            }
            }

     }  

    /**
     * 删除官方顾问
     * @return [type] [description]
     */
     public function revoke_admin(){
        //判断是否登录
    if (hasKey()) {
        if(IS_POST)
        {
            //实例化空模型
            $revoke = M();
            //接收官方顾问编号
            $adminAccount = I('adminAccount');
            //数据库角色权限回收
            $sql="revoke select,update on information_question,question_reply from '$adminAccount' @'localhost'";
            $revoke_ok = $revoke->execute($sql);
            if($revoke_ok==0)
            {
                //实例化管理员信息表
                $m = M('information_admin');
                $arr = array('adminAccount'=>$adminAccount);
                $revoke_db=$m->where($arr)->delete();
                if($revoke_db>0)
                {
                 $response = array(
                            'code'=>'200',
                            'msg' => '删除官方顾问成功!',
                            'data' => '',
                        );
                        //进行编码(设置中文不编码)
                        echo json_encode($response,JSON_UNESCAPED_UNICODE);
                }
                else
                {
                    $response=array('code'=>'404',
                                'msg' => '删除官方顾问失败',
                                'data'=> '');
                     echo json_encode($response,JSON_UNESCAPED_UNICODE);

                }
                
            }
            else{
                $response=array('code'=>'404',
                                'msg' => '回收权限失败',
                                'data'=> '');
                     echo json_encode($response,JSON_UNESCAPED_UNICODE);
                     
            }
        }
    }
    }






    /**
     * 保险顾问:审核通过
     */
    public function consultant_pass() {  
        if(hasKey()) {
            if (IS_POST) {
                //接收保险顾问id
                $id = array('userId'=>I('userId'));  
                //读取申请表的信息
                $consultantDel = M('application_consultant');    
                $del = $consultantDel->where($id)->find(); 

                //判断userId是否存在
                if($del) {
                     //通过则增加到顾问信息表
                    $consultant = M('information_consultant'); 
                    //开启事务
                    $consultantDel->startTrans(); 
                    //添加到保险顾问信息表     
                    $a = $consultant->data($del)->add();  
                    //添加成功
                    if ($a) {
                        //从申请表删除
                        $b = $consultantDel->where($id)->delete();
                        //删除成功
                        if ($b) {
                            $user = M('information_user');
                            $result = $user->where($id)->setfield(array('adminType'=>1));
                            if ($result) {
                                //事务提交
                                $consultantDel->commit();
                                response('200','审核成功！');
                            }
                            else {
                                //事务回滚
                                $consultantDel->rollback();
                                response('404','审核失败！(adminType修改失败)');
                            }
                         }
                         //删除失败
                         else {
                            //事务回滚
                            $consultantDel->rollback();
                            response('404','审核失败！(删除失败)');
                        }          
                    }
                    //添加失败
                    else response('404','审核失败！(添加失败)');
                }
                //userId保险顾问Id不存在
                else response('404','此保险顾问不存在！');         
            }
            //!POST访问
            else $this->error('页面不存在!');
        }
        else response('404','请获取访问权限！');                           
    }

    /**
     * (switch(isFailed)  {case:   0:未审核    1:审核不通过});
     * 审核不通过,设置IDPass为1;
     * @return [type] [description]
     */
    public function consultant_not_pass() {
        if (hasKey()) {
            if(IS_POST) {
                //接收保险顾问id
                $id = array('userId'=>I('userId'));
                $consultantResult = I('consultantResult'); 
                //读取申请表的信息
                $consultant = M('application_consultant'); 
                $result = $consultant->where($id)->find();  
                //若Id是否存在
                if ($result) {
                    //若已经审核过
                    if ($result['isFailed']==1) {
                        $response = array(
                            'code'=>'404',
                            'msg' => '此申请已审核过!',
                            'data' => '',
                        );
                        //进行编码(设置中文不编码)
                        echo json_encode($response,JSON_UNESCAPED_UNICODE);
                    }
                    //该Id未审核过
                    else {
                        $data = array('isFailed'=>1,'consultantResult'=>$consultantResult);
                        $notPass = $consultant->where($id)->setfield($data);  
                        //审核不通过设置成功
                        if ($notPass) {
                            $response = array(
                                'code'=>'200',
                                'msg' => '顾问申请审核不通过!',
                                'data' => '',
                            );
                            //进行编码(设置中文不编码)
                            echo json_encode($response,JSON_UNESCAPED_UNICODE);
                        }
                        //审核不通过设置失败
                        else {
                            $response = array(
                                'code'=>'404',
                                'msg' => '审核失败!',
                                'data' => '',
                            );
                            //进行编码(设置中文不编码)
                            echo json_encode($response,JSON_UNESCAPED_UNICODE);
                        }
                    }
                }
                //顾问Id不存在
                else {
                    $response = array(
                        'code'=>'404',
                        'msg' => '此保险顾问不存在!',
                        'data' => '',
                    );
                    //进行编码(设置中文不编码)
                    echo json_encode($response,JSON_UNESCAPED_UNICODE);
                }
                    
            }
        }
        //用户未登录
        else {
            $response = array(
                'code'=>'404',
                'msg' => '请获取访问权限!',
                'data' => '',
            );
            //进行编码(设置中文不编码)
            echo json_encode($response,JSON_UNESCAPED_UNICODE);
        }            
    }

    /**
     * 问题:审核通过
     */
    public function question_pass() {
        //若用户已经登录
        if(hasKey()) {
            if (IS_POST) {
                //接收问题id
                $id = array('questionId'=>I('questionId'));  
                //读取申请表的信息
                $questionDel = M('application_question');    
                $del = $questionDel->field('questionId',true)->where($id)->find(); 

                //判断问题Id是否存在
                if($del) {
                     //通过则增加到问题信息表
                    $question = M('information_question'); 
                    //开启事务
                    $questionDel->startTrans(); 
                    //添加到问题信息表     
                    $a = $question->data($del)->add();  
                    //添加成功
                    if ($a) {
                        //从申请表删除
                        $b = $questionDel->where($id)->delete();
                        //删除成功
                        if ($b) {
                            //事务提交
                            $questionDel->commit();
                            $response = array(
                                'code'=>'200',
                                'msg' => '审核成功!',
                                'data' => '',
                            );
                            //进行编码(设置中文不编码)
                            echo json_encode($response,JSON_UNESCAPED_UNICODE);
                         }
                         //删除失败
                         else {
                            //事务回滚
                            $questionDel->rollback();
                            $response = array(
                                'code'=>'404',
                                'msg' => '审核失败!(删除失败)',
                                'data' => '',
                            );
                            //进行编码(设置中文不编码)
                            echo json_encode($response,JSON_UNESCAPED_UNICODE);
                        }          
                    }
                    //添加失败
                    else {
                        $response = array(
                            'code'=>'404',
                            'msg' => '审核失败!(添加失败)',
                            'data' => '',
                        );
                        //进行编码(设置中文不编码)
                        echo json_encode($response,JSON_UNESCAPED_UNICODE);
                    }
                }
                //问题Id不存在
                else {
                    $response = array(
                        'code'=>'404',
                        'msg' => '此问题不存在!',
                        'data' => '',
                    );
                    //进行编码(设置中文不编码)
                    echo json_encode($response,JSON_UNESCAPED_UNICODE);
                }         
            }
            //!POST访问
            else $this->error('页面不存在!');
        }
        //用户未登录
        else {
            $response = array(
                'code'=>'404',
                'msg' => '请获取访问权限!',
                'data' => '',
            );
            //进行编码(设置中文不编码)
            echo json_encode($response,JSON_UNESCAPED_UNICODE);
        }                              
    }

    /**
     * 问题审核不通过,设置isPass为1;
     * @return [type] [description]
     */
    public function question_not_pass() {
        //若用户已经登录
        if (hasKey()) {
            if(IS_POST) {
                //接收保险顾问id
                $id = array('questionId'=>I('questionId'));
                $questionResult = I('questionResult');
                //读取申请表的信息
                $question = M('application_question'); 
                $result = $question->where($id)->find();  
                //若Id是否存在
                if ($result) {
                    //若已经审核过
                    if ($result['isFailed']==1) {
                        $response = array(
                            'code'=>'404',
                            'msg' => '此问题已审核过!',
                            'data' => '',
                        );
                        //进行编码(设置中文不编码)
                        echo json_encode($response,JSON_UNESCAPED_UNICODE);
                    }
                    //该Id未审核过
                    else {
                        $data = array('isFailed'=>1,'questionResult'=>$questionResult);
                        $notPass = $question->where($id)->setfield($data);  
                        //审核不通过设置成功
                        if ($notPass) {
                            $response = array(
                                'code'=>'200',
                                'msg' => '问题审核不通过!',
                                'data' => '',
                            );
                            //进行编码(设置中文不编码)
                            echo json_encode($response,JSON_UNESCAPED_UNICODE);
                        }
                        //审核不通过设置失败
                        else {
                            $response = array(
                                'code'=>'404',
                                'msg' => '审核失败!',
                                'data' => '',
                            );
                            //进行编码(设置中文不编码)
                            echo json_encode($response,JSON_UNESCAPED_UNICODE);
                        }
                    }
                }
                //顾问Id不存在
                else {
                    $response = array(
                        'code'=>'404',
                        'msg' => '此问题不存在!',
                        'data' => '',
                    );
                    //进行编码(设置中文不编码)
                    echo json_encode($response,JSON_UNESCAPED_UNICODE);
                }
            }
            //非POST请求
            else $this->error('页面不存在!');
        }
        //用户未登录
        else {
            $response = array(
                'code'=>'404',
                'msg' => '请获取访问权限!',
                'data' => '',
            );
            //进行编码(设置中文不编码)
            echo json_encode($response,JSON_UNESCAPED_UNICODE);
        }
    }

    /**
     * 设置精品问题
     * @return [type] [description]
     */
    public function boutique(){

        //若用户登录
        if (hasKey()) {
            //若POST请求
            if (IS_POST) {
                //接收问题Id
                $Id = array('questionId'=>I('questionId'));
                //实例化问题信息表
                $question = M('information_question');
                //接收问题Id查询
                $result3 = $question->field('isClassic')->where($Id)->find();
                //该问题若存在
                if (!$result3) response('404', '该问题不存在！');
                //该问题若已经是精品问题
                elseif ($result3['isClassic']==1) response('404','该问题已经是精品问题！');
                //设置精品
                else {
                    //实例化问题回复表
                    $reply = M('question_reply');
                    $result1 = $reply->where($Id)->find();
                    //若问题存在回复
                    if ($result1) {
                        //isClassic设置为1
                        $result = $question->where($Id)->setfield(array('isClassic'=>1));
                        //设置成功
                        if ($result) response('200','精品问题设置成功！');
                        //设置失败
                        else response('404','精品问题设置失败！');
                    }
                    //问题无回复
                    else response('404', '该问题尚未有回复内容,不能设置为精品问题!');
                }
            }
            //非POST请求
            else $this->error('页面不存在!');
        }
        //用户未登录
        else response('404','请获取访问权限！');
    }

}