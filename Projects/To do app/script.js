const addButton = document.getElementById('addTaskButton')
const addTask = document.getElementById('addTaskInput')
const taskList = document.getElementById('taskList')

loadTasks();

function addingTaskInput() {
    const task = addTask.value.trim();  // to remove all the whitespaces

    if (task) {
        createTaskElement(task);
        addTask.value = '';
        saveTasks();
    } else
    { 
        alert('please enter a task')
        }
}

addButton.addEventListener('click', addingTaskInput)

function createTaskElement(task) {
    const listItem = document.createElement('li')
    listItem.textContent = task
    taskList.appendChild(listItem)

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete'
    deleteButton.className = 'deleteTask'
    listItem.appendChild(deleteButton)

    taskList.appendChild(listItem);

    deleteButton.addEventListener('click', function () {
        taskList.removeChild(listItem) 
        saveTasks(); 
    });
}

function saveTasks() {
    let tasks = []; 
    taskList.querySelectorAll('li').forEach(function (item) {
        tasks.push(item.textContent.replace('delete', '').trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(createTaskElement);
}