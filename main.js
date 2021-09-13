import DoneTaskButton from "./components/doneTask.js"
import DeleteTaskButton from "./components/deleteTask.js"

const createTask = (event) => {
event.preventDefault()

const taskForm = document.querySelector('[data-form]')
const content = `<p class="content">${taskForm.value}</p>`
const taskList = document.querySelector('[data-list]')
const taskItem = document.createElement('li')

taskItem.classList.add('task')

taskItem.innerHTML = content
taskList.appendChild(taskItem)
taskItem.appendChild(DoneTaskButton())
taskItem.appendChild(DeleteTaskButton())

taskForm.value = ''
    
}

const newTask = document.querySelector('[data-form-button]')
newTask.addEventListener('click', createTask)