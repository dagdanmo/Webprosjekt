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
var loginField = document.getElementById("loginField");
var signupForm = document.getElementById("signupForm");
readSignup.addEventListener("click", function(){
    console.log("Signup klicked");
    //loginField.style.opacity = "0";
    //loginField.style.transition = "0%";
    loginField.style.transitionTimingFunction = "ease-in";
    loginField.style.transitionDuration = "0.5s";
    loginField.style.opacity = "0";
    loginField.style.top = "0%";

    signupForm.style.top = "15%";
    signupForm.style.transitionTimingFunction = "ease-in";
    signupForm.style.transitionDuration = "0.5s";
    signupForm.style.opacity = "1";
});

var createPassword;
var confirmPassword;

var signupInputPassword = document.getElementById("inputPassword_Signup");
var passwordCheckbox = document.getElementById("circle_Signup");
signupInputPassword.addEventListener("input", function(){
    console.log(signupInputPassword.value);
    createPassword = signupInputPassword.value;
    if(confirmPassword == createPassword){
        console.log("Password match!");
        passwordCheckbox.style.opacity = "1";
        passwordCheckbox.style.backgroundColor = "green"; 
    } else{
        console.log("Password does not match.");
        passwordCheckbox.style.opacity = "1";
        passwordCheckbox.style.backgroundColor = "red"; 
    }
});

var confirmInputPassword = document.getElementById("inputConfirmPassword_Signup");
confirmInputPassword.addEventListener("input", function(){
    confirmPassword = confirmInputPassword.value;
    console.log(confirmPassword);
    if(confirmPassword == createPassword){
        console.log("Password match!");
        passwordCheckbox.style.opacity = "1";
        passwordCheckbox.style.backgroundColor = "greenyellow"; 

    } else{
        console.log("Password does not match.");
        passwordCheckbox.style.opacity = "1";
        passwordCheckbox.style.backgroundColor = "red"; 
    }
});





function createSignupForm(){

};

};

                         //Unused elements
//document.getElementById("myBtn").addEventListener("click", displayDate);
    /*
    function fadeOut(){
        var loginField = document.getElementById('loginField')
        loginField.style.opacity = "0";
        loginField.style.transition = "%." ;
    } 
  */
