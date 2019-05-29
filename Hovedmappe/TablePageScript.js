
window.onload = function(){
    //document.getElementById('NewCardButton').addEventListener("click", addTaskBarOnClick);
    
    document.getElementById("NewCardButton").addEventListener("click",addTaskBarOnClick);
    document.getElementById("NewTeamButton").addEventListener("click",addNewTeamOnClick);


    var movePerc = 19;
    var teamI = 0;
    var boxI = 0;
    
    // keep button on the right side of the new card
    function addNewCardButton(){
        document.getElementById("NewCardButton").style.left = movePerc+"%";
        movePerc = movePerc + 19;
    }

    // creating new teams
    function addNewTeamOnClick(){
        var newTeam = document.createElement("div");
        newTeam.className = "TeamBoxContainer";
        newTeam.id = "TeamBox"+teamI;

        var newTeamName = document.createTextNode("New Team " + teamI);
        newTeam.appendChild(newTeamName);
        document.getElementById("MainBox").appendChild(newTeam);

        teamI++;
    }
    
    // creating new cards
    function addTaskBarOnClick(){
        if(boxI<5){
            var newCard = document.createElement("div");
            newCard.className = 'newCard';
            newCard.id = 'newCard'+boxI;
            if(boxI != 0){
                newCard.style.left = movePerc - 19 +"%";
            }
            var newCardName = document.createTextNode("New Card " + boxI);
            newCard.appendChild(newCardName);
            document.getElementById("TeamBox").appendChild(newCard);
            
            boxI++;
            addNewCardButton();
        } else {
            alert("Max cards reached for current team");
        }
    };

    


}