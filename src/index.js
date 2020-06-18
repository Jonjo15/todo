//console.log("IT WORKS!!!!");
let projects = [];
import { addEvents } from './events' 
addEvents();
const Todo = (title, description, dueDate, priority) => {
   const getTitle = () => {
       return title;
   } 
   const getDescription = () => {
       return description;
   }
   const getDate = () => {
       return dueDate;
   }
   const getPriority = () => {
       return priority;
   }
   return { getTitle, getDescription, getDate, getPriority}
}

const Project = (name) => {
    const getName = () => {
        name;
    }
    const todosArray = [];
    const addTodoToProject = (todo) => {
        todosArray.push(todo);
    }
    const getTodos = () => {
        todosArray;
    }
    return {getName, getTodos, addTodoToProject}
}

function addTodo() {
    //
}
