
window.onload = function(){
    
    //document.getElementById('NewCardButton').addEventListener("click", addTaskBarOnClick);
    
    // first create team button.
    var newTeamButton = document.createElement("button");
    newTeamButton.innerHTML = "New Team";
    newTeamButton.type = "button";
    newTeamButton.className = "buttons";
    newTeamButton.id = "NewTeamButton";
    document.getElementById("MainBox").appendChild(newTeamButton);
    document.getElementById("NewTeamButton").addEventListener("click",addNewTeamOnClick);

    // init
    var teamI = 0;
    var boxI = 0;

    // creating new teams
    function addNewTeamOnClick(){
        
        //Creating a new teambox
        var newTeam = document.createElement("div");
        newTeam.className = "TeamBoxContainer";
        newTeam.id = "TeamBox"+teamI;
        
        //Name of the new team
        var newTeamName = document.createElement("p");
        newTeamName.innerHTML = "New Team " + teamI;
        newTeamName.className = "NewTeamName";
        newTeam.appendChild(newTeamName);
        document.getElementById("MainBox").appendChild(newTeam);
        
        //New cardbox button added to the teambox
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
        
        // getting the ID from the button pressed (the buttons are called ex. NewCardButton2 pointing to team2)
        var buttonID = event.target.id;
        var ID = buttonID[buttonID.length -1];
        console.log(this);
        console.log(buttonID);
        console.log(ID);

        // creating a new card
        var newCard = document.createElement("div");
        newCard.className = 'NewCard';
        newCard.id = 'NewCard'+boxI;

        // name of the card
        var newCardName = document.createElement("p");
        newCardName.innerHTML = "New Card "+ID;
        newCardName.className = "NewCardName";
        newCard.appendChild(newCardName);
        document.getElementById("TeamBox"+ID).appendChild(newCard);

    };

    


}