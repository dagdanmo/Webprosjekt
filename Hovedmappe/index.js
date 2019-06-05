
    var fetchUsername = document.getElementById("inputUsername");
    var fetchPassword = document.getElementById("inputPassword");    
    var loginButtonTest = document.getElementById("loginButton");


    loginButtonTest.addEventListener("click", function(){
        
        for(var i = 0; i < users.length; i++){
            if(fetchUsername.value == users[i].username && fetchPassword.value == users[i].password){
                setTimeout(function () {
                    window.location.href = "CreateTable.html"; //will redirect to your blog page (an ex: blog.html)
                 }, 1000);
                 localStorage.setItem("username", fetchUsername.value);
            }else if(fetchUsername.value == users[i].email && fetchPassword.value == users[i].password){
                setTimeout(function () {
                    localStorage.setItem("username", fetchUsername.value);
                    window.location.href = "CreateTable.html"; //will redirect to your blog page (an ex: blog.html)
                 }, 1000);
            }else{
                console.log("Feil brukernavn eller passord.");
            }
        };     
});

//Function for going from login to signup.
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
    loginField.style.transitionDelay = "0s";

    signupForm.style.top = "0%";
    signupForm.style.transitionTimingFunction = "ease-in";
    signupForm.style.transitionDuration = "0.5s";
    signupForm.style.transitionDelay = "0s";
    signupForm.style.opacity = "1";
});

//Variables used in password-comparison.
var createPassword;
var confirmPassword;
var passwordReady;

//These functions below create the logic for the password input-fields. They check if the password-input matches the second password-input.
//If they match, a green circle is displayed in the bottom input-field. If not, a red circle is displayed. The passwords matching also sets
// variable passwordReady to true, which allows for us to make sure that password match is fullfilled before letting user finish registration.
var signupInputPassword = document.getElementById("inputPassword_Signup");
var wrongPassword = document.getElementById("wrong_Signup");
var correctPassword = document.getElementById("correct_Signup");

signupInputPassword.addEventListener("input", function(){
    console.log(signupInputPassword.value);
    createPassword = signupInputPassword.value;
    if(confirmPassword == createPassword){
        if(confirmPassword.length == 0 || createPassword.length == 0){
            console.log("Password does not match!");
            passwordReady = false;
            correctPassword.style.opacity = "0";
        }else{
            console.log("Password match!");
            correctPassword.style.opacity = "1";
            wrongPassword.style.opacity ="0";
            passwordReady = true;
        }
    } else if(confirmPassword != createPassword && confirmPassword != null){
        console.log("Password does not match.");
        wrongPassword.style.opacity = "1";
        correctPassword.style.opacity = "0";
        passwordReady = false; 
    }
});

var confirmInputPassword = document.getElementById("inputConfirmPassword_Signup");
confirmInputPassword.addEventListener("input", function(){
    confirmPassword = confirmInputPassword.value;
    //console.log(confirmPassword); - for bugtesting
    if(confirmPassword == createPassword){ 
        if(confirmPassword.length == 0 || createPassword.length == 0){
            console.log("Password does not match!");
            wrongPassword.style.opacity = "0";
            passwordReady = false;
        }else{
            console.log("Password match!");
            correctPassword.style.opacity = "1";
            wrongPassword.style.opacity = "0";
            passwordReady = true;
        }

    } else{
        console.log("Password does not match.");
        wrongPassword.style.opacity = "1"; 
        correctPassword.style.opacity = "0";
        passwordReady = false;
    }
});


var users = [{
    username: "Dag",
    email: "dag@taskit.com",
    password: "Dag123",
    score: 0
},
{
    username: "Daniel",
    email: "daniel@taskit.com",
    password: "Daniel123"
},
{
    username: "Mattis",
    email: "mattis@taskit.com",
    password: "Mattis123"
},
{
    username: "Martin",
    email: "martin@taskit.com",
    password: "Martin123",
},
{
    username: "Mathias",
    email: "mathias@taskit.com",
    password: "Mathias123"
},{
    username: "admin",
    email: "admin@taskit.com",
    password: "admin"
}];


function createSignupForm(){

};


// Event that happens when user presses "register button when making user"
var register_Signup = document.getElementById("register_Signup");
var signupInputUsername = document.getElementById("inputUsername_Signup");
var signupInputEmail = document.getElementById("inputEmail_Signup");
var signupRegFeedback = document.getElementById("regFeedback_Signup");



var isTaken = false;
var isReady = false;
// var readSignup = document.getElementById("signUp");
register_Signup.addEventListener("click", function(){
    isTaken = false;
    var i = 0;
    console.log(signupInputUsername.value, signupInputEmail.value);
    if(signupInputUsername.value != null && signupInputEmail.value != null && passwordReady && signupInputPassword.value != "" && signupInputEmail.value != ""){
        console.log(signupInputUsername.value, signupInputEmail.value);
    
        for(i = 0; i < users.length; i++){
            if(signupInputUsername.value == users[i].username){
                signupRegFeedback.innerText = "Username is taken.";
                signupRegFeedback.style.color = "red";
                isTaken = true;
                i = 0;
                break;

            }else if(signupInputEmail.value == users[i].email){
                signupRegFeedback.innerText = "E-mail is already in use.";
                signupRegFeedback.style.color = "red";
                isTaken = true;
                i = 0;
                break;
            }else{
                isTaken = false;
                isReady = true;
            }
            
        };

    }else{
        signupRegFeedback.innerText = "Missing information.";
        signupRegFeedback.style.color = "red";
    }
    if(isTaken == false && isReady){

        users.push({username: signupInputUsername.value, email: signupInputEmail.value, password: signupInputPassword.value });
        console.log(users);

        localStorage.setItem("username", signupInputUsername.value);

        signupRegFeedback.innerText = "Registration complete!"
        signupRegFeedback.style.color = "green";
        console.log("Register clicked");
        fetchUsername.value = signupInputUsername.value;
        fetchPassword.value = signupInputPassword.value;
        //loginField.style.opacity = "0";
        //loginField.style.transition = "0%";
        signupForm.style.transitionTimingFunction = "ease-in";
        signupForm.style.transitionDuration = "0.5s";
        signupForm.style.transitionDelay = "1.5s";
        signupForm.style.opacity = "0";
        signupForm.style.top = "120%";
    
        loginField.style.top = "85%";
        loginField.style.transitionTimingFunction = "ease-in";
        loginField.style.transitionDuration = "0.5s";
        loginField.style.transitionDelay = "1.5s";
        loginField.style.opacity = "1";

    }

}); 

