window.onload=function(){
    var fetchUsername = document.getElementById("inputUsername");
    var fetchPassword = document.getElementById("inputPassword");    
    var loginButtonTest = document.getElementById("loginButton");

    loginButtonTest.addEventListener("click", function(){
        console.log("Du er logget inn.");
        console.log(fetchUsername.value);
        console.log(fetchPassword.value);
});
};

                         //Unused elements
//document.getElementById("myBtn").addEventListener("click", displayDate);
    
    function fadeOut(){
        var loginField = document.getElementById('loginField')
        loginField.style.opacity = '0';
        loginField.style.top = '60%';
    } 
  
