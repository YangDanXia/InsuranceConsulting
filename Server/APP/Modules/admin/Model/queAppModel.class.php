<?php
/**
 * @Author: anchen
 * @Date:   2017-12-14 22:40:46
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-12-22 21:54:16
 */
class queAppModel extends ViewModel {
    public $viewFields = array(
        'application_question' => array(
            'questionId',
            'userId',
            'questionTitle', 
            'questionDetail', 
            'questionPhoto', 
            'questionType', 
            'questionCost', 
            'isFailed',
            'questionResult',
        ),
        'information_user'=> array(
            'userNickName',
            '_on'=>'application_question.userId=information_user.userId',
        ),
    );
}