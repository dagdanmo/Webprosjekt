window.onload=function(){
    var fetchUsername = document.getElementById("inputUsername");
    var fetchPassword = document.getElementById("inputPassword");    
    var loginButtonTest = document.getElementById("loginButton");

    loginButtonTest.addEventListener("click", function(){
        console.log("Du er logget inn.");
        console.log(fetchUsername.value);
        console.log(fetchPassword.value);
});

var readSignup = document.getElementById("signUp");

readSignup.addEventListener("click", function(){
    console.log("Signup klicked");
});

function createSignupForm(){
    
};

};

                         //Unused elements
//document.getElementById("myBtn").addEventListener("click", displayDate);
    
    function fadeOut(){
        var loginField = document.getElementById('loginField')
        loginField.style.opacity = '0';
       
    } 
  
