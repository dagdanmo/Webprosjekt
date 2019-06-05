// init
let cardI = 0;
let orderI = 0;
let orderDrag;

// main container
const table = document.getElementById("container");

// newCardButton
const newCardButton = document.getElementById("newCardButtonContainer");
newCardButton.addEventListener("click", newCardPopUp);
const newCardPopContainer = document.getElementById("newCardPopContainer");
const popClose = document.getElementsByClassName("close")[0];
popClose.addEventListener("click", popDown);
const getCardName = document.getElementById("getCardName");
const popCardEnter = document.getElementById("cardEnter");
popCardEnter.addEventListener("click", createNewCard);

// open popup window for new card
function newCardPopUp(){
    newCardPopContainer.style.display = "block";
    tableContainer.style.filter = "blur(4px)";
}

// close popup window for new card
function popDown(){
    newCardPopContainer.style.display = "none";
    getCardName.value = "";
    tableContainer.style.filter = "blur(0px)";
}

function createNewCard(){
    cardGenerator();
    popDown();
}

// Creating new order
function createNewOrder(){
    
    const cardId = event.target.id.substr(event.target.id.length -1);
    const orderInput = document.getElementById("orderInput"+cardId);
    const currentCard = document.getElementById("card"+cardId);
    
    const order = document.createElement("div");
    order.className = "orders";
    order.id = "order"+orderI;
    order.draggable = "true";

    if(orderInput.value == ""){
        order.innerHTML = "New Order "+orderI;
    } if(orderInput.value != ""){
        order.innerHTML = orderInput.value;
    } 

    order.addEventListener("dragstart", dragStart);
    order.addEventListener("dragend", dragEnd);
    /* orderMove = document.querySelectorAll(".orders"); */
    
    currentCard.append(order);

    /* currentCard.append(document.getElementById("orderInputContainer"+cardId)); */

    orderI++;
    orderInput.value = "";
}

// Creating new cards
function cardGenerator(){
    if(cardI <= 4){
        
        const newCard = document.createElement("div");
        newCard.className = "cards";
        newCard.id = "card"+cardI;
        
        // checking for input, if no user input cardname = new card + cardI
        if(getCardName.value == ""){
            newCard.innerHTML = "New Card "+cardI;
        } if(getCardName.value != ""){
            newCard.innerHTML = getCardName.value;
        } 
        
        // Adding eventlistener for dragging to new cards
        newCard.addEventListener("dragover", dragOver);
        newCard.addEventListener("dragenter", dragEnter);
        newCard.addEventListener("dragleave", dragLeave);
        newCard.addEventListener("drop", dragDrop);
        table.append(newCard);

        // Edit button for cards
        const editCard = document.createElement("span");
        editCard.className = "edit";
        editCard.id = "cardEdit"+cardI;
        editCard.innerHTML = "&#9998;";
        newCard.append(editCard);

        // Order input init
        let orderInputContainer = document.createElement("div");
        orderInputContainer.className = "orderInputContainer";
        orderInputContainer.id = "orderInputContainer"+cardI;
        
        const orderEnter = document.createElement("span");
        orderEnter.className = "enter";
        orderEnter.id = "orderEnter"+cardI;
        orderEnter.innerHTML = "&plus;";
        orderEnter.addEventListener("click",createNewOrder);
        
        const getOrderName = document.createElement("input");
        getOrderName.className = "orderInput";
        getOrderName.id = "orderInput"+cardI;
        getOrderName.placeholder = "Enter new order name....";
        
        orderInputContainer.append(orderEnter);
        orderInputContainer.append(getOrderName);
        newCard.append(orderInputContainer);
        table.append(newCardButton);

        cardI++;

        // max cards
        if(cardI == 5){
            newCardButton.style.display = "none";
        }
    
    } else {
        alert("erroooor");
    }
}

// Dragging
function dragStart(){
    const target = getDiv (event.target);
    orderDrag = target;
    orderDrag.className += " hold";
    setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd(){
    this.className = "orders";
}

function dragOver(e){
    e.preventDefault();
    var target = getDiv (e.target);
    
    if(e.target.className == "orders"){
        var bounding = target.getBoundingClientRect();
        var offset = bounding.y + (bounding.height/2);
    }
    
    if ( e.clientY - offset > 0 && e.target.className !== "cards") {
       	target.style['border-bottom'] = 'solid 2px black';
        target.style['border-top'] = '';
    } else if ( e.clientY - offset < 0 && e.target.className != "cards") {
        target.style['border-top'] = 'solid 2px  black';
        target.style['border-bottom'] = '';
    }
}

function dragEnter(e){
    e.preventDefault();
    this.className += " .hovered";
}

function dragLeave(e){
    this.className = "cards";
    var target = getDiv(e.target);
    target.style['border-bottom'] = '';
    target.style['border-top'] = '';
    
}

function dragDrop(e){
    var target = getDiv( e.target );
    this.className = "cards";

    // check to place order above or below target
    if ( target.style['border-bottom'] !== '' && e.target.className !== "cards") {
        target.style['border-bottom'] = '';
        target.parentNode.insertBefore(orderDrag, event.target.nextSibling);
    } else if ( target.style['border-top'] !== '' && e.target.className !== "cards"){
        target.style['border-top'] = '';
        target.parentNode.insertBefore(orderDrag, event.target);
    } else if ( e.target.className == "cards" || e.target.className == "orderInputContainer"){
        this.append(orderDrag);
    } else {
        alert("stupid");
    }
}

// get targeted div
function getDiv( target ) {
    while ( target.nodeName.toLowerCase() != 'div' && target.nodeName.toLowerCase() != 'body' && target.className.toLowerCase() != "cards" ) {
        target = target.parentNode;
    }
    if ( target.nodeName.toLowerCase() == 'body' ) {
        return false;
    } else {
        return target;
    }
}










var i = 0;

var numberField = document.getElementById("number");
var start = document.getElementById("start");
var userPointsElement = document.getElementById("userPoints");
var pointsEarnedElement = document.getElementById("pointsEarned");
var startDropdown = document.getElementById("startDropdown");
var dropdownDisplay = document.getElementById("dropDown_Score");
var tableContainer = document.getElementById("container");

var userPoints = 0;
var pointsEarned = 200;

startDropdown.addEventListener("click", function(){
    tableContainer.style.filter = "blur(5px)"
    tableContainer.style.transition = "1s";
    dropdownDisplay.style.opacity = "0.8";
    dropdownDisplay.style.transition = "1s";

    setTimeout(function(){ myLoop(); }, 1500);
    setTimeout(function(){ removeDropdown(); }, 5500);

});

function removeDropdown(){
    tableContainer.style.filter = "blur(0px)"
    tableContainer.style.transition = "1s";
    dropdownDisplay.style.opacity = "0.0";
    dropdownDisplay.style.transition = "1s";
}

pointsEarnedElement.innerText = pointsEarned;
userPointsElement.innerText = userPoints;


var i = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
                              //  your code here
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