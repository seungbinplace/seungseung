//setTimeout: 지연된 시간후에 실행되는 함수
// setTimeout(함수, 시간: 1s = 1000ms)
setTimeout(() =>{
console.log('1번째')
},1000)

setTimeout(() =>{
    console.log('2번째')
},3000)

setTimeout(() =>{
    console.log('3번째')
},500)

// 1초 뒤에 index값을 1로 변경해서 console로 출력

setTimeout(()=>{
    index++
    console.log(index)
},1000)

// setInterval : 정해진 시간마다 반복 실행하는 비동기 함수
// setInterval(함수,시간)
let index = 0;

setInterval(() =>{
    index++
    document.body.textContent = index
    console.log(index)
},1000)

setTimeout(() => {
    document.body.style.backgroundColor = 'yellow'
},1000)