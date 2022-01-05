window.addEventListener('load', () =>{
    let form = document.querySelector('#task_form')
    let input = document.querySelector('#add_task_input')
    let elementList = document.querySelector('#tasks')

    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        let task = input.value

        if(!task){
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

        let elementDelete = document.createElement('button')
        elementDelete.classList.add('delete')
        elementDelete.innerHTML = 'Supprimer'
        
        elementAction.appendChild(elementEdit)
        elementAction.appendChild(elementDelete)

        elementTask.appendChild(elementAction)

        elementList.appendChild(elementTask)

        input.value = ""

        elementEdit.addEventListener('click', () =>{
            if(elementEdit.innerText.toLowerCase() == 'modifier'){
                elementInput.removeAttribute('readonly')
                elementInput.focus
                elementEdit.innerText = 'Valider'
            } else {
                elementInput.setAttribute('readonly', 'readonly')
                elementEdit.innerText = "Modifier"
            }
        })

        elementDelete.addEventListener('click', () =>{
            elementList.removeChild(elementTask)
        })
    })
})

// function storage (){
//     window.localStorage.elementList = elementList.innerHTML
// }
// function getValue(){
//     let contentStorage = window.localStorage.elementList
//     elementList.innerHTML = contentStorage
// }
// getValue()