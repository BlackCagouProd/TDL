let aToDo = document.getElementById('Add');
let cTodo = document.getElementById('contain');
let iToDo = document.getElementById('iField');



function ajout() {
    const todo = document.createElement('p');
    const del = document.createElement('button')

    todo.classList.add('box')
    del.classList.add('delete')

    todo.innerText = iToDo.value;
    cTodo.appendChild(todo);
    todo.appendChild(del);
    iToDo.value = "";

    del.addEventListener('click', function() {
        cTodo.removeChild(todo);
    })

}




aToDo.addEventListener('click', ajout)