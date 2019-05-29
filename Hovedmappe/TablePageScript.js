
window.onload = function(){
    
    //document.getElementById('NewCardButton').addEventListener("click", addTaskBarOnClick);
    
    
    var newTeamButton = document.createElement("button");
    newTeamButton.innerHTML = "New Team";
    newTeamButton.type = "button";
    newTeamButton.className = "buttons";
    newTeamButton.id = "NewTeamButton";
    document.getElementById("MainBox").appendChild(newTeamButton);
    document.getElementById("NewTeamButton").addEventListener("click",addNewTeamOnClick);

    var movePerc = 19;
    var teamI = 0;
    var boxI = 0;


/*     // keep button on the right side of the new card
    function addNewCardButton(){
        document.getElementById("NewCardButton"+ID).style.left = movePerc+"%";
        movePerc = movePerc + 19;
    } */

    // creating new teams
    function addNewTeamOnClick(){
        var newTeam = document.createElement("div");
        newTeam.className = "TeamBoxContainer";
        newTeam.id = "TeamBox"+teamI;

        //var newTeamName = document.createTextNode("New Team " + teamI);
        var newTeamName = document.createElement("p");
        newTeamName.innerHTML = "New Team " + teamI;
        newTeamName.className = "NewTeamName";
        newTeam.appendChild(newTeamName);
        document.getElementById("MainBox").appendChild(newTeam);

        var newBoxButton = document.createElement("button");
        newBoxButton.innerHTML = "New Card";
        newBoxButton.className = "buttons";
        newBoxButton.id = "NewCardButton"+teamI;
        newBoxButton.addEventListener("click",addTaskBarOnClick);
        newTeam.appendChild(newBoxButton);

        teamI++;
    }
    
    // creating new cards
    function addTaskBarOnClick(){
        var buttonID = event.target.id;
        var ID = buttonID[buttonID.length -1];
        console.log(this);
        console.log(buttonID);
        console.log(ID);
        //if(boxI<5){
            var newCard = document.createElement("div");
            newCard.className = 'NewCard';
            newCard.id = 'NewCard'+boxI;
            if(boxI != 0){
                newCard.style.left = movePerc - 19 +"%";
            }
            //var newCardName = document.createTextNode("New Card " + boxI);
            var newCardName = document.createElement("p");
            newCardName.innerHTML = "New Card "+ID;
            newCardName.className = "NewCardName";
            newCard.appendChild(newCardName);
            document.getElementById("TeamBox"+ID).appendChild(newCard);
            
            //boxI++;

        //} else {
         //   alert("Max cards reached for current team");
       // }
    };

    


}