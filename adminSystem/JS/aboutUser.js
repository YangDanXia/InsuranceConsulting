/* 
* @Author: YDX
* @Date:   2017-12-09 22:38:58
* @Last Modified by:   anchen
* @Last Modified time: 2017-12-09 22:39:38
*/

var pageSize,pageCount, currentPage;
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
        var countone=0,counttwo=0;
        $.ajaxSetup({
            xhrFields: {
                withCredentials: true
            }
        });
        $("#search").on("click",function () {
            countone++;
            $.ajax({
                type:"GET",
                url:'http://123.207.117.67/studentsignin/admin/student/search?keyword='+$("#keyword").val(),
                dataType:"json",
                success:function (data) {
                    if (countone != counttwo) {
                        $("#studentdetail").remove();
                        $("#student").append("<table id='studentdetail' class='table table-bordered table-condensed table-hover'></table>");
                    }
                    var rowCount = data.data.length;
                    console.log(data.totalPage)
                    pageSize = 10;
                    pageCount = data.totalPage, currentPage=1;
                    console.log(pageCount)
                    var page = "<li><a  href='javascript:void(0)' onclick='selectpage(this);' id='previous'><span>&laquo;</span></a></li>";
                    for (var v = 1; v <= pageCount; v++) {
                        page += "<li><a  href='javascript:void(0)' onclick='selectpage(this);' number="+v+">" + v + "</a></li>";
                    }
                    page += "<li><a  href='javascript:void(0)' onclick='selectpage(this);' id='next'><span>&raquo;</span></a></li>"
                    $($("#pagination").children()).empty().append($(page));
                    $("#pagination").find("li:eq("+currentPage+")").addClass("active");
                    var trth = $("<tr></tr>");
                    var th = $("<th>学号</th><th>姓名</th><th>手机号码</th><th>密码</th><th>操作</th>");
                    th.appendTo(trth);
                    trth.appendTo($("#studentdetail"))
                    console.log(data.data[0])
                    for (var i = 0; i < rowCount; i++) {
                        var tr = $("<tr value=" + data.data[i].id + " name="+data.data[i].studentName+" tel="+data.data[i].phoneNumber+" password="+data.data[i].password+"></tr>");
                        var tdhtml = $("<td>" + data.data[i].id + "</td>" + "<td>" + data.data[i].studentName + "</td>" + "<td>" + data.data[i].phoneNumber + "</td>" + "<td>" + data.data[i].password + "</td>" + "<td><button class='btn btn-default btn-xs modify' onclick='modifystudent(this)'>修改</button><button class='btn btn-xs btn-default delete' onclick='del(this)'>删除</button></td>");
                        tdhtml.appendTo(tr);
                        tr.appendTo($("#studentdetail"))
                    }
                    counttwo++;
                },
                error:function (jqXHR) {
                    alert("发生错误:"+jqXHR.status);
                }
            })
        })
    })
    function selectpage(obj) {
        if($(obj).attr("id")==="previous"){
            if(currentPage!=1){
                currentPage--;
            }
        }
        if($(obj).attr("id")==="next"){
            if(currentPage!=pageCount){
                currentPage++;
            }
        }
        if($(obj).attr("number")){
            currentPage=$(obj).attr("number");
        }
        $.ajax({
            type:"GET",
            url:'http://123.207.117.67/studentsignin/admin/student/search?keyword='+$("#keyword").val()+"&currPage="+currentPage,
            dataType:"json",
            success:function (data) {
                var rowCount = data.data.length;
                pageSize = 10;
                pageCount = data.totalPage;
                console.log(pageCount)
                var page = "<li><a  href='javascript:void(0)' onclick='selectpage(this);' id='previous'><span>&laquo;</span></a></li>";
                for (var v = 1; v <= pageCount; v++) {
                    page += "<li><a  href='javascript:void(0)' onclick='selectpage(this);' number="+v+">" + v + "</a></li>";
                }
                page += "<li><a  href='javascript:void(0)' onclick='selectpage(this);' id='next'><span>&raquo;</span></a></li>"
                $($("#pagination").children()).empty().append($(page));
                $("#pagination").find("li:eq("+currentPage+")").addClass("active");
                var trth = $("<tr></tr>");
                var th = $("<th>学号</th><th>姓名</th><th>手机号码</th><th>密码</th><th>操作</th>");
                th.appendTo(trth);
                $("#studentdetail").empty().append(trth);
                console.log(data.data[0])
                for (var i = 0; i < rowCount; i++) {
                    var tr = $("<tr value=" + data.data[i].id + " name="+data.data[i].studentName+" tel="+data.data[i].phoneNumber+" password="+data.data[i].password+"></tr>");
                    var tdhtml = $("<td>" + data.data[i].id + "</td>" + "<td>" + data.data[i].studentName + "</td>" + "<td>" + data.data[i].phoneNumber + "</td>" + "<td>" + data.data[i].password + "</td>" + "<td><button class='btn btn-default btn-xs modify' onclick='modifystudent(this)'>修改</button><button class='btn btn-xs btn-default delete' onclick='del(this)'>删除</button></td>");
                    tdhtml.appendTo(tr);
                    tr.appendTo($("#studentdetail"))
                }
            },
            error:function (jqXHR) {
                alert("发生错误:"+jqXHR.status);
            }
        })
    }
    function modifystudent(obj) {
        sessionStorage.setItem("id",$(obj).parent().parent().attr("value"));
        sessionStorage.setItem("name",$(obj).parent().parent().attr("name"));
        sessionStorage.setItem("tel",$(obj).parent().parent().attr("tel"));
        sessionStorage.setItem("password",$(obj).parent().parent().attr("password"));
        window.location.href='modifystudent.html';
    }
    function del(obj){
        console.log($(obj).parent().parent().attr("value"));
        var res=confirm("你确认要删除吗？");
        if(res==true){
            $.ajaxSetup({
                xhrFields: {
                    withCredentials: true
                }
            });
            $.ajax({
                type:"GET",
                url:"http://123.207.117.67/studentsignin/admin/student/delete?id="+$(obj).parent().parent().attr("value"),
                dataType:"json",
                success:function (data) {
                    if(data.code==1){
                        $(obj).parents("tr").remove();
                    }
                    else{
                        alert(data.errors.id);
                    }
                },
                error:function (jqXHR) {
                    alert("发生错误:"+jqXHR.status);
                }
            })
        }
    }