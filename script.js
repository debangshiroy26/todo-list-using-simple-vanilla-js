//element selector
const taskInput= document.getElementById('task-input');
const addButton= document.getElementById('add-task');
const taskList= document.getElementById('task-list');

// Event listener for adding tasks
addButton.addEventListener('click', function(){

    //taking a task input and adding it to the list
    const taskText = taskInput.value.trim();
    if(!taskText){
        alert('Please enter a task!');
        return;
    }
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">X</button>`
        taskList.appendChild(taskItem);
        taskInput.value = '';

        // Delete button functionality
        const deleteButton = taskItem.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function(){
            taskList.removeChild(taskItem);

        })

        //modifying task text
       taskItem.querySelector('.task-text').addEventListener('click', function(){
        taskItem.classList.toggle('completed');})


});

taskInput.addEventListener('keypress', function(event){
    if (event.key ==='Enter'){
        console.log(event)
        addButton.click();
    }
    
})