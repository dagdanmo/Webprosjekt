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
    var teamIterator = 0;
    var boxIterator = 0;

    var teamArray=[];

    // creating new teams
    function addNewTeamOnClick(){
        
        //var teamName = prompt("Enter teamname");
        //Creating a new teambox
        var newTeam = document.createElement("div");
        newTeam.className = "teamBoxContainer";
        newTeam.id = "newTeam"+teamIterator;
        //teamArray.push({teamIterator, boxIterator});
        
        //Name of the new team
        var newTeamName = document.createElement("p");
        newTeamName.innerHTML = teamName.value;
        newTeamName.className = "teamName";
        newTeamName.id = "teamBox"+teamIterator;
        newTeam.appendChild(newTeamName);
        document.getElementById("MainBox").appendChild(newTeam);

 
        //New cardbox button added to the teambox
        var newCardButton = document.createElement("button");
        newCardButton.innerHTML = "[ + ]";
        newCardButton.className = "newCardButton";
        newCardButton.id = "newCardButton"+teamIterator;
        newCardButton.addEventListener("click",addTaskBarOnClick);
        newTeam.appendChild(newCardButton);
        
        console.log(newTeamName.id);
        console.log(teamArray);
        
        teamIterator++;
 
        // Change name of team
        var changeTeamNameButton = document.createElement("button");
        changeTeamNameButton.innerHTML = "Change team name";
        changeTeamNameButton.className = "buttons";
        changeTeamNameButton.id = "ChangeTeamNameButton" + teamIterator;
        changeTeamNameButton.addEventListener("click",changeTeamName);
        newTeamName.appendChild(changeTeamNameButton);


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
        var getButton = event.target.id;
        var getButtonId = getButton[getButton.length -1];
       
        teamArray.push({getButtonId, boxIterator});

        // creating a new card
        var newCard = document.createElement("div");
        newCard.className = "newCard";
        newCard.id = "newCard" + getButtonId + teamArray[boxIterator].boxIterator;

        // name of the card
        var newCardName = document.createElement("p");
        newCardName.innerHTML = "New Card " + getButtonId + teamArray[boxIterator].boxIterator;
        newCardName.className = "newCardName";
        newCard.appendChild(newCardName);

        // new workorder
        var newWork = document.createElement("button");
        newWork.className = "newWork";
        newWork.id = "newWorkButton" + getButtonId + teamArray[boxIterator].boxIterator;
        newCard.appendChild(newWork);
        document.getElementById("newTeam"+getButtonId).appendChild(newCard);
        newWork.addEventListener("click",test);
    
        boxIterator++;
        newCard.draggable = true;
    }

    function test(){
        console.log(this);
        var getCard = event.target.id;
        var newWorkOrderName = prompt("workordername");
        var newWorkOrder = document.createElement("div");
        newWorkOrder.innerHTML = newWorkOrderName;
        newWorkOrder.className = "newWorkOrder";
        newWorkOrder.id = "newWorkOrder" + getCard[getCard.length -2] + getCard[getCard.length -1];
        document.getElementById("newCard" + getCard[getCard.length -2] + getCard[getCard.length -1]).appendChild(newWorkOrder);


    }
};