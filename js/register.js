
window.onload = function() {
    var btnCheck = document.getElementById('btnCheck');

    btnCheck.onclick = function(e) {
    e = e || window.event;
    var phone = document.getElementById('phone').value;
    if(!/^1[3-9]\d{9}$/.test(phone)) {
        alert('手机号不合法');
        return false;
    }
    var password = document.getElementById('password').value;
    if(!/^\S{6,20}$/.test(password)) {
        alert('密码不能有空格');
        return false;
    }

    var confirm_pwd = document.getElementById('confirm_pwd').value;
    if(confirm_pwd != password) {
        alert('两次输入密码不一致');
        return false;
    }

 }
}