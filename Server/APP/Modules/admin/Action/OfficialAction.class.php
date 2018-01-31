<?php
/**
 * @Author: anchen
 * @Date:   2017-11-23 21:28:41
 * @Last Modified by:   anchen
 * @Last Modified time: 2018-01-23 12:24:47
 */
header("Access-Control-Allow-Origin: * ");
session_start();                 //开启缓存
import('ORG.Util.Page');         // 导入分页类
class OfficialAction extends Action {
    /**
     * 查看非付费问题列表
     * @var [type]
     */
    public function que_list_free() {
        //判断是否登录
        if (hasKey()) { 
            $question = D('Detail');  
            $where = array('questionType'=>'0'); 
            $que_list = $question->where(array('questionCost'=>'0'))->select();

            response('200','查询成功！',$que_list);
        }     
        else response('404','请获取访问权限！');
    }

    /**
     * 查看付费问题列表
     * @var [type]
     */
    public function que_list_charge() {
        //判断是否登录
        if (hasKey()) { 
            $question = D('Detail');   
            $que_list = $question->where(array('questionCost'=>'1'))->select();

            response('200','查询成功！',$que_list);
        }  
        //用户未登录   
        else response('404','请获取访问权限！');
    }

    /**
     * 回复问题
     * @return [type] [description]
     */
    public function reply(){
        //判断是否登录
        if (hasKey()) { 
            if (IS_POST) {
                //接收问题Id
                $data['questionId'] = I('questionId');
                $questionId = array('questionId'=>I('questionId'));
                //接收官方顾问账号
                $data['userId'] = I('userId');
                $userId = array('userId'=>I('userId'));
                //接收回复
                $data['questionReply'] = I('questionReply');

                //实例化问题表
                $question = M('information_question');  
                $result1 = $question->where($questionId)->find();
                if ($data['userId']=='1000') { $result2=false;}
                else {
                    //实例化官方顾问信息表
                    $official = M('information_admin');  
                    $result2 = $official->where($adminAccount)->find();
                }

                //判断问题Id是否存在
                if (!$result1) {
                    response('404','问题不存在！');
                }
                //判断顾问是否存在
                elseif (!$result2) {
                    response('404','顾问不存在！');
                }
                //问题和顾问都存在
                else {
                    //实例化回复表
                    $reply = M('question_reply');
                    //写入回复
                    $result3 = $reply->data($data)->add();
                    $result4 = $question->where($questionId)->setfield(array('isNew'=>1));
                    //回复成功
                    if ($result3 and $result4) response('200','回复成功！');
                    //回复失败
                    else response('404','回复失败！');
                }
            }
            //非post访问
            else response('404','页面不存在！');
        }  
        //用户未登录   
        else response('404','请获取访问权限！');
    }
}