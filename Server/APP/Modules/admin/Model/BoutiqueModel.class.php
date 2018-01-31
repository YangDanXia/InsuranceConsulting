<?php
/**
 * @Author: anchen
 * @Date:   2017-12-14 22:57:26
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-12-16 23:17:47
 */
class BoutiqueModel extends ViewModel {
    public $viewFields = array(
        // 'information_user' => array(
        //     'userPicture',
        // ),
        'information_question' => array(
            'questionId',
            'userId', 
            'userNickName', 
            'questionTitle', 
            'questionDetail', 
            'questionPhoto', 
            'questionType', 
            'questionCost', 
            // '_on'=>'information_user.userId = information_question.userId',
            // '_type'=>'LEFT',
        ),
        // 'question_reply' => array(
        //     'userId' => 'consultantId', 
        //     'questionReply',
        //     '_on'=>'information_question.quesitonId = question_reply.questionId',
        // ),
        'question_state' => array(
            'questionSatis',
            'isResolve',
            'isClassic',
            '_on' => ' information_question.quesitonId = question_state.questionId',
        ),
        // 'information_consultant' => array(
        //     'consultantPhoto',
        //     '_on'=>'information_question.userId = information_consultant.userId',
            
        // ),
        
    );
}