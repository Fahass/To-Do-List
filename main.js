var tasksIn = document.getElementById('task');
var addBtn = document.getElementById('add-btn');
var addedTask = document.getElementById('added-task');

window.onload = alert('Click a task to strike through')

addBtn.addEventListener('click', function(){
    if(tasksIn.value === ""){
        alert('Add a task')
    }
    else{
        addedTask.innerHTML += `<div class='taskInput'>
        <p class='pr'>${tasksIn.value}</p><button class='btn'>X</button>
        </div>`
        tasksIn.value = "";


        var inBtn = document.querySelectorAll('.btn');
        for (var i = 0; i < inBtn.length; i++) {
            inBtn[i].addEventListener('click', function() {
                this.parentNode.remove()
            }); 
        }
    

        var inText = document.querySelectorAll('.pr');
        for (var i = 0; i < inText.length; i++) {
            inText[i].addEventListener('click', function() {
                this.classList.toggle('completed')
            }); 
        }
    
    }
});