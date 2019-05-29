
window.onload = function(){
    //document.getElementById('NewCardButton').addEventListener("click", addTaskBarOnClick);
    
    document.getElementById("NewCardButton").addEventListener("click",addTaskBarOnClick);
    
    var movePerc = 19;
    var i = 0;
    
    // keep button on the right side of the new card
    function addNewCardButton(){
        document.getElementById("NewCardButton").style.left = movePerc+"%";
        movePerc = movePerc + 19;
    }
    
    // creating new cards
    function addTaskBarOnClick(){
        if(i<5){
            var newCard = document.createElement("div");
            newCard.className = 'newCard';
            newCard.id = 'newCard'+i;
            if(i != 0){
                newCard.style.left = movePerc - 19 +"%";
            }
            var newCardName = document.createTextNode("newCard");
            newCard.appendChild(newCardName);
            document.getElementById("TeamBox").appendChild(newCard);
            
            i++;
            addNewCardButton();
        } else {
            alert("Max cars reached for current team");
        }
    };

    


}