window.onload = function(){



    


    //document.getElementById('NewCardButton').addEventListener("click", addTaskBarOnClick);
    
    // first create team button.
    /* var newTeamButton = document.createElement("button");
    newTeamButton.innerHTML = "New Team";
    newTeamButton.type = "button";
    newTeamButton.className = "buttons";
    newTeamButton.id = "NewTeamButton";
    document.getElementById("MainBox").appendChild(newTeamButton); */
    var teamName = document.getElementById("teamName");
    var newTeamButton = document.getElementById("newTeamButton");
    var confirmTeamName = document.getElementById("confirmTeamName")
    confirmTeamName.addEventListener("click",addNewTeamOnClick);
    var createTeamText = document.getElementById("createTeamText");
    

    newTeamButton.addEventListener("click", function(){
        newTeamButton.style.opacity = "1";
        newTeamButton.style.transitionDuration = "1s";
        createTeamText.style.opacity = "0";
        createTeamText.style.transitionDuration = "1s";
        teamName.style.opacity = "1";
        teamName.style.transitionDuration = "1s";
        confirmTeamName.style.opacity = "1";
        confirmTeamName.style.transition = "1s";
        
    
    });


    // init
    var teamI = 0;
    var boxI = 0;

    // creating new teams
    function addNewTeamOnClick(){
        
        //Creating a new teambox
        var newTeam = document.createElement("div");
        newTeam.className = "TeamBoxContainer";
        newTeam.id = "TeamBox"+teamI;
        console.log(teamName.value);
        
        //Name of the new team
        var newTeamName = document.createElement("p");
        newTeamName.innerHTML = teamName.value;
        newTeamName.className = "NewTeamName";
        newTeamName.id = "TeamName"+teamI;
        newTeam.appendChild(newTeamName);
        document.getElementById("MainBox").appendChild(newTeam);

 
        //New cardbox button added to the teambox
        var newBoxButton = document.createElement("button");
        newBoxButton.innerHTML = "New Card";
        newBoxButton.className = "buttons";
        newBoxButton.id = "NewCardButton"+teamI;
        newBoxButton.addEventListener("click",addTaskBarOnClick);
        newTeam.appendChild(newBoxButton);

        // Change name of team
        var changeTeamNameButton = document.createElement("button");
        changeTeamNameButton.innerHTML = "Change team name";
        changeTeamNameButton.className = "buttons";
        changeTeamNameButton.id = "ChangeTeamNameButton"+teamI;
        changeTeamNameButton.addEventListener("click",changeTeamName);
        newTeamName.appendChild(changeTeamNameButton);

        teamI++;

            // IN PROGRESS
        function changeTeamName(){
        var newValue = prompt("Enter a new name for the card: ");
        console.log(newValue);
        document.getElementById(newTeamName.id);
        newTeamName.innerHTML = newValue;
        }
    
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
        newCard.id = 'NewCard' + boxI;
        boxI++;

        // name of the card
        var newCardName = document.createElement("p");

        //NAME - Placeholder
        newCardName.innerHTML = "New Card " + boxI;
        newCardName.className = "NewCardName";
        newCard.appendChild(newCardName);
        document.getElementById("TeamBox"+ID).appendChild(newCard);
        }



    };