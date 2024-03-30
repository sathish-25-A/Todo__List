let button = document.getElementById("add");
let todoList = document.getElementById("todoList");
let input = document.getElementById("input");

let todos = [];
button.addEventListener("click", () => {
  todos.push(input.value);
  addtodo(input.value);
  input.value='';
});
function addtodo(todo) {
  let para = document.createElement("p");
  para.innerText = todo;
  todoList.appendChild(para);
  para.addEventListener('click',()=>{
    para.style.textDecoration='line-through'
    remove(todo)
  })
  para.addEventListener('dblclick',()=>{
    todoList.removeChild(para)
    remove(todo)
  })
  
}
function remove(todo){
    todos.indexOf(todo)
    if(index>-1)
    todos.splice(index,1)

}
