const date = [
    {title: '포스터',url:'images/1.jpg'},
    {title: '벚꽃길',url:'images/2.jpg'},
    {title: '유럽마을',url:'images/3.jpg'},
    {title: '수상한집',url:'images/4.jpg'},
    {title: '굶주린 카우보이',url:'images/5.jpg'}
]

// 1. list에 목록
const list = document.getElementById('list')
console.log(list)

const title = document.getElementById('title')
console.log(title)


for(let i =0; i < date.length; i++){
console.log(date[i])
    // 반복해서 li요소에 title 값을 담아줌
     list.innerHTML += `<li class="button">${date[i].title}</li>`
    }

const buttons = document.querySelectorAll('.button')
console.log(buttons)

// .button 클래스를 가진 요소들을 모두 가져옴
for(let i = 0; i < buttons.length; i++){
    console.log(buttons[i])

    buttons[i].addEventListener('click',()=>{
        console.log(date[i].url)
        // 이미지 태그의 src 속성에 date[i].url 값 할당
    image.src = date[i].url
        // title의 값에 data[i].title
        title.textContent =  date[i].title
    })
}
