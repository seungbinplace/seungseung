/**
 * #number:변해야 할 [숫자]
 * #inc : 증가버튼
 * #dec : 감소버튼
 *  */

const num = document.getElementById('num')
const inc = document.getElementById('inc')
const dec = document.getElementById('dec')
// querySelectr

const bar = document.querySelector('.bar')
console.log(bar)

// console.log(num)
// console.log(inc)
// console.log(dec)

// 증감할 값이 들어있는 변수
let counter = 0;

// ink : increment(증가)하는 일
// addEventListener('이벤트이름', 함수)
// inc.addEventListener('click',function(){})
inc.addEventListener('click', () => {

    // 1. 누적시키는 방법
    // counter = counter + 1 
    //counter += 1;
    //console.log(counter)
    // 증가연산자

    //inc.style.transform= `rotate(${counter}deg)`

    if (counter <= 100) {
        num.textContent = `${counter}`
        counter += 10;
        bar.style.width = `${counter}%`

        console.log(counter)
    }

})

// dec : decrement(감소)하는 일
dec.addEventListener('click', () => {


    // counter--;

    // if(counter < 0){
    //     counter = 0 
    // }

    // if(counter > 0){

    // }

    counter -= 10;

    num.textContent = counter;
    bar.style.width = `${counter}%`
    // dec.style.transform= `rotate(${counter}deg)`

    console.log(counter)
})
