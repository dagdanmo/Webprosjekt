document.getElementById('AddTaskBarButton').addEventListener("click", addTaskBarOnClick);
    var i = 0;
    function addTaskBarOnClick(){
        if(i<4){
            var newCard = document.createElement("div");
            newCard.className = 'newCard';
            newCard.id = 'newCard'+i;
            var newCardName = document.createTextNode("newCard");
            newCard.appendChild(newCardName);
            document.getElementById("TeamBox").appendChild(newCard);
            i++;
        } else {
            alert("Max cars reached for current team");
        }
    };