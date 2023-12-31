// .menu-item이라는 클래스가 붙은 요소들을 다 가져와야 함
/**
 * .getElementById = 아이디를 기반으로 요소를 탐색해서 가져옴
 * .querySelector = 범용으로 사용. tag, id, class기반으로 탐색해서 가져올 수 있다
 * .
 */

const menuItem = document.querySelectorAll('.menu-item')
console.log(menuItem)

// menuItem.forEach(item => {
//     item.addEventListener('click',()=>{
//         menuItem.forEach(button=>button.classList.remove('active'))
//         item.classList
//     })
// })

for (let i = 0; i < menuItem.length; i++) {
    
    console.log(menuItem[i])

    console.log(i)


    menuItem[i].addEventListener('click', () => {

        // 클릭했을 때, 모든 요소에서 active 클래스 제거

        for (let button = 0; button < menuItem.length; button++) {
            menuItem[button].classList.remove('active')
        }

        menuItem[i].classList.add('active')
    })
}

// 변수의 스코프(scope, 범위, 영역)
// let 키워드로 선언된 변수의 scope는 블록단위이다.
// 변수를 선언할때 원칙 - 동일한 이름으로 선언할 수 없다.
// 다만 scope가 다르면, 동일한 이름을 사용해도 영역이 다르기 때문에 선언 가능하다.



// 마지막번째
// console.log(menuItem[menuItem.length-1])
// menuItem[4].addEventListener('click',(e)=>{
// 기본적으로 발생하는 이벤트 취소
// e.preventDefault();
// 이벤트 전파를 막는 메소드
// e.stopPropagation();
// 'active' 클래스 추가
// menuItem[4].classList.add('active')
// })
// menuItem[0].addEventListener('click',()=>{
//     'active' 클래스 제거
//     menuItem[0].classList.remove('active')
// }) 
