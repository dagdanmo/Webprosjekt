// Declaring variables to reference the HTMl elements.
var homeSign = document.getElementById("homeImgDiv");
var txtMiddle = document.getElementById("txtMiddle");
var profileSign = document.getElementById("profileImgDiv");


// Click functions to the header elements to go into the other sites
homeSign.addEventListener("click", function(){

    setTimeout(function () {
        window.location.href = "CreateTable.html"; //will redirect to your blog page (an ex: blog.html)
     }, 1000);
});
txtMiddle.addEventListener("click", function(){

    setTimeout(function () {
        window.location.href = "CreateTable.html"; //will redirect to your blog page (an ex: blog.html)
     }, 1000);
});


// init
    // Date
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();

    if(month.toString().length == 1){
        month = '0'+month;
    }
    if(day.toString().length == 1){
        day = '0'+day;
    }
    if(hour.toString().length == 1){
        hour = '0'+hour;
    }
    if(minute.toString().length == 1){
        minute = '0'+minute;
    }

    let fullDate = year+'-'+month+'-'+day+'T'+hour+':'+minute;

    // Idenfication array for card creation, assigning a unique ID between 0-4 to all cards.
    let cardI = [0, 1, 2, 3, 4];
    // Counting cards for star function
    let cardCounter = 0;

    // assigning ID to orders
    let orderI = 0;
    let orderId;
    let orderDrag;
    let cardId;
    let currentStarCard;
    let getParentID;
    
    // scores
    let orderScore = 0;
    let userPoints = 0;
    let pointsEarned = 0;

// main container
const table = document.getElementById("container");
const body = document.body;

// newCardButton
const newCardButton = document.getElementById("newCardButtonContainer");
newCardButton.addEventListener("click", newCardPopUp);
const newCardPopContainer = document.getElementById("newCardPopContainer");
const popClose = document.getElementsByClassName("close")[0];
popClose.addEventListener("click", popDown);
const getCardName = document.getElementById("getCardName");
getCardName.maxLength = "14";
getCardName.addEventListener("keyup", function(){
    if(event.keyCode == 13){
        cardGenerator();
        popDown();
    }
});
const popCardEnter = document.getElementById("cardEnter");
popCardEnter.addEventListener("click", createNewCard);

// open popup window for new card
function newCardPopUp(){
    newCardPopContainer.style.display = "block";
    getCardName.focus();
    getCardName.value = "";
    tableContainer.style.filter = "blur(0px)";
}

function createNewCard(){
    cardGenerator();
    popDown();
}

function popDown(){
    newCardPopContainer.style.display = "none";
}

// Creating new cards
function cardGenerator(){
    
    if(cardI.length != 0){
        // pulling out card ID from array
        const tempId = cardI[0];
        cardI.shift();

        const newCard = document.createElement("div");
        newCard.className = "cards";
        newCard.id = "card"+tempId;
        
        const newCardName = document.createElement("p");
        newCardName.className = "newCardName";
        newCardName.id = "newCardName"+tempId;
        newCardName.style.pointerEvents = "none";
        newCard.append(newCardName);
        
        // checking for input, if no user input cardname = new card + cardI
        if(getCardName.value == ""){
            newCardName.innerHTML = "NEW CARD "+tempId;
        } if(getCardName.value != ""){
            newCardName.innerHTML = getCardName.value.toUpperCase();
        } 
        
        // Adding eventlistener for dragging to new cards
        newCard.addEventListener("dragover", dragOver);
        newCard.addEventListener("dragenter", dragEnter);
        newCard.addEventListener("dragleave", dragLeave);
        newCard.addEventListener("drop", dragDrop);
        table.append(newCard);
        
        // Star
        const cardStar = document.createElement("span");
        cardStar.className = "stars";
        cardStar.id = "star"+tempId;
        cardStar.innerHTML = "&star;";
        newCard.append(cardStar);
        cardStar.addEventListener("click", setStarCard);

        // Edit button for cards
        const editCard = document.createElement("span");
        editCard.className = "edit";
        editCard.id = "cardEdit"+tempId;
        editCard.innerHTML = "&#9998;";
        editCard.addEventListener("click", editCardPop);
        newCard.append(editCard);
        
        // Order input init
        let orderInputContainer = document.createElement("div");
        orderInputContainer.className = "orderInputContainer";
        orderInputContainer.id = "orderInputContainer"+tempId;
        
        const orderEnter = document.createElement("span");
        orderEnter.className = "enter";
        orderEnter.id = "orderEnter"+tempId;
        orderEnter.innerHTML = "&plus;";
        orderEnter.addEventListener("click",function(){
            createNewOrder();
            getOrderName.value = "";
        });
        
        const getOrderName = document.createElement("input");
        getOrderName.className = "orderInput";
        getOrderName.id = "orderInput"+tempId;
        getOrderName.placeholder = "Enter new order name....";
        getOrderName.maxLength = "14";
        getOrderName.addEventListener("keyup", function(){
            if(event.keyCode == 13){
                createNewOrder();
                getOrderName.value = "";
            }
        });
        
        orderInputContainer.append(orderEnter);
        orderInputContainer.append(getOrderName);
        newCard.append(orderInputContainer);
        table.append(newCardButton);
        
        // max cards
        if(cardI.length == 0){
            newCardButton.style.display = "none";
        }
        
        cardCounter++;
    } else {
        alert("erroooor");
    }
}

// set starcard
function setStarCard(e){
    cardId = e.target.id.substr(e.target.id.length -1);
    const currentStar = document.getElementById("star"+cardId);
    for(var i = 0; i<cardCounter; i++){
        if(i == cardId){
            currentStar.innerHTML = "&starf;";
            currentStar.style.color = "#FFCC00";
            currentStarCard = cardId;
            console.log(currentStarCard);
        } else {
            document.getElementById("star"+i).innerHTML = "&star;";
            document.getElementById("star"+i).style.color ="#000";
        }
    }

}

// card edit popupwindow
function editCardPop(e){
    
    cardId = e.target.id.substr(e.target.id.length -1);
    const currentCard = document.getElementById("card"+cardId);
    
    const editPop = document.createElement("div");
    editPop.className = "editPopContainer";
    editPop.id = "editPopContainer";
    editPop.style.display = "block";
    
    const editWindow = document.createElement("div");
    editWindow.className = "editPop";
    
    const editCardName = document.createElement("p");
    editCardName.className = "editName";
    editCardName.innerHTML = document.getElementById("newCardName"+cardId).innerHTML;
    
    const editEnter = document.createElement("span");
    editEnter.className = "enter";
    editEnter.id = "editEnter";
    editEnter.innerHTML = "&plus;";
    editEnter.addEventListener("click", editCardPopEnter);
    
    const editClose = document.createElement("span");
    editClose.className = "close";
    editClose.id = "editClose";
    editClose.innerHTML = "&times;";
    editClose.addEventListener("click", editpopDown);
    
    const editName = document.createElement("input");
    editName.className = "editInput";
    editName.id = "editName";
    editName.placeholder = "Enter new cardname";
    editName.maxLength = "14";
    editName.addEventListener("keyup", function(){
        if(event.keyCode == 13){
            editCardPopEnter();
        }
    });

    const deleteCardContainer = document.createElement("div");
    deleteCardContainer.className = "editInput";
    deleteCardContainer.id = "deleteCardContainer";

    const deleteIcon = document.createElement("span");
    deleteIcon.id = "deleteIcon";
    deleteIcon.innerHTML = "&#9760;";
    deleteIcon.addEventListener("click", deleteCardF);
    const deleteCard = document.createElement("input");
    deleteCard.className = "editInput";
    deleteCard.id = "deleteCard";
    deleteCard.maxLength = "10";
    deleteCard.placeholder = "Enter 'DELETE' to confirm";
    deleteCard.addEventListener("keyup", function(){
        if(event.keyCode == 13){
            deleteCardF();
        }
    });
    
    
    deleteCardContainer.append(deleteIcon);
    deleteCardContainer.append(deleteCard);

    editWindow.append(editClose);
    editWindow.append(editEnter);
    editWindow.append(editCardName);
    editWindow.append(editName);
    editWindow.append(deleteCardContainer);
    
    editPop.append(editWindow);
    body.append(editPop);
    
    console.log(currentCard);
}

// delete card
function deleteCardF(){
    // get input and check for 'DELETE' to confirm and activate button.
    const deleteCardInput = document.getElementById("deleteCard");
    if(deleteCardInput.value == "DELETE"){
        if(cardId == currentStarCard){
            currentStarCard == "";
        }
        table.removeChild(document.getElementById("card"+cardId));
        // put back card ID to card i array and open up for new cards
        cardI.push(cardId);
        newCardButton.style.display = "flex";
        document.getElementById("editPopContainer");
        editpopDown();
        cardCounter--;
    }
}

// save edit card pop
function editCardPopEnter(){
    if(document.getElementById("editName").value != ""){
        document.getElementById("newCardName"+cardId).innerHTML = document.getElementById("editName").value.toUpperCase();
    }
    body.removeChild(document.getElementById("editPopContainer"));
}

// close edit pop
function editpopDown(){
    body.removeChild(document.getElementById("editPopContainer"));
}

// Creating new order
function createNewOrder(){
    
    //SCORE TESTING
    /* orderScore = prompt("enter score"); */

    cardId = event.target.id.substr(event.target.id.length -1);
    const orderInput = document.getElementById("orderInput"+cardId);
    const currentCard = document.getElementById("card"+cardId);
    
    const order = document.createElement("div");
    order.className = "orders";
    order.id = "order"+orderI;
    order.draggable = "true";

    const orderName = document.createElement("div");
    orderName.className = "orderName";
    orderName.id = "orderName"+orderI;
    orderName.style.pointerEvents = "none";   
    
    /* const orderScoreWeight = document.createElement("p");
    orderScoreWeight.className = "orderScore";
    orderScoreWeight.id = "orderScore"+orderI;
    orderScoreWeight.style.pointerEvents = "none";
    orderScoreWeight.innerHTML = "POINTS: " +orderScore; */
    
    if(orderInput.value == ""){
        orderName.innerHTML = "NEW ORDER "+orderI;
    } else if(orderInput.value != ""){
        orderName.innerHTML = orderInput.value.toUpperCase();
    }
    
    // Edit button for cards
    const editOrder = document.createElement("span");
    editOrder.className = "orderEdit";
    editOrder.id = "orderEdit"+orderI;
    editOrder.innerHTML = "&#9998;";
    editOrder.addEventListener("click", editOrderPop);
    
    order.append(editOrder);
    
    order.addEventListener("dragstart", dragStart);
    order.addEventListener("dragend", dragEnd);
    
    order.append(orderName);
    /* order.append(orderScoreWeight); */
    currentCard.append(order);

    orderI++;
    orderInput.value = "";
}

// Order Edit pop
function editOrderPop(e){
    getOrderId = e.target.id.substr(9);
    getParentID = document.getElementById("order"+getOrderId).parentNode.id.substr(4);
    
    const editPop = document.createElement("div");
    editPop.className = "editPopContainer";
    editPop.id = "editPopContainer";
    editPop.style.display = "block";
    
    const editWindow = document.createElement("div");
    editWindow.className = "editPop";

    const editOrderName = document.createElement("p");
    editOrderName.className = "editName";
    editOrderName.innerHTML = document.getElementById("orderName"+getOrderId).innerHTML;

    const editEnter = document.createElement("span");
    editEnter.className = "enter";
    editEnter.id = "editEnter";
    editEnter.innerHTML = "&plus;";
    editEnter.addEventListener("click", editOrderPopEnter);
    
    const editClose = document.createElement("span");
    editClose.className = "close";
    editClose.id = "editClose";
    editClose.innerHTML = "&times;";
    editClose.addEventListener("click", editpopDown);
    
    // Name
    const editName = document.createElement("input");
    editName.className = "editInput";
    editName.id = "editName";
    editName.placeholder = "Enter new ordername";
    editName.maxLength = "14";
    editName.addEventListener("keyup", function(){
        if(event.keyCode == 13){
            editOrderPopEnter();
        }
    });
    
    // Description
    const orderDescriptionHeader = document.createElement("p");
    orderDescriptionHeader.className = "editHeaders";
    orderDescriptionHeader.id = "orderDescriptionHeader";
    orderDescriptionHeader.innerHTML = "DESCRIPTION";

    const orderDescription = document.createElement("textarea");
    orderDescription.className = "orderDescription";
    orderDescription.id = "orderDescription"+getOrderId;
    orderDescription.placeholder = "Enter a description";
    orderDescription.style.resize = "none";
    if(document.getElementById("orderDescriptionSave"+getOrderId) != null){
        orderDescription.value = document.getElementById("orderDescriptionSave"+getOrderId).value;
    }

    // Score
    const orderScoreInput = document.createElement("input")
    orderScoreInput.className = "editInput";
    orderScoreInput.id = "orderScoreInput";
    orderScoreInput.maxLength = "2";
    orderScoreInput.placeholder = "score";
    orderScoreInput.value = 0;
    if(document.getElementById("orderScore"+getOrderId) != null){
        if(document.getElementById("orderScore"+getOrderId).innerHTML == "DONE"){
            orderScoreInput.value = "DONE";
        } else {
            orderScoreInput.value = document.getElementById("orderScore"+getOrderId).innerHTML.substr(8);
        }
    } 
    orderScoreInput.addEventListener("keyup", function(){
        if(event.keyCode == 13){
            editOrderPopEnter();
        }
    });
    const orderScoreInfo = document.createElement("p");
    orderScoreInfo.className = "orderScoreInfo";
    orderScoreInfo.innerHTML = "Type in score earned when completing task";

    // dato
    const deadLineHeader = document.createElement("p");
    deadLineHeader.className = "editHeaders";
    deadLineHeader.id = "deadLineHeader";
    deadLineHeader.innerHTML = "DEADLINE";

    const deadLine = document.createElement("input");
    deadLine.className = "editinput";
    deadLine.id = "deadLine";
    deadLine.type = "datetime-local";
    deadLine.value = fullDate;

    // delete
    const deleteOrderContainer = document.createElement("div");
    deleteOrderContainer.className = "editInput";
    deleteOrderContainer.id = "deleteOrderContainer";

    const deleteIcon = document.createElement("span");
    deleteIcon.id = "deleteIcon";
    deleteIcon.innerHTML = "&#9760;";
    deleteIcon.addEventListener("click", deleteOrderF);
    
    const deleteOrder = document.createElement("input");
    deleteOrder.className = "editInput";
    deleteOrder.id = "deleteOrder";
    deleteOrder.placeholder = "Enter 'DELETE' to confirm";
    deleteOrder.maxLength = "10";
    deleteOrder.addEventListener("keyup", function(){
        if(event.keyCode == 13){
            deleteOrderF();
        }
    });

    
    
    deleteOrderContainer.append(deleteIcon);
    deleteOrderContainer.append(deleteOrder);

    editWindow.append(editClose);
    editWindow.append(editEnter);
    editWindow.append(editOrderName);
    editWindow.append(editName);
    editWindow.append(orderDescriptionHeader);
    editWindow.append(orderDescription);
    editWindow.append(orderScoreInput);
    editWindow.append(orderScoreInfo);
    editWindow.append(deadLineHeader);
    editWindow.append(deadLine);
    editWindow.append(deleteOrderContainer);
    
    editPop.append(editWindow);
    body.append(editPop);
}

// save edit order pop
function editOrderPopEnter(){
    const currentOrder = document.getElementById("order"+getOrderId);
    if(document.getElementById("editName").value != ""){
        document.getElementById("orderName"+getOrderId).innerHTML = document.getElementById("editName").value.toUpperCase();
    }
    if(document.getElementById("orderScoreInput").value != ""){
        if(document.getElementById("orderScore"+getOrderId) !== null){
            currentOrder.removeChild(document.getElementById("orderScore"+getOrderId));
        }
        if(document.getElementById("orderScoreInput").value != "" && document.getElementById("orderScore"+getOrderId) == null){
            const orderScoreWeight = document.createElement("p");
            orderScoreWeight.className = "orderScore";
            orderScoreWeight.id = "orderScore"+getOrderId;
            orderScoreWeight.style.pointerEvents = "none";
            orderScoreWeight.innerHTML = "POINTS: " +orderScoreInput.value;
            currentOrder.append(orderScoreWeight);
        } else if (document.getElementById("orderScore"+getOrderId) != null){
            if(document.getElementById("orderScoreInput").value != document.getElementById("orderScore"+getOrderId).value){
                document.getElementById("orderScore".getOrderId).value = document.getElementById("orderScoreInput").value;
            }
        }
    }
    if(document.getElementById("deadLine").value != fullDate && document.getElementById("deadLine").value != document.getElementById("orderDeadLine"+getOrderId.value)){
        if(document.getElementById("orderDeadLine"+getOrderId) != null){
            currentOrder.removeChild(document.getElementById("orderDeadLine"+getOrderId));
        }
        const orderDeadLine = document.createElement("p");
        orderDeadLine.className = "orderDeadLine";
        orderDeadLine.id = "orderDeadLine"+getOrderId;
        orderDeadLine.style.pointerEvents = "none";
        orderDeadLine.innerHTML = "Deadline: "+document.getElementById("deadLine").value.substr(0, 10)+"    "+document.getElementById("deadLine").value.substr(11);
        currentOrder.append(orderDeadLine);
    }
    if(document.getElementById("orderDescription"+getOrderId).value != "" && document.getElementById("orderDescriptionSave"+getOrderId) == null){
        const orderDescriptionSave = document.createElement("textArea");
        orderDescriptionSave.className = "orderDescriptionSave";
        orderDescriptionSave.id = "orderDescriptionSave"+getOrderId;
        orderDescriptionSave.style.display = "none";
        orderDescriptionSave.value = document.getElementById("orderDescription"+getOrderId).value;
        currentOrder.append(orderDescriptionSave);
    } else if (document.getElementById("orderDescriptionSave"+getOrderId) != null){
        if(document.getElementById("orderDescription"+getOrderId).value != document.getElementById("orderDescriptionSave"+getOrderId).value){
            document.getElementById("orderDescriptionSave"+getOrderId).value = document.getElementById("orderDescription"+getOrderId).value;
        }
    }
    body.removeChild(document.getElementById("editPopContainer"));
}

// delete card
function deleteOrderF(){
    // get input and check for 'DELETE' to confirm and activate button.
    const deleteOrderInput = document.getElementById("deleteOrder");
    if(deleteOrderInput.value == "DELETE"){
        document.getElementById("card"+getParentID).removeChild(document.getElementById("order"+getOrderId));
        // put back card ID to card i array and open up for new cards
        editpopDown();
    }
}

// Dragging
function dragStart(e){
    const target = getDiv (e.target);
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
    
    let star = 0;
    // check to place order above or below target
    if ( target.style['border-bottom'] !== '' && e.target.className !== "cards") {
        target.style['border-bottom'] = '';
        target.parentNode.insertBefore(orderDrag, e.target.nextSibling);
    } else if ( target.style['border-top'] !== '' && e.target.className !== "cards"){
        target.style['border-top'] = '';
        target.parentNode.insertBefore(orderDrag, e.target);
    } else if (e.target.className == "cards" ||  e.target.parentNode.className == "orderInputContainer" || e.target.className == "edit" || e.target.className == "orderEdit" || e.target.className == "stars"){
        this.append(orderDrag);
    } else {
        alert("stupid");
    }

    // starcardcheck
    if ( e.target.className == "cards"){
        star = e.target.id.substr(e.target.id.length -1);
    } else if ( e.target.className != "cards"){
        star = e.target.parentNode.id.substr(e.target.parentNode.id.length -1);
    }

    if(currentStarCard == star){

        cardId = event.target.id.substr(event.target.id.length -1);

        getOrderId = orderDrag.id.substr(5);
        const getScoreId = document.getElementById("orderScore"+getOrderId);
        if(getScoreId != null){
            const getScore = getScoreId.innerHTML.substr(7);
            pointsEarned = getScore;
            pointsEarnedElement.innerText = pointsEarned;
            userPointsElement.innerText = userPoints;

            if(getScoreId.innerHTML != "DONE"){
                scorePop();
            }
            getScoreId.innerHTML = "DONE";
        }
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
var dropdownDisplay = document.getElementById("dropDown_Score");
var tableContainer = document.getElementById("container");

function scorePop(){
    if(pointsEarned > 10){
        pointsEarnedElement.style.left = "140px";
    }else if(pointsEarned < 10){
        pointsEarnedElement.style.left = "170px";
    }
    setTimeout(function(){ dropdownDisplayBlock(); }, 20);
    setTimeout(function(){ dropdownTransitions(); }, 200);
    setTimeout(function(){ delayedCounter(); }, 1500);
    setTimeout(function(){ removeDropdown(); }, 5000);
    setTimeout(function(){ dropdownDisplayNone();}, 6000);
}

function dropdownTransitions(){
    tableContainer.style.filter = "blur(5px)"
    tableContainer.style.transition = "1s";
    dropdownDisplay.style.opacity = "0.8";
    dropdownDisplay.style.transition = "1s";
};

function removeDropdown(){
    tableContainer.style.filter = "blur(0px)"
    tableContainer.style.transition = "1s";
    dropdownDisplay.style.opacity = "0.0";
    dropdownDisplay.style.transition = "1s";
}

function dropdownDisplayBlock(){
    dropdownDisplay.style.display = "block";
}

function dropdownDisplayNone(){
    dropdownDisplay.style.display = "none";
}




var i = 1;                                  //  set your counter to 1

function delayedCounter () {                     //  create a loop function
   setTimeout(function () {              //  call a 3s setTimeout when the loop is called
                                         //  your code here
                                         //  increment the counter
      if (pointsEarned > 0) {            //  if the counter < 10, call the loop function
        delayedCounter();
        userPoints += 1;
        pointsEarned -= 1;
        pointsEarnedElement.innerText = pointsEarned;
        userPointsElement.innerText = userPoints;
           
        if(userPoints >= 100){
            userPointsElement.style.left = "100px";
        }else if(userPoints > 10){
            userPointsElement.style.left = "140px";
        }
        
        if(pointsEarned > 10){
            pointsEarnedElement.style.left = "140px";
        }else if(pointsEarned < 10){
            pointsEarnedElement.style.left = "170px";
        }
        
        //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, 10)
}

console.log(localStorage);

/* start.addEventListener("click", function(){
    myLoop();
});   */

/* /------------ Dark mode section ------------/ */

var checkbox = document.getElementById("checkDarkMode"); // checkbox
var txtMiddle = document.getElementById("txtMiddle"); // "TASK IT" text color (color)
var container = document.getElementById("container"); // Main container color
var txtAddCard = document.getElementById("txtAddCard"); // Add card text color
var dropDownContent = document.getElementById("dropdown-content");


var settings = document.getElementById("settings");
var settingsBox = document.getElementById("settingsBox");
var checkBoxBtn = document.getElementById("checkBoxBtn");

checkbox.addEventListener('change', function(e){
    console.log(checkbox.checked, checkbox.value);
    if(checkbox.checked){
        console.log("huket av");
        dropDownContent.style.backgroundColor = "#AAAAAA";
        header.style.background = "#141414";
        txtMiddle.style.color = "#03acef";
        container.style.background = "#333333"
        document.body.style.background = "#333333";
        txtAddCard.style.color = "#03acef";
        document.getElementById("newCardButton").style.color = "#03acef";
        taskitBlack.style.display = "none";
        taskitBlue.style.display = "block";


            //const card = document.getElementById("card"+i);
            // ADD CHANGES BLABLA
            /*
            var card = document.querySelectorAll(".cards"), i;
            for(i = 0; i < card.length; ++i){
                card[i].style.backgroundColor = "#03acef";
            }  */


    } else {
        console.log("Ikke huket av");
        dropDownContent.style.backgroundColor = "white";
        header.style.background = "#03acef";
        txtMiddle.style.color = "black";
        container.style.backgroundColor = "#CCF3FF";
        document.body.style.background = "#CCF3FF";
        txtAddCard.style.color = "black";
        document.getElementById("newCardButton").style.color = "AAAAAA";
        taskitBlack.style.display = "block";
        taskitBlue.style.display = "none";

        document.getElementById("newCardButton").addEventListener("mouseover", mouseOver);
        document.getElementById("newCardButton").addEventListener("mouseout", mouseOut);
        function mouseOver() {
            document.getElementById("newCardButton").style.color = "#33CC00";
        }
        function mouseOut() {
            document.getElementById("newCardButton").style.color = "#AAAAAA";
        }
    }
});

/* Makes the settings box appear */
settings.addEventListener("click", function(){
    setTimeout(function(){ showSettingsBox(); }, 20);
    console.log("Settings clicked");
    settingsBox.style.top = "80%";
    settingsBox.style.left = "39%";
    settingsBox.style.transitionTimingFunction = "ease-in";
    settingsBox.style.transitionDuration = "0.5s";
    settingsBox.style.transitionDelay = "0s";
    settingsBox.style.opacity = "1";
})
checkBoxBtn.addEventListener("click", function(){
    console.log("close button clicked");
    settingsBox.style.top = "80%";
    settingsBox.style.left = "39%";
    settingsBox.style.transitionTimingFunction = "ease-in";
    settingsBox.style.transitionDuration = "0.5s";
    settingsBox.style.transitionDelay = "0s";
    settingsBox.style.opacity = "0";
    
    setTimeout(function(){ hideSettinsBox(); }, 2000);
});
function showSettingsBox(){
    settingsBox.style.display = "block";
}

function hideSettinsBox(){
    settingsBox.style.display = "none";
}

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

console.log(users[1].username);