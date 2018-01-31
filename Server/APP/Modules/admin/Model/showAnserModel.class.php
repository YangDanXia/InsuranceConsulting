<?php
/**
 * @Author: anchen
 * @Date:   2017-12-14 22:40:46
 * @Last Modified by:   anchen
 * @Last Modified time: 2018-01-25 10:47:13
 */
class showAnserModel extends ViewModel {
    public $viewFields = array(
        'information_question' => array(
            'questionId',
            'userId',
            'questionTitle', 
            'questionDetail', 
            'questionPhoto', 
            'questionType', 
            'questionCost', 
            'questionTime',
            'isClassic',
            'isOpen',
            'gmt_modified' => 'AskTime',
            '_type' => 'LEFT',
        ),
        'question_reply'=> array(
            'userId' => 'consultantId',
            'questionReply',
            'gmt_modified'=>'AnserTime',
            '_on'=>'information_question.questionId=question_reply.questionId',
        ),
    );
}