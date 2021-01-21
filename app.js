//Selectors
const todoInput = document.queryselector('.todo-input');
const todoButton = document.queryselector('.todo-button');
const todoList = document.queryselector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);


//Functions
function addToDo(event){
    //prevent form from submitting
    event.preventDefault();
   //to do div
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   //CREATE LI
   const newToDo = document.createElement('li');
   newTodo.innerText = 'testing';
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
   //check mark button
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classlist.add("complete-btn");
   todoDiv.appendChild(completedButton);
   //check trash button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-check"></i>';
   trashButton.classlist.add("complete-btn");
   todoDiv.appendChild(trashButton);
}
