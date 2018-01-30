/* 
* @Author: YDX
* @Date:   2017-12-11 10:20:24
* @Last Modified by:   anchen
* @Last Modified time: 2017-12-13 18:29:14
*/

$(document).ready(function(){
    $("button").click(function() {
        console.log("1");
        var url = "http://120.78.89.170/admin/login";
        var data ={
            key:"haiqian",
            name:$("#adminName").val(),
            pwd:$("#password").val()
        };
        $.post(url,data, function(res) { 
            var result = JSON.parse(res);
            if(result.code == "200"){
                window.location="admin/index.html";
            }else if(result.code=="404"){
                alert("账号或密码错误");
            }
        });
    });
});