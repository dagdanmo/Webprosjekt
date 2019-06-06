var createNewTable = document.getElementById("createNewTable");
var plusSign = document.getElementById("plusSign");
var confirmTableName = document.getElementById("confirmTableName");
var inputTableName = document.getElementById("inputTableName");
var colorRed = document.getElementById("red");
var colorBlue = document.getElementById("blue");
var colorOrange = document.getElementById("orange");
var colorPurple = document.getElementById("purple");
var colorGreen = document.getElementById("green");
var homeSign = document.getElementById("homeImgDiv");
var txtMiddle = document.getElementById("txtMiddle");
var logOut = document.getElementById("logOut");


console.log(localStorage);

createNewTable.addEventListener("click", function(){

    setTimeout(function(){ showNewTableElements(); }, 100);
    setTimeout(function(){ newTableTransitions(); }, 500);

    
});

function newTableTransitions(){
    createNewTable.style.transitionTimingFunction = "ease-in-ease-out";
    createNewTable.style.transitionDuration = "0.5s";
    createNewTable.style.top = "40%";
    createNewTable.style.opacity = "1";

    inputTableName.style.opacity = "1";
    inputTableName.style.transitionTimingFunction = "ease-in-ease-out";
    inputTableName.style.transitionDuration = "0.5s";
    inputTableName.style.transitionDelay = "0.4s";

    confirmTableName.style.opacity = "1";
    confirmTableName.style.opacity = "ease-in-ease-out";
    confirmTableName.style.transitionDuration = "0.5s";
    confirmTableName.style.transitionDelay = "0.4s";

    colorRed.style.opacity = "1";
    colorRed.style.transitionTimingFunction = "ease-in-ease-out";
    colorRed.style.transitionDuration = "0.5s";
    colorRed.style.transitionDelay = "0.4s";

    colorBlue.style.opacity = "1";
    colorBlue.style.transitionTimingFunction = "ease-in-ease-out";
    colorBlue.style.transitionDuration = "0.5s";
    colorBlue.style.transitionDelay = "0.4s";

    colorOrange.style.opacity = "1";
    colorOrange.style.transitionTimingFunction = "ease-in-ease-out";
    colorOrange.style.transitionDuration = "0.5s";
    colorOrange.style.transitionDelay = "0.4s";

    colorPurple.style.opacity = "1";
    colorPurple.style.transitionTimingFunction = "ease-in-ease-out";
    colorPurple.style.transitionDuration = "0.5s";
    colorPurple.style.transitionDelay = "0.4s";

    colorGreen.style.opacity = "1";
    colorGreen.style.transitionTimingFunction = "ease-in-ease-out";
    colorGreen.style.transitionDuration = "0.5s";
    colorGreen.style.transitionDelay = "0.4s";

    plusSign.style.display = "none";
}

function hideNewTableElements(){
    createNewTable.style.display = "none";

    inputTableName.style.display = "none";

    confirmTableName.style.display = "none";

    plusSign.style.display = "none";

    colorRed.style.display = "none";

    colorBlue.style.display = "none";

    colorOrange.style.display = "none";

    colorPurple.style.display = "none";

    colorGreen.style.display = "none";
}

function showNewTableElements(){
    createNewTable.style.display = "block";

    inputTableName.style.display = "block";

    confirmTableName.style.display = "block";

    plusSign.style.opacity = "0";
    plusSign.style.transitionTimingFunction = "ease-in-ease-out";
    plusSign.style.transitionDuration = "0.5s";

    colorRed.style.display = "block";

    colorBlue.style.display = "block";

    colorOrange.style.display = "block";

    colorPurple.style.display = "block";

    colorGreen.style.display = "block";

}

var selectColor;

        colorRed.addEventListener("click", function(){
            selectColor = "#ef5181";
            createNewTable.style.backgroundColor = selectColor;
            borderRemover();
            colorRed.style.border = "2px solid black";
            colorRed.style.height = "46px";
            colorRed.style.width = "46px";
        });

        colorBlue.addEventListener("click", function(){
            selectColor = "#1aabd8";
            createNewTable.style.backgroundColor = selectColor;
            borderRemover();
            colorBlue.style.border = "2px solid black";
            colorBlue.style.height = "46px";
            colorBlue.style.width = "46px";
        });
        
        colorOrange.addEventListener("click", function(){
            selectColor = "#fcb71e";
            createNewTable.style.backgroundColor = selectColor;
            borderRemover();
            colorOrange.style.border = "2px solid black";
            colorOrange.style.height = "46px";
            colorOrange.style.width = "46px";
        });
        
        colorPurple.addEventListener("click", function(){
            selectColor = "#8e56a1";
            createNewTable.style.backgroundColor = selectColor;
            borderRemover();
            colorPurple.style.border = "2px solid black";
            colorPurple.style.height = "46px";
            colorPurple.style.width = "46px";
        });
        
        colorGreen.addEventListener("click", function(){
            selectColor = "#bdd549";
            createNewTable.style.backgroundColor = selectColor;
            borderRemover();
            colorGreen.style.border = "2px solid black";
            colorGreen.style.height = "46px";
            colorGreen.style.width = "46px";
        });

        function borderRemover(){
            colorRed.style.border = "0px";
            colorBlue.style.border = "0px";
            colorOrange.style.border = "0px";
            colorPurple.style.border = "0px";
            colorGreen.style.border = "0px";
        }

    var tableNamed;
    inputTableName.addEventListener("input", function(){
        tableNamed = inputTableName.value;
    });

    var idIncrement = 0;

    confirmTableName.addEventListener("click", function(){

        if(tableNamed != null && tableNamed != ""){
            var newCard = document.createElement("div");
            newCard.className = "newCard";
            newCard.id = "newCard" + idIncrement;
            var newCardName = document.createTextNode(inputTableName.value);
            newCard.appendChild(newCardName);
            document.getElementById("TeamBox").appendChild(newCard);
            idIncrement++;
            console.log(newCard.className, newCard.id);
            localStorage.setItem("tableName", inputTableName.value);
            inputTableName.value = "";
            tableNamed = inputTableName.value;
            newCard.style.backgroundColor = selectColor;

            borderRemover();
            createNewTable.style.color = "#e0fbff";

           setTimeout(function () {
                window.location.href = "TablePage.html"; //will redirect to your blog page (an ex: blog.html)
             }, 300);

            
        }else{
            console.log("Insert table name.")
        }
    });
    
    inputTableName.addEventListener("keyup", function(){
        if(event.keyCode == 13 && tableNamed != null && tableNamed != ""){
            var newCard = document.createElement("div");
            newCard.className = "newCard";
            newCard.id = "newCard" + idIncrement;
            var newCardName = document.createTextNode(inputTableName.value);
            newCard.appendChild(newCardName);
            document.getElementById("TeamBox").appendChild(newCard);
            idIncrement++;
            console.log(newCard.className, newCard.id);
            inputTableName.value = "";
            tableNamed = inputTableName.value;
            newCard.style.backgroundColor = selectColor;

            borderRemover();
            createNewTable.style.color = "#e0fbff";

           setTimeout(function () {
                window.location.href = "TablePage.html"; //will redirect to your blog page (an ex: blog.html)
             }, 300);

            
        }else{
            console.log("Insert table name.")
        }
    });

    // Return to CreateTable.html side when house icon is pressed
    homeSign.addEventListener("click", function(){

        setTimeout(function () {
            window.location.href = "CreateTable.html"; 
         }, 300);
    });
    // Return to CreateTable.html side when logo is pressed
    txtMiddle.addEventListener("click", function(){

        setTimeout(function () {
            window.location.href = "CreateTable.html"; 
         }, 300);
    });
    // Logs the user out and returns index.html side when house icon is pressed
    logOut.addEventListener("click", function(){

        setTimeout(function () {
            window.location.href = "index.html"; 
         }, 300);
    });
    


/* Dark mode section */

// Adding elements to color change
var checkbox = document.getElementById("checkDarkMode"); 
var header = document.getElementById("header");
var footer = document.getElementById("footer"); 
var plusVertical = document.getElementById("plusVertical"); 
var plusHorizontal = document.getElementById("plusHorizontal"); 
var createNewTable = document.getElementById("createNewTable");  
var inputTableName = document.getElementById("inputTableName"); 
var confirmTableName = document.getElementById("confirmTableName"); 
var center = document.getElementById("center"); 
var txtMiddle = document.getElementById("txtMiddle"); 
var txtDarkMode = document.getElementById("txtDarkMode");
var dropDownContent = document.getElementById("dropdown-content"); 
var taskitBlack = document.getElementById("logoBlack");
var taskitBlue = document.getElementById("logoBlue");

// Adding setting menu elements
var settings = document.getElementById("settings");
var settingsBox = document.getElementById("settingsBox");
var checkBoxBtn = document.getElementById("checkBoxBtn");

// Calling settings box hide function
hideSettingsBox();
/*Makes the settings box appear */
settings.addEventListener("click", function(){
    setTimeout(function(){ showSettingsBox(); }, 20);
    setTimeout(function(){ settingsBoxShowElements(); }, 200);
})

/*Function for showing settings menu*/
function settingsBoxShowElements(){
   // console.log("Settings clicked");
    settingsBox.style.zIndex = "100";
    settingsBox.style.top = "30%";
    settingsBox.style.left = "39%";
    settingsBox.style.transitionTimingFunction = "ease-in";
    settingsBox.style.transitionDuration = "0.2s";
    settingsBox.style.transitionDelay = "0s";
    settingsBox.style.opacity = "1";

}
// Function for closing settings menu 
checkBoxBtn.addEventListener("click", function(){
   // console.log("close button clicked");
    settingsBox.style.top = "80%";
    settingsBox.style.left = "39%";
    settingsBox.style.transitionTimingFunction = "ease-in";
    settingsBox.style.transitionDuration = "0.2s";
    settingsBox.style.transitionDelay = "0s";
    settingsBox.style.opacity = "0";
    setTimeout(function(){ hideSettinsBox(); }, 500);
});
// Show settings box
function showSettingsBox(){
    settingsBox.style.display = "block";
}
// Hide settings box
function hideSettingsBox(){
    settingsBox.style.display = "none";
}

// function to detect if checkbox in settings menu is checked or not
checkbox.addEventListener('change', function(e){
   // console.log(checkbox.checked, checkbox.value);
    if(checkbox.checked){
        console.log("huket av");
        dropDownContent.style.backgroundColor = "#AAAAAA"; // Dropdown menu background color
        header.style.background = "#141414"; // header color
        footer.style.backgroundColor ="#141414"; // footer color
        plusVertical.style.backgroundColor ="#03acef"; // plus sign vertical line color
        plusHorizontal.style.backgroundColor ="#03acef"; // plus sign horizontal line color
        createNewTable.style.backgroundColor = "#303030"; // "Create new table" - box color
        inputTableName.style.backgroundColor ="#353535"; // inputfield color
        inputTableName.style.color = "#03acef"; // input text color
        confirmTableName.style.backgroundColor ="#353535"; // plus sign confirmation button background color
        confirmTableName.style.color = "#03acef";  // plus sign confirmation button color
        document.body.style.background = "black"; // body color
        taskitBlack.style.display = "none"; // Setting wich logo to not show
        taskitBlue.style.display = "block"; // Setting wich logo to show

    } else {
      //  console.log("Ikke huket av");
        dropDownContent.style.backgroundColor = "white"; // Dropdown menu background color
        header.style.background = "#03acef"; // Header color
        footer.style.backgroundColor ="#e0fbff"; // footer color
        plusVertical.style.backgroundColor ="black"; // plus sign vertical line color
        plusHorizontal.style.backgroundColor ="black"; // plus sign horizontal line color
        createNewTable.style.backgroundColor = "#c3f3ff"; // "Create new table" - box color
        inputTableName.style.color = "black"; // input text color
        inputTableName.style.backgroundColor ="white"; // input field color
        confirmTableName.style.backgroundColor ="white"; // plus sign confirmation button background color
        confirmTableName.style.color = "black"; // plus sign confirmation button color
        document.body.style.background = "white"; // body color
        taskitBlack.style.display = "block"; // Setting wich logo to show
        taskitBlue.style.display = "none"; // Setting wich logo not to show
    }
});
