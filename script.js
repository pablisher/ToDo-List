let BtnAdd = document.getElementById('add'),
todoList = document.querySelector('.todo'),
complete = document.getElementById('completed'),
HeaderInp = document.querySelector('.header-input'),
todo = document.getElementsByClassName('todo-container'),
todoControl = document.querySelector('.todo-control')

let todoDate = []
let newTodo

function render(e){
todoList.textContent = '';
complete.textContent = '';

todoDate.forEach((item,i) => {
     let li = document.createElement('li')
     li.classList.add('todo-item')

     li.innerHTML = `<span class="text-todo">${item.value}</span>
    <div class="todo-buttons" id="${i}">
    <button class="todo-remove"></button>
    <button class="todo-complete"></button>
    </div>`; 
if(item.completed){
    complete.append(li)
}else{
    todoList.append(li)
}



let btnComplete = li.querySelector('.todo-complete')
    btnComplete.addEventListener('click', function(e){
      item.completed = !item.completed
      localStorage.setItem('todo', JSON.stringify(todoDate))
      render()
    })

let btnRemove = li.querySelector('.todo-remove')
btnRemove.addEventListener('click', function(e){
    let index = todoDate.indexOf(item)
   if(index > -1){
todoDate.splice(index,1)
localStorage.setItem('todo', JSON.stringify(todoDate))
render()
    }

})
})
}

todoControl.addEventListener('submit', function(e){
    e.preventDefault()
     newTodo = {
        value: HeaderInp.value,
        completed: false
    }
    proverka()
    steret()
    render()
    
    localStorage.setItem('todo', JSON.stringify(todoDate))
})


let proverka = function(){
    if(Object.keys(newTodo.value).length == ''){
        return alert('добавь задачу')
    } else {
        return todoDate.push(newTodo)
    }
    
}

if(localStorage.getItem('todo')){
    todoDate = JSON.parse(localStorage.getItem('todo'))
    render()
}

let steret = function(){
    if(HeaderInp.value !== ''){
       HeaderInp.value = ""
    }else {
        return false
    }
}
