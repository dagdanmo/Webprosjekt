
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


//Signupform
var signupInputPassword = document.getElementById("inputPassword_Signup");
var passwordCheckbox = document.getElementById("circle_Signup");
signupInputPassword.addEventListener("input", function(){
    console.log(signupInputPassword.value);
    createPassword = signupInputPassword.value;
    if(confirmPassword == createPassword){
        if(confirmPassword.length == 0 || createPassword.length == 0){
            console.log("Password does not match!");
            passwordCheckbox.style.backgroundColor = "red";
            passwordCheckbox.style.opacity = "0";
        }else{
            console.log("Password match!");
            passwordCheckbox.style.opacity = "1";
            passwordCheckbox.style.backgroundColor = "greenyellow";
        }
    } else if(confirmPassword != createPassword && confirmPassword != null){
        console.log("Password does not match.");
        passwordCheckbox.style.opacity = "1";
        passwordCheckbox.style.backgroundColor = "red"; 
    }
});

var confirmInputPassword = document.getElementById("inputConfirmPassword_Signup");
confirmInputPassword.addEventListener("input", function(){
    confirmPassword = confirmInputPassword.value;
    //console.log(confirmPassword); - for bugtesting
    if(confirmPassword == createPassword){ 
        if(confirmPassword.length == 0 || createPassword.length == 0){
            console.log("Password does not match!");
            passwordCheckbox.style.backgroundColor = "red";
            passwordCheckbox.style.opacity = "0";
        }else{
            console.log("Password match!");
            passwordCheckbox.style.opacity = "1";
            passwordCheckbox.style.backgroundColor = "greenyellow";
        }

    } else{
        console.log("Password does not match.");
        passwordCheckbox.style.opacity = "1";
        passwordCheckbox.style.backgroundColor = "red"; 
    }
});

/*
var user = [{
username: "Dagefar",
email: "dag.danmo@gmail.com",

},
{

},
{

}];
//user.username[0] = "dragefar";
console.log()

*/

function createSignupForm(){

};
// Event that happens when user presses "register button when making user"
var register_Signup = document.getElementById("register_Signup");
// var readSignup = document.getElementById("signUp");
register_Signup.addEventListener("click", function(){
   console.log("Register clicked");
   //loginField.style.opacity = "0";
   //loginField.style.transition = "0%";
   signupForm.style.transitionTimingFunction = "ease-in";
   signupForm.style.transitionDuration = "0.5s";
   signupForm.style.opacity = "0";
   signupForm.style.top = "-50%";

   loginField.style.top = "30%";
   loginField.style.transitionTimingFunction = "ease-in";
   loginField.style.transitionDuration = "0.5s";
   loginField.style.opacity = "1";
}); 

