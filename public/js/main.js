window.addEventListener('load', () => {
    let form = document.querySelector('#task_form')
    let input = document.querySelector('#add_task_input')
    let elementList = document.querySelector('#tasks')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let task = input.value

        if (!task) {
            alert("Dites nous d'abord qu'elle est votre tâche")
            return
        }

        let elementTask = document.createElement('div')
        elementTask.classList.add('task_bullet')

        let elementContent = document.createElement('div')
        elementContent.classList.add('content')

        elementTask.appendChild(elementContent)

        let elementInput = document.createElement('input')
        elementInput.classList.add('text')
        elementInput.type = 'text'
        elementInput.value = task
        elementInput.setAttribute('readonly', 'readonly')

        elementContent.appendChild(elementInput)

        let elementAction = document.createElement('div')
        elementAction.classList.add('actions')

        let elementEdit = document.createElement('button')
        elementEdit.classList.add('edit')
        elementEdit.innerHTML = 'Modifier'

        let elementDone = document.createElement('button')
        elementDone.classList.add('delete')
        elementDone.innerHTML = 'Finir'

        elementAction.appendChild(elementEdit)
        elementAction.appendChild(elementDone)

        elementTask.appendChild(elementAction)

        elementList.appendChild(elementTask)

        input.value = ""

        elementEdit.addEventListener('click', () => {
            if (elementEdit.innerText.toLowerCase() == 'modifier') {
                elementInput.removeAttribute('readonly')
                elementInput.focus
                elementEdit.innerText = 'Valider'
            } else {
                elementInput.setAttribute('readonly', 'readonly')
                elementEdit.innerText = "Modifier"
            }
        })

        elementDone.addEventListener('click', () => {
            elementList.removeChild(elementTask)
            let currentTask = document.querySelector('.task_bullet')
            let elementDoneList = document.querySelector('#tasks_done')
            let taskDone = currentTask //.value

            let elementTaskDone = document.createElement('div')
            elementTaskDone.classList.add('task_bullet')

            let elementContentDone = document.createElement('div')
            elementContentDone.classList.add('content')

            elementTaskDone.appendChild(elementContentDone)

            let elementInputDone = document.createElement('input')
            elementInputDone.classList.add('text')
            elementInputDone.type = 'text'
            elementInputDone.value = taskDone

            elementContentDone.appendChild(elementInputDone)

            let elementActionDone = document.createElement('div')
            elementActionDone.classList.add('actions')

            let elementDelete = document.createElement('button')
            elementDelete.classList.add('delete')
            elementDelete.innerHTML = 'Supprimer'

            elementActionDone.appendChild(elementDelete)

            elementTaskDone.appendChild(elementActionDone)

            elementDoneList.appendChild(elementTaskDone)

            currentTask.value = ""

            elementDelete.addEventListener('click', () => {
                elementDoneList.removeChild(elementTaskDone)
            })
        })
    })
})