mui.init();
//用户输入用户名密码
//点击登录

//捕获用户点击登录按钮的时间

//获取到用户输入的账号和密码,使用ajax,传到服务器,进行账号密码校验,如成功,


 document.getElementById('login').addEventListener('tap',function(){
// 	alert('hhh');
    var usernameInput = document.querySelector('input[name="username"]');
    var passwordInput = document.querySelector('input[name="password"]');
    var usernameValue = usernameInput.value;
    var passwordValue = passwordInput.value;
    
    console.info("账号是：",usernameValue," 密码是",passwordValue);
    if(!usernameValue || !passwordValue){
        mui.toast('用户名与密码不能为空');
        return;
    }
    
    if (usernameValue ==='admin' && passwordValue ==='123456') {
    	   console.info('开始跳界面');
    	   mui.openWindow('../main/main.html','main');
    }else{
       	mui.toast('用户名或密码错误，请重新输入');
       	
    }
 });
 