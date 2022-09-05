let aToDo = document.getElementById('Add');
let cTodo = document.getElementById('contain');
let iToDo = document.getElementById('iField');



function ajout() {
    const todo = document.createElement('p');
    todo.classList.add('box')
    todo.innerText = iToDo.value;
    cTodo.appendChild(todo);
    iToDo.value = "";
    todo.addEventListener('click', function() {
        todo.style.textDecoration = "line-through"
    })
    todo.addEventListener('dblclick', function() {
        cTodo.removeChild(todo);
    })

}

aToDo.addEventListener('click', ajout)