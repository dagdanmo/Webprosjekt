var taskBoxId = 0;

window.onload = function(){
    var TaskBox = document.getElementById('TaskBox0');
    document.getElementById('AddTaskBarButton').addEventListener("click", addTaskBarOnClick);

    // --CURRENT ISSUE --
    // Clones everything. 2 turns into 4, 4 to 8 etc
    function addTaskBarOnClick(){
        taskBoxId++;
        var newTaskBox = TaskBox.cloneNode(true);
        TaskBox.appendChild(newTaskBox);
        console.log("Added bar");
        console.log(taskBoxId);
};
}
