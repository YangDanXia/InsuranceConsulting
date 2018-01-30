<?php
/**
 * @Author: anchen
 * @Date:   2017-12-14 22:40:46
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-12-23 13:31:03
 */
class DetailModel extends ViewModel {
    public $viewFields = array(
        'information_user'=> array(
            'userId',
            'userNickName',
        ),
        'information_question' => array(
            'questionId',
            'userId', 
            'questionTitle', 
            'questionDetail', 
            'questionPhoto', 
            'questionType', 
            'questionCost', 
            'isClassic',
            '_on'=>'information_user.userId=information_question.userId',
            '_type'=>'LEFT',
        ),
        'question_reply' => array(
            'userId'=>'consultantId',
            'questionReply',
            '_on'=>'information_question.questionId=question_reply.questionId',
            '_type'=>'LEFT',
        ),
        'information_consultant'=>array(
            'consultantName',
            '_on'=>'question_reply.userId=information_consultant.userId',
            '_type'=>'LEFT',
        ),
        'question_state' => array(
            'questionSatis',
            'isResolve',
            '_on' => 'question_state.questionId=information_question.questionId',
        ),
    );
}