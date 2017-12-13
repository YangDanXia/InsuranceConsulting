/* 
* @Author: YDX
* @Date:   2017-12-11 10:20:24
* @Last Modified by:   anchen
* @Last Modified time: 2017-12-12 12:07:28
*/

$(document).ready(function(){
    $("button").click(function(event) {
        var url = "";
        var data ={
            admin:$("#adminName").val(),
            password:$("#password").val()
        };
        $.post(url,data, function(res) {
            if(res){
                window.location="index.html";
            }else{
                alert("账号或密码错误");
            }
        });
    });
});