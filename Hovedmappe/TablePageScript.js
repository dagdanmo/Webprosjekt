console.log("In progress");

var TaskBox = document.getElementById("TaskBox0");
var addBar = document.getElementById("AddTaskBarButton");

addBar.addEventListener("click", function(){
    var newTaskBox = TaskBox.cloneNode(true);
    TaskBox.appendChild(newTaskBox);
});
