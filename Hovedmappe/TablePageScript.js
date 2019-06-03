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
    var colors = document.getElementsByClassName("color");
    var colorRed = document.getElementById("red");
    var colorBlue = document.getElementById("blue");
    var colorOrange = document.getElementById("orange");
    var colorPurple = document.getElementById("purple");
    var colorGreen = document.getElementById("green");

    newTeamButton.addEventListener("click", function(){
        newTeamButton.style.opacity = "1";
        newTeamButton.style.transitionDuration = "0.5s";
        newTeamButton.style.transitionTimingFunction = "ease-in-ease-out";
        
        createTeamText.style.opacity = "0";
        createTeamText.style.transitionDuration = "0.5s";
        createTeamText.style.transitionTimingFunction = "ease-in-ease-out";
        
        teamName.style.opacity = "1";
        teamName.style.transitionTimingFunction = "ease-in-ease-out";
        teamName.style.transitionDuration = "0.5s";
        teamName.style.transitionDelay = "0.4s";

        confirmTeamName.style.opacity = "1";
        confirmTeamName.style.transitionTimingFunction = "ease-in-ease-out";
        confirmTeamName.style.transition = "0.5s";
        confirmTeamName.style.transitionDelay = "0.4s";

    
        colorRed.style.opacity = "1";
        colorRed.style.transitionDuration = "0.5s";
        colorRed.style.transitionDelay = "0.4s";
        colorRed.style.transitionTimingFunction = "ease-in-ease-out";

        colorBlue.style.opacity = "1";
        colorBlue.style.transitionDuration = "0.5s";
        colorBlue.style.transitionDelay = "0.4s";
        colorBlue.style.transitionTimingFunction = "ease-in-ease-out";
        
        colorOrange.style.opacity = "1";
        colorOrange.style.transitionDuration = "0.5s";
        colorOrange.style.transitionDelay = "0.4s";
        colorOrange.style.transitionTimingFunction = "ease-in-ease-out";
        
        colorPurple.style.opacity = "1";
        colorPurple.style.transitionDuration = "0.5s";
        colorPurple.style.transitionDelay = "0.4s";
        colorPurple.style.transitionTimingFunction = "ease-in-ease-out";

        colorGreen.style.opacity = "1";
        colorGreen.style.transitionDuration = "0.5s";
        colorGreen.style.transitionDelay = "0.4s";
        colorGreen.style.transitionTimingFunction = "ease-in-ease-out";
    });

    var selectColor;


        colorRed.addEventListener("click", function(){
            selectColor = "#ef5181";
            console.log("red selected!")
            newTeamButton.style.backgroundColor = selectColor;
            borderRemover();
            colorRed.style.border = "2px solid black";
            colorRed.style.height = "38px";
            colorRed.style.width = "38px";
        });

        colorBlue.addEventListener("click", function(){
            selectColor = "#1aabd8";
            console.log("Blue selected!");
            newTeamButton.style.backgroundColor = selectColor;
            borderRemover();
            colorBlue.style.border = "2px solid black";
            colorBlue.style.height = "38px";
            colorBlue.style.width = "38px";
        });
        
        colorOrange.addEventListener("click", function(){
            selectColor = "#fcb71e";
            newTeamButton.style.backgroundColor = selectColor;
            borderRemover();
            colorOrange.style.border = "2px solid black";
            colorOrange.style.height = "38px";
            colorOrange.style.width = "38px";
        });
        
        colorPurple.addEventListener("click", function(){
            selectColor = "#8e56a1";
            newTeamButton.style.backgroundColor = selectColor;
            borderRemover();
            colorPurple.style.border = "2px solid black";
            colorPurple.style.height = "38px";
            colorPurple.style.width = "38px";
        });
        
        colorGreen.addEventListener("click", function(){
            selectColor = "#bdd549";
            newTeamButton.style.backgroundColor = selectColor;
            borderRemover();
            colorGreen.style.border = "2px solid black";
            colorGreen.style.height = "38px";
            colorGreen.style.width = "38px";
        });

        function borderRemover(){
            colorRed.style.border = "0px";
            colorBlue.style.border = "0px";
            colorOrange.style.border = "0px";
            colorPurple.style.border = "0px";
            colorGreen.style.border = "0px";
        }

        function elementHider(){
        newTeamButton.style.opacity = "0.6";
        newTeamButton.style.transitionDuration = "0.5s";
        newTeamButton.style.transitionDelay = "0.4s";
        newTeamButton.style.transitionTimingFunction = "ease-in-ease-out";
        
        createTeamText.style.opacity = "1";
        createTeamText.style.transitionDuration = "0.5s";
        createTeamText.style.transitionDelay = "0.4s";
        createTeamText.style.transitionTimingFunction = "ease-in-ease-out";
        
        teamName.style.opacity = "0";
        teamName.style.transitionTimingFunction = "ease-in-ease-out";
        teamName.style.transitionDuration = "0.5s";

        confirmTeamName.style.opacity = "0";
        confirmTeamName.style.transitionTimingFunction = "ease-in-ease-out";
        confirmTeamName.style.transition = "0.5s";
    
        colorRed.style.opacity = "0";
        colorRed.style.transitionDuration = "0.5s";
        colorRed.style.transitionTimingFunction = "ease-in-ease-out";

        colorBlue.style.opacity = "0";
        colorBlue.style.transitionDuration = "0.5s";
        colorBlue.style.transitionTimingFunction = "ease-in-ease-out";
        
        colorOrange.style.opacity = "0";
        colorOrange.style.transitionDuration = "0.5s";
        colorOrange.style.transitionTimingFunction = "ease-in-ease-out";
        
        colorPurple.style.opacity = "0";
        colorPurple.style.transitionDuration = "0.5s";
        colorPurple.style.transitionTimingFunction = "ease-in-ease-out";

        colorGreen.style.opacity = "0";
        colorGreen.style.transitionDuration = "0.5s";
        colorGreen.style.transitionTimingFunction = "ease-in-ease-out";
        }

    // init
    var teamIterator = 0;
    var boxIterator = 0;

    var teamArray=[];
    
    // creating new teams
    function addNewTeamOnClick(){
        elementHider();
        borderRemover();
        newTeamButton.style.backgroundColor = "#c3f3ff"
        //var teamName = prompt("Enter teamname");
        //Creating a new teambox
        var newTeam = document.createElement("div");
        newTeam.className = "teamBoxContainer";
        newTeam.id = "newTeam"+teamIterator;
        newTeam.style.backgroundColor = selectColor;
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
        newCardButton.style.backgroundColor = "blue";
        newCardButton.style.outline = "none";
        newCardButton.style.border = "none";
        newCardButton.style.borderRadius = "10px 10px 10px 10px";
        newCardButton.style.width = "200px";
        newCardButton.style.height = "80px";
        newCardButton.className = "newCardButton";
        newCardButton.id = "newCardButton"+teamIterator;
        newCardButton.addEventListener("click",addTaskBarOnClick);
        newTeam.appendChild(newCardButton);

        var newCardInput = document.createElement("input");
        newCardButton.appendChild(newCardInput);
        newCardInput.style.borderRadius = "5px 5px 5px 5px";
        newCardInput.style.border = "none";
        
        //console.log(newTeamName.id);
        //console.log(teamArray);
        
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