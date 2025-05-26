
let tasks = [];

function addTask(taskText) {
    
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Hapus</button>
    `;
    document.getElementById("task-list").appendChild(li);
    
    tasks.push(taskText);
    renderTask();
}

document.getElementById('add-btn').addEventListener('click', function(){
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;
    addTask(taskText);
    taskInput.value = "";
});

document.getElementById('task-list').addEventListener('click', function(event){
    if(event.target.classList.contains("delete-btn")){
        const li = event.target.parentElement;
        li.remove();
    };
});

function renderTask(){
    const tasklist = document.getElementById('task-list');
    tasklist.innerHTML= "";

    tasks.forEach(function(task){
        const li = document.createElement("li");
        li.innerHTML = `<span>${task}</span>
                        <button class="delete-btn">Hapus</button>`;
        tasklist.appendChild(li);
    });
}
console.log(tasks)