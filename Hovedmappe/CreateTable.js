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

    plusSign.style.opacity = "0";
    plusSign.style.transitionTimingFunction = "ease-in-ease-out";
    plusSign.style.transitionDuration = "0.5s";

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
});

var selectColor;

        colorRed.addEventListener("click", function(){
            selectColor = "#ef5181";
            console.log("red selected!")
            createNewTable.style.backgroundColor = selectColor;
            borderRemover();
            colorRed.style.border = "2px solid black";
            colorRed.style.height = "46px";
            colorRed.style.width = "46px";
        });

        colorBlue.addEventListener("click", function(){
            selectColor = "#1aabd8";
            console.log("Blue selected!");
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
    homeSign.addEventListener("click", function(){

        setTimeout(function () {
            window.location.href = "CreateTable.html"; //will redirect to your blog page (an ex: blog.html)
         }, 300);
    });
    txtMiddle.addEventListener("click", function(){

        setTimeout(function () {
            window.location.href = "CreateTable.html"; //will redirect to your blog page (an ex: blog.html)
         }, 300);
    });
    logOut.addEventListener("click", function(){

        setTimeout(function () {
            window.location.href = "index.html"; //will redirect to your blog page (an ex: blog.html)
         }, 300);
    });
    


/*------------ Dark mode section ------------*/
var checkbox = document.getElementById("checkDarkMode"); // checkbox
var header = document.getElementById("header"); // header color (background)
var footer = document.getElementById("footer"); // footer color (background-color)
var plusVertical = document.getElementById("plusVertical"); //plus line vertical (background-color)
var plusHorizontal = document.getElementById("plusHorizontal"); // plus line horizontal (background-color)
var createNewTable = document.getElementById("createNewTable");  //default table color (background-color)
var inputTableName = document.getElementById("inputTableName"); // Color for input field and font color (backgorund and font color)
var confirmTableName = document.getElementById("confirmTableName"); // plus background color and plus-sign color (color and background-color)
var center = document.getElementById("center"); // center color (background color)
var txtMiddle = document.getElementById("txtMiddle"); // "TASK IT" text color (color)
var inputTableName = document.getElementById("inputTableName"); // input text color
var txtDarkMode = document.getElementById("txtDarkMode");


var settings = document.getElementById("settings");
var settingsBox = document.getElementById("settingsBox");
var checkBoxBtn = document.getElementById("checkBoxBtn");


/*Makes the settings box appear */
settings.addEventListener("click", function(){
    setTimeout(function(){ showSettingsBox(); }, 20);
    console.log("Settings clicked");
    settingsBox.style.top = "30%";
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


checkbox.addEventListener('change', function(e){
    console.log(checkbox.checked, checkbox.value);
    if(checkbox.checked){
        console.log("huket av");
        header.style.background = "#141414";
        footer.style.backgroundColor ="#141414";
        plusVertical.style.backgroundColor ="#03acef";
        plusHorizontal.style.backgroundColor ="#03acef";
        createNewTable.style.backgroundColor = "#303030";
        inputTableName.style.backgroundColor ="#353535";
        confirmTableName.style.backgroundColor ="#353535";
        confirmTableName.style.color = "#03acef";
        center.style.color = "#767D92";
        txtMiddle.style.color = "#03acef";
        settingsBox.style.backgroundColor = "#8A928A";
        inputTableName.style.color = "#03acef";
        document.body.style.background = "black";

    } else {
        console.log("Ikke huket av");
        header.style.background = "#03acef";
        footer.style.backgroundColor ="#e0fbff";
        plusVertical.style.backgroundColor ="black";
        plusHorizontal.style.backgroundColor ="black";
        createNewTable.style.backgroundColor = "#c3f3ff";
        inputTableName.style.backgroundColor ="white";
        confirmTableName.style.backgroundColor ="white";
        confirmTableName.style.color = "black";
        center.style.backgroundcolor = "#03acef";
        txtMiddle.style.color = "black";
        settingsBox.style.backgroundColor = "#EEEEEE"
        inputTableName.style.color = "black";
        document.body.style.background = "white";
    }
});
