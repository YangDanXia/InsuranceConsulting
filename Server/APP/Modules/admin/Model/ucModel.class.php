<?php
/**
 * @Author: anchen
 * @Date:   2017-12-14 22:40:46
 * @Last Modified by:   anchen
 * @Last Modified time: 2018-01-01 13:27:06
 */
class ucModel extends ViewModel {
    public $viewFields = array(
        'information_user'=> array(
            'userId',
            'userNickName',
            'userPicture',
        ),
        'comment' => array(
            'commentContent', 
            'gmt_create'=>'commentCreateTime', 
            '_on' => 'information_user.userId = comment.userId',
        ),
    );
}