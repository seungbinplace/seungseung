console.log('running...')

const li = document.querySelectorAll("#result > li");
const button = document.getElementById("generate");

console.log(li)
console.log(button)

// // min: 최솟값, max: 최댓값을 이용한 난수 생성
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// // 로또 번호 담을 배열
let lottoNumber = []; //6개
// console.log(lottoNumber)

// for (let i = 0; lottoNumber.length < 6; i++) {
//     // random 변수에 난수 생성한 값 할당
// const random = randomNumber(1, 45)
// //     // lottoNumber 내부에 random과 일치하는 값이 있는지 true/false
//     const isEntry = lottoNumber.includes(random)

//     // includes = 값

//     // !(not) 값을 뒤집어 준다. true => false, falese => true
//     // isEntry ===true, !isEntry === false
// !isEntry ? lottoNumber.push(random) : ''

// if(isEntry){
//     //     '';
//     // }else{
//     //     lottoNumber.push(random)
//     // }

// lottoNumber.push(randomNumber(1,45))

//     // if(!isEntry){
//     // lottoNumber.push(randomNumber(1,45))
//     // } 

//     console.log(lottoNumber)
// }

// // for (let i = 0; i < lottoNumber.length; i++) {
// //     //    lottoNumber.push(result)
// //     console.log = lottoNumber.push(result)

// //     })
// //     }
// //     generate.addEventListener("click", () => {

// // lottoNumber.push(randomNumber(1,45))


button.addEventListener('click', () => {
    button.classList.add('processing');
    button.textContent = "번호 생성중"

 if (lottoNumber.length > 0)
    lottoNumber = [];


    // 로또 번호를 생성하는 반복문
    for (let i = 0; lottoNumber.length < 6; i++) {
        const random = randomNumber(1, 45)
        const isEntry = lottoNumber.includes(random)
        !isEntry ? lottoNumber.push(random) : ''
        
    }
    
// 오름차순 정렬
lottoNumber = lottoNumber.sort((a, b) => a - b)

// 처리속도 변수
// let timer: 200

    // 로또 번호를 요소에 추가하는 반복문
    for (let i = 0; i < lottoNumber.length; i++) {
        // li[i].textContent = lottoNumber[i]

        setTimeout(()=>{
            li[i].textContent = lottoNumber[i]
        },200 * i)

        
    }

    setTimeout(()=>{
        button.classList.remove('processing')
        button.textContent = "로또번호생성"
    }, 200 * lottoNumber.length)})
    
