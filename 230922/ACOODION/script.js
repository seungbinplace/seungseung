const listItem = document.querySelectorAll('.list-item')
console.log(listItem)

const icon = document.querySelectorAll('.icon')
console.log(icon)


for (let i = 0; i < listItem.length; i++) {

    listItem[i].addEventListener('click', () => {
        // .list-item 클래스를 가진 모든 요소를 반복문 처리
        for(let i = 0; i < listItem.length; i++){
            // .list-item 클래스를 가진 모든 요소에서 selected 클래스를 제거
            listItem[i].classList.remove('selected')
        }
        // .listitem 클래스를 가진 모든 요소에서 selected 클래스 추가
        listItem[i].classList.add('selected')

    }
    )}

// listItem.forEach(item =>{
//     item.addEventListener('click',( ) =>{
//         item.classList.toggle('selected')
//     })
// } )

// listItem.forEach(item =>{ 
//     icon[i].addEventListener('click', () => {
//         listItem.forEach(list => list.classList.remove('selsected'))
//        icon.classList.add('selsected')
// })
// })