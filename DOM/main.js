const list = document.getElementById("todo-list");

list.addEventListener("click", function (event){
    if (event.target.classList.contains("delete-btn")) {
        const li = event.target.parentElement;
        li.remove();
    }
});

const list2 = document.getElementById("activity-list");

list2.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-btn")){
        const textSpan = event.target.previousElementSibling;
        textSpan.innerText = "Diubah!"
    }
})

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){
    card.addEventListener("click", function(event){
        if (event.target.classList.contains("change-btn")){
            const paragraph = card.querySelector(".deskripsi");
            paragraph.innerText = "Deskripsi telah diubah"
        }
    })
})

const taskList = document.getElementById("task-list");

taskList.addEventListener("click", function(event){
    if (event.target.classList.contains("done-btn")){
        const li = event.target.parentElement;
        const span = li.querySelector("span");
        span.style.textDecoration = "line-through";
    }
});