console.log('script.js')
   
const toggle = document.querySelector('.toggle')
console.log(toggle)

console.log(toggle.classList)

// class 'active" 추가
// toggle.classList.add('active')

// class" 'active" 제거
// toggle.classList.remove('active')

// class "active"가 존재하는지 유무
console.log(toggle.classList.contains('active'))

toggle.addEventListener('click',() => {
    // 1. toggle 에 active 클래스도 있다면 

    // if(toggle.classList.contains('active'))
    // toggle.classList.remove('active')
    
    // else(
    //     toggle.classList.add('active')
    // )
    // })

    // 2. 3항 연산자

    // toggle.classList.contains('active')
    // ? toggle.classList.remove('active')
    // : toggle.classList.add('active')

    // 3. toggle 메소드

    // element.classList.toggle('클래스')
    // element에 '클래스'가 있으면 삭제, 없으면 추가해주는 메소드

     toggle.classList.toggle('active')
});
