console.log('연결')

const input = document.getElementById('add-todo')
const addButton = document.querySelector('.add-button')
const list = document.getElementById('list')

// console.log(input)
// console.log(addButton)
// console.log(list)

input.addEventListener('keydown', (e) => {
    // console.log(e.key)
    // enter 키를 눌렀을 때 addListItem 함수실행
    if(e.key === 'Enter'){
        addListItem()
    }
})
addButton.addEventListener('click',() => {
    console.log(input.value)
    addListItem()
})

// list에 할 일을 추가하는 함수
const addListItem = () => {
    if(input.value.length === 0){
        return alert('내용을 입력해주세요')
    }

    // li 요소 생성
    const li = document.createElement('li')
    li.innerHTML = `${input.value} <button class = "list-delete">
    &#x2716</button>`
    li.classList.add('list-item')
    list.append(li)
    input.value = '';
    input.focus();
    saveList(li.innerHTML)
}

list.addEventListener('click', (e) =>{
    // event.currentTarget : 이벤트가 걸려있는 해당요소
    // event.target : 클릭하는 요소
    console.log(e.target)

    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        // 현재 상태 저장
        saveList(list.innerHTML)
    }

    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
        saveList(list.innerHTML)
    }
})

const saveList = (list) => {
    localStorage.setItem('todo', JSON.stringify(list))
}

const loadList = () => {
    const getList = JSON.parse(localStorage.getItem('todo'))
    list.innerHTML = getList
}

// DOMContentLoaded : DOM이 그려지고 난 뒤
// load: DOM도 그려지고, 이미지와 같은 요소들도 모두 로드 되었을때

document.addEventListener('DCMContentLoaded', loadList())