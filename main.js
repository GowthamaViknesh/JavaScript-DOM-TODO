/* Collect the value from the HTML using id values so if we get the values by id
 we can also manipulate the whole document*/

const button = document.getElementById('add');
const todolist = document.getElementById('todolist');
const input = document.getElementById('input');

/*After getting the values we can manipulate the data but we have to 
store the values in someplace so i define the empty array to store the values*/

let todos = [];

//Save the data in the localstroage and get the saved data on reload the page
window.onload = () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];

  //Using forEach to render the data line by line

  todos.forEach((todo) => {
    addTodo(todo);
  });
};

/*After the storing the values we have implement the functions to code*/

button.addEventListener('click', () => {
  todos.push(input.value);
  //To store the values in the local stroage
  localStorage.setItem('todos', JSON.stringify(todos));
  //Here we calling function addtodo to perform the certain actions
  addTodo(input.value);
  input.value = '';
});

/*In this function we have the values so we have show the data in webpage*/
const addTodo = (todo) => {
  let para = document.createElement('p');
  para.innerText = todo;
  //To assign the values to todolist varaible
  todolist.appendChild(para);

  para.addEventListener('click', () => {
    para.style.textDecoration = 'line-through';
    remove(todo);
  });
  //Remove the specific values from the list
  para.addEventListener('dblclick', () => {
    todolist.removeChild(para);
    remove(todo);
  });
};

//Remove Function
const remove = (todo) => {
  let data = todos.indexOf(todo);
  if (data > -1) {
    return todos.splice(data, 1);
  }
  //To remove the data from the storage
  localStorage.setItem('todos', JSON.stringify(todos));
};
