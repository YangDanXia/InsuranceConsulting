/* 
* @Author: YDX
* @Date:   2017-12-11 10:59:30
* @Last Modified by:   anchen
* @Last Modified time: 2018-01-01 16:27:45
*/


// 保存ID的值在删除时有用
var chooseUserId =[];
var deletemark;
var historyansw=["1","2","3"];
var count=0;

$(document).ready(function(){ 

   // 查看用户的历史提问记录
    window.historicalQEvents = {
       'click .detailBtn': function (e, value, row, index) {
         //  JSON.stringify(row)是字符串；row是整行的JSON格式的值
           var userId = row.userId;
           window.location = "../issue/issueInfo.html?id="+userId+"&type=Q";
        }
    };


   // 查看顾问的历史解答记录
    window.historicalAEvents = {
       'click .detailBtn': function (e, value, row, index) {
         //  JSON.stringify(row)是字符串；row是整行的JSON格式的值
           var userId = row.userId;
           window.location = "../issue/issueInfo.html?id="+userId+"&type=A";
        }
    };



  // 查看官方顾问的历史解答记录
    window.historicalOfficalEvents = {
       'click .detailBtn': function (e, value, row, index) {
         //  JSON.stringify(row)是字符串；row是整行的JSON格式的值
           var userId = row.adminAccount;
           window.location = "../issue/issueInfo.html?id="+userId+"&type=A";
        }
    };


   // 用户列表选择栏
    window.chooseEvents = {
       'click .choose': function (e, value, row, index) {
          var _id = row.userId;
            console.log(_id);
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
        } 
    };

     // 官方顾问选择栏
    window.chooseEvents_offcon = {
       'click .choose': function (e, value, row, index) {
          var _id = row.adminAccount;
          deletemark='offcon';
            console.log(_id);
              console.log(deletemark);
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
        } 
    };
   // 保险顾问的个人资料
    window.detailInfoEvents = {
       'click .detailBtn': function (e, value, row, index) {
         //  JSON.stringify(row)是字符串；row是整行的JSON格式的值
           var userId = row.userId; 
           window.location = "advisorInfoDetail.html?userId="+userId;
        }
    };


  // 待审核问题的详细资料
    window.issueCheckEvents = {
       'click .detailBtn': function (e, value, row, index) {
         //  JSON.stringify(row)是字符串；row是整行的JSON格式的值
           var Id = row.questionId;
           window.location = "issueCheckDetail.html?id="+Id;
        }
    };

      // 待审核问题的审核意见
    window.checkOpinionEvents = {
       'click .agreeBtn': function (e, value, row, index) {  
           var data = {
            key:"haiqian",
            questionId:row.questionId
           }
           $.post('http://120.78.89.170/question/pass',data, function(res) {
                if(JSON.parse(res).code == "200"){
                   alert("操作成功！");
                   location.reload();
                }else if(JSON.parse(res).code == "404"){
                   alert("系统出错，请稍后重试");
                }
           });

        },
        'click .failBtn':function(e,value,row,index){
              var failReason=prompt("请输入驳回原因");
              if (failReason!=null && failReason!=""){ 
               var data = {
                 key:"haiqian",
                 questionId:row.questionId,
                 questionResult:failReason
              }
              $.post('http://120.78.89.170/question/notpass',data, function(res) {
                 if(JSON.parse(res).code == "200"){
                    alert("操作成功！");
                    location.reload();
                 }else if(JSON.parse(res).code == "404"){
                    alert("系统出错，请稍后重试");
                 }
           });
               }
        }

    };

    // 待审核顾问的详细资料
    window.advisorCheckEvents = {
       'click .detailBtn': function (e, value, row, index) {
           var userId = row.userId;
           window.location = "advisorCheckDetail.html?id="+userId;
        }
    };

      // 待审核顾问的审核意见
    window.advisorOpinionEvents = {
        'click .agreeBtn': function (e, value, row, index) {  
           var data = {
            key:"haiqian",
            userId:row.id
           }
           $.post('http://120.78.89.170/consultant/pass',data, function(res) {
                if(JSON.parse(res).code == "200"){
                   alert("操作成功！");
                   location.reload();
                }else if(JSON.parse(res).code == "404"){
                   alert("系统出错，请稍后重试");
                }
           });

        },
        'click .failBtn':function(e,value,row,index){
              var data = {
                key:"haiqian",
                userId:row.id
              }
              var failReason=prompt("请输入驳回原因");
              if (failReason!=null && failReason!=""){ 
                 $.post('http://120.78.89.170/consultant/notpass',data, function(res) {
                   if(JSON.parse(res).code == "200"){
                      alert("操作成功！");
                      location.reload();
                   }else if(JSON.parse(res).code == "404"){
                      alert("系统出错，请稍后重试");
                }
           });
               }
        }

    };

     // 问题详细内容
    window.issueDetailEvents = {
       'click .detailBtn':function(e,value,row,index){
          var id = row.questionId;
          var data = {
            key:"haiqian",
            questionId:id
           }
           $.post('http://120.78.89.170/question/list',data, function(res) {
                if(JSON.parse(res).code == "200"){
                   window.location = "passIssueDetail.html?id="+id;
                }else if(JSON.parse(res).code == "404"){
                   alert("系统出错，请稍后重试");
                }
           });

       }
    }

    
 // 查看精品案例详细内容
    window.caseDetailEvents = {
       'click .detailBtn':function(e,value,row,index){
          var id = row.questionId;
          var data = {
            key:"haiqian",
            questionId:id
           }
           $.post('http://120.78.89.170/boutique/list',data, function(res) {
                if(JSON.parse(res).code == "200"){
                   window.location = "../issue/passIssueDetail.html?id="+id;
                }else if(JSON.parse(res).code == "404"){
                   alert("系统出错，请稍后重试");
                }
           });

       }
    };

     // 设置为精品
    window.beCaseEvents = {
       'click .classBtn':function(e,value,row,index){
          var id = row.questionId;
          var data = {
            key:"haiqian",
            questionId:id
           }
           $.post('http://120.78.89.170/question/boutique',data, function(res) {
                if(JSON.parse(res).code == "200"){
                  alert("设置成功！");
                  location.reload();
                }else if(JSON.parse(res).code == "404"){
                   alert("系统出错，请稍后重试");
                }
           });

       }
    };
});

  // 删除数据
   function deleteData(){
      console.log(chooseUserId);
      var deletecount=chooseUserId.length;
         console.log(deletecount);
      for (var i = 0; i <deletecount ; i++) {
         console.log(chooseUserId[i]);
           var data = {
            key:"haiqian",
            adminAccount:JSON.parse(chooseUserId[i])
           }
           $.post('http://120.78.89.170/revoke',data, function(res) {
             console.log(res);
                // if(JSON.parse(res).code == "200"){
                //   alert("设置成功！");
                //   location.reload();
                // }else if(JSON.parse(res).code == "404"){
                //    alert("系统出错，请稍后重试");
                // }
                 });
      };
       
   }
 
  // 选项栏内的内容
   function chooseFormatter(value, row, index) {
        return ['<input class="choose" name="" type="checkbox" value="">'].join('');
    }

 

  // 问题审核
   function checkOpinionFormatter(value,row,index){
     return [
      '<img class="agreeBtn" src="../../Image/pass.png" height="25" width="25" style="padding:2px 10px 0 10px;cursor:pointer" />',
      '<img class="failBtn" src="../../Image/fail.png" height="20" width="20" style="padding:2px 0 0 10px;cursor:pointer"/>'
      ]
      .join('');
   }

  // 设为精品
   function beCaseFormatter(value, row, index) {
        var isClassic= row.isClassic;
        if(isClassic == "1"){
         return ['<img src="../../Image/classic.png" height="35" width="35" style="padding-left: 20px;"/>'].join('');
        }else{
         return ['<img class="classBtn" src="../../Image/notClassic.png" height="35" width="35" style="padding-left: 20px;cursor:pointer"/>'].join('');
        }

    }

  // 解决情况
   function statusFormatter(value, row, index) {
        var isResolve = row.isResolve;
        if(isResolve == "1"){
         return ['已解决'].join('');
        }else{
         return ['未解决'].join('');
        }

    }

  // 费用情况
   function costFormatter(value, row, index) {
        var questionCost = row.questionCost;
        if(questionCost == "1"){
         return ['免费'].join('');
        }else{
         return ['付费'].join('');
        }

    }

  //查看详细资料内的内容
   function detailFormatter(value, row, index) {
         var id = row.userId;
     console.log(id);
    console.log(historyansw[id]);
        return '<a class="detailBtn btn" style="cursor:pointer;">查看</a>';
    }


  
    window.historicalQtopic = {
       'click .detailBtn': function (e, value, row, index) {
            var topicId= row.topicId;
            window.location = "historicalQtopic.html?topicId="+topicId;
       
        }
    };


    // window.detailInfoEvents = {
    //    'click .detailBtn': function (e, value, row, index) {
    //      //  JSON.stringify(row)是字符串；row是整行的JSON格式的值
    //        var userId = row.userId; 
    //        window.location = "advisorInfoDetail.html?userId="+userId;
    //     }
    // };

   // function detailFormatterhistory(value, row, index){
   //    var countansw= countasn( value, row, index);
   //    console.log("AAAAAA");
   //      console.log(countansw);
   //   // return ['<a class="detailBtn btn" style="cursor:pointer;">查看</a>'].join('') 
   //     // countan(e,value,row,index),
   
   //   // count=count+1,
   //   //  console.log(row), console.log(count)
   // }


  // var countansw= countasn( value, row, index);
  //     console.log("AAAAAA");
  //       console.log(countansw);

    // function countasn(value, row, index){ 
    //   var countansw;
    //        var userId = row.userId;
    //         var data = {
    //         key:"haiqian",
    //         userId:userId
    //        };
    //        $.post('http://120.78.89.170/question/list',data, function(res) {
            
    //         // console.log(res),
    //         countansw=JSON.parse(res).data.length,
         
    //          // count=res.data.length,为什么不能这样用
    //           console.log(countansw)
    //        });  
    //         return countansw
    //     }
    
    // function countasn(value, row, index){ 
    //   var countansw;
    //        var userId = row.userId;
    //         var data = {
    //         key:"haiqian",
    //         userId:userId
    //        };
    //        $.post('http://120.78.89.170/question/list',data, function(res) {
            
    //         // console.log(res),
    //         countansw=JSON.parse(res).data.length,
         
    //          // count=res.data.length,为什么不能这样用
    //           console.log(countansw)
    //        });  
    //         return countansw
    //     }

//计算表格的行数
//     function show()
// {
// var tab = document.getElementById("fresh-table") ;
//       //表格行数
//       var rows = tab.rows.length ;
//       //表格列数
//       var cells = tab.rows.item(0).cells.length ;
// alert("行数"+rows+"列数"+cells);
// }