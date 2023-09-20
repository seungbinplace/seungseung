// console.log('color')

/**
 * .color: 색깔이 반영되는 곳
 * .plus: 수치를 증가시키는 버튼
 * .minus: 수치를 감소시키는 버튼
 * .hue: 반영된 수치가 나타나는 곳 (범위: 0 ~ 360) 
 */

const color = document.querySelector('.color')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const hue = document.querySelector('.hue')

// console.log(color)
// console.log(plus)
// console.log(minus)
// console.log(hue)


let value = 0;

const changeHue = (param) => {
    // hue의 텍스트 값을 param
    hue.textContent = param;
    // color의 hue 값을 param
    color.style.backgroundColor=`hsl(${param}),50%,50%`
}

// 수치가 증가하는 버튼
plus.addEventListener('click', () => {
    if (value < 360) {
        // hue.textContent=value;
        value += 10
        // value++
        changeHue(value)
        // backgroundColor 적용

        color.style.backgroundColor = `hsl(${value},50%,50%)`      
        
        console.log(value)
    }
})

// 수치가 감소하는 버튼
minus.addEventListener('click', () => {
    if (value > 0) {
        hue.textContent=value;
        value -= 10
        // value--
        console.log(value)
    }
    })

