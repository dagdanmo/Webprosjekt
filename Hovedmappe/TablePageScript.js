
window.onload = function(){
    document.getElementById('AddTaskBarButton').addEventListener("click", addTaskBarOnClick);

    function addTaskBarOnClick(){
        var newCard = document.createElement("div");
        newCard.id = 'newCard';
        var newCardName = document.createTextNode("newCard");
        newCard.appendChild(newCardName);
        document.getElementById("TeamBox").appendChild(newCard);
    };
}