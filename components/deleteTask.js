const DeleteTaskButton = () => {
    const deleteButton = document.createElement('button')

    deleteButton.innerText = 'excluir'
    deleteButton.addEventListener('click', deleteTaskItem)

    return deleteButton
    }

const deleteTaskItem = (event) => {
    const deleteButton = event.target
    const deleteTask = deleteButton.parentElement

    deleteTask.remove()   
}

export default DeleteTaskButton