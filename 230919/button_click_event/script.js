const title = document.getElementById('title')
console.log(title)

// const button = document.geteElementById('btn')
const button = document.querySelector('#btn')

const container =document.querySelector('.container')

button.addEventListener('click',() =>{ 
    container.classList.add('bg')
})

// 제목을 클릭했을때, alert 창에 '클릭'이라는 문구가 출력
// addEventListener('이벤트이름',실행할 함수)
title.addEventListener('click',() => {
    //alert('클릭')
    // title의 컬러값이 red라면
})
    if(title.style.color === 'red'){
        //title의 컬러값을 black
        title.style.color='black'
} else{
    //title의 값을 red
    title.style.color='red'
}
