
var btnLogin = document.querySelector('#btnLogin');
btnLogin.onclick = function LogIn() {

    //顺序结构（用关键字var声明关键字，说明javascript是弱数据类型）
    var username = document.form1.txtUserName.value;
    var userpwd = document.form1.txtUserPwd.value;
    if (username == "" || username == "")//选择结构
    {
        alert("用户名不能为空！");
        document.form1.txtUserName.focus();
        return;
    }
    //利用正则表达式判断输入的用户名是否正确
    var reg = /^[\u4E00-\u9FA5\uF900-\uFA2D\w]+$/g;
    if (!reg.test(username)) {
        alert("用户名格式不正确！请从新输入");
        return;
    }

    if (userpwd == "" || username == "") {
        alert("密码不能为空！");
        document.form1.txtUserPwd.focus();
        return;
    }

    //利用正则表达式判断输入的密码是否正确
    reg = /^[\u4E00-\u9FA5\uF900-\uFA2D\w]+$/g;
    if (!reg.test(userpwd)) {
        alert("密码格式不正确！请从新输入");
        return;
    }


    document.form1.submit();

};


