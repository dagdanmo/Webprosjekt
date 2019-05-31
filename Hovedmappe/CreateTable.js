var createNewTable = document.getElementById("createNewTable");
var plusSign = document.getElementById("plusSign");
var confirmTableName = document.getElementById("confirmTableName");
var inputTableName = document.getElementById("inputTableName");

createNewTable.addEventListener("click", function(){
    createNewTable.style.transitionTimingFunction = "ease-in";
    createNewTable.style.transitionDuration = "0.5s";
    createNewTable.style.top = "200px";
    createNewTable.style.opacity = "1";
    
    inputTableName.style.opacity = "1";
    inputTableName.style.transitionTimingFunction = "ease-in";
    inputTableName.style.transitionDuration = "0.5s";
    inputTableName.style.transitionDelay = "0.4s";

    confirmTableName.style.opacity = "1";
    confirmTableName.style.opacity = "ease-in";
    confirmTableName.style.transitionDuration = "0.5s";
    confirmTableName.style.transitionDelay = "0.4s";

    plusSign.style.opacity = "0";
    plusSign.style.transitionTimingFunction = "ease-in";
    plusSign.style.transitionDuration = "0.5s";
});

        cardId = 0;
    
    confirmTableName.addEventListener("click", function(){

       
        console.log(cardId);
        var newCard = document.createElement("div");
        newCard.className = 'newCard';
        newCard.id = 'newCard' + cardId;
        var newCardName = document.createTextNode(inputTableName.value);
        newCard.appendChild(newCardName);
        document.getElementById("TeamBox").appendChild(newCard);
        cardId++;
        console.log(cardId);
        console.log(newCard.id);


    });
        
