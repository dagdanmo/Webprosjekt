var i = 0;

var numberField = document.getElementById("number");
var start = document.getElementById("start");
var userPointsElement = document.getElementById("userPoints");
var pointsEarnedElement = document.getElementById("pointsEarned");
var startDropdown = document.getElementById("startDropdown");
var dropdownDisplay = document.getElementById("dropDown_Score");
var mainContainer = document.getElementById("mainContainer");

var userPoints = 0;
var pointsEarned = 200;

startDropdown.addEventListener("click", function(){
    mainContainer.style.filter = "blur(5px)"
    mainContainer.style.transition = "1s";
    dropdownDisplay.style.opacity = "0.8";
    dropdownDisplay.style.transition = "1s";

    setTimeout(function(){ myLoop(); }, 1500);
    setTimeout(function(){ removeDropdown(); }, 5500);

});

function removeDropdown(){
    mainContainer.style.filter = "blur(0px)"
    mainContainer.style.transition = "1s";
    dropdownDisplay.style.opacity = "0.0";
    dropdownDisplay.style.transition = "1s";
}

pointsEarnedElement.innerText = pointsEarned;
userPointsElement.innerText = userPoints;


var i = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      numberField.innerText = i;          //  your code here
                         //  increment the counter
      if (pointsEarned > 0) {            //  if the counter < 10, call the loop function
        myLoop();
        userPoints += 1;
        pointsEarned -= 1; 
        pointsEarnedElement.innerText = pointsEarned;
        userPointsElement.innerText = userPoints;
            if(userPoints >= 100){
                userPointsElement.style.left = "100px";
            }else if(userPoints > 10){
                userPointsElement.style.left = "140px";
            }

            if(pointsEarned > 100){
                pointsEarnedElement.style.left = "100px";
            }else if(pointsEarned > 10){
                pointsEarnedElement.style.left = "140px";
            }else if(pointsEarned < 10){
                pointsEarnedElement.style.left = "170px";
            }
         
            //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, 10)
}

start.addEventListener("click", function(){
    myLoop();
});     