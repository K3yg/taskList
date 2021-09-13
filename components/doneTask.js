const DoneTaskButton = () => {
    const doneTaskButton = document.createElement('button')

    doneTaskButton.classList.add('check-button')
    doneTaskButton.innerHTML = 'concluir'
    doneTaskButton.addEventListener('click', doneTask)

    return doneTaskButton
}

const doneTask = (event) => {
    const doneButton = event.target
    const completeTask = doneButton.parentElement

    completeTask.classList.toggle('done')
}

export default DoneTaskButton