/* 
* @Author: anchen
* @Date:   2017-12-11 10:59:30
* @Last Modified by:   anchen
* @Last Modified time: 2017-12-12 20:45:34
*/


// 保存ID的值在删除时有用
var chooseUserId =[];

$(document).ready(function(){ 

   // 查看历史
    window.operateEvents = {
       'click .issueBtn': function (e, value, row, index) {
         //  JSON.stringify(row)是字符串；row是整行的JSON格式的值
           var userId = row.id;
           window.location = "issueInfo.html?id="+userId;
           console.log('You click like icon, row: ' + row.id);
        }
    };

   // 选择栏
    window.chooseEvents = {
       'click .choose': function (e, value, row, index) {
          var _id = row.id;
          var flag = 1; // flag为1则表示无此项需进行添加，为0则有此项不操作
          for(var i=0;i<chooseUserId.length;i++){
             if(chooseUserId[i] == _id){
               flag = 0;
               chooseUserId.splice(i,1);
             }
           }
          if(flag){
           chooseUserId.push(_id);
          }
           console.log('You click like icon, row: ' + chooseUserId);
        } 
    };
   
   // 保险顾问的个人资料
    window.detailInfoEvents = {
       'click .detailInfoBtn': function (e, value, row, index) {
         //  JSON.stringify(row)是字符串；row是整行的JSON格式的值
           var userId = row.id;
           window.location = "advisorInfoDetail.html?id="+userId;
           console.log('You click like icon, row: ' + row.id);
        }
    };

  // 待审核问题的详细资料
    window.issueCheckEvents = {
       'click .issueCheckBtn': function (e, value, row, index) {
         //  JSON.stringify(row)是字符串；row是整行的JSON格式的值
           var userId = row.id;
           window.location = "issueInfoDetail.html?id="+userId;
           console.log('You click like icon, row: ' + row.id);
        }
    };
   

});

  // 删除数据
   function deleteData(){
      console.log(chooseUserId);
   }

  // 历史提问栏/解答栏内的内容
   function operateFormatter(value, row, index) {
        return ['<a class="issueBtn btn" style="cursor:pointer">查看</a>'].join('');
    }

  // 选项栏内的内容
   function chooseFormatter(value, row, index) {
        return ['<input class="choose" name="" type="checkbox" value="">'].join('');
    }

  // 查看顾问详细资料内的内容
   function detailInfoFormatter(value, row, index) {
        return ['<a class="detailInfoBtn btn" style="cursor:pointer">查看</a>'].join('');
    }

  // 问题审核
   function checkOpinionFormatter(value,row,index){
     return [
      '<img src="Image/pass.png" height="25" width="25" style="padding:2px 10px 0 10px" />',
      '<img src="Image/fail.png" height="20" width="20" style="padding:2px 0 0 10px"/>'
      ]
      .join('');
   }

 // 查看待审核问题详细内的内容
   function issueCheckFormatter(value, row, index) {
        return ['<a class="issueCheckBtn btn" style="cursor:pointer">查看</a>'].join('');
    }
