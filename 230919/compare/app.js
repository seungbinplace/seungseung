// getElementById는 ID를 기반으로 찾기 때문에, #이라는 표현을 따로 적어주지 않아도 된다
//const title= document.getElementById('title');

//querySelector는 태그, 클래스, 아이디 등 범용으로 사용하기 때문에 꼭 아이디인지, 클래스인지, 태그인지 구분해서 적어줘야 한다.

const title = document.querySelectorAll('.title')
// console.log(title[2]);

// for(let i = 0; i < title.length; i++){
// console.log(title[i])

for (let i = 0; i < title.length; i++) {

    // i번째의 텍스트를 변경
    title[i].textContent = `${i}번째 요소입니다`

    //i번째의 스타일 추가
    console.log(title[i])
    // title[i].style.fontSize = `${(i + 10) * 2}px`;
    // title[i].style.fontWeight = '500';

    // i번째의 red 클래스를 추가 
    title[i].classList.add('red');
}

// i번째의 red 클래스를 제거
title[title.length-1].classList.remove('red');

// if (i === title.length - 1){
    //     // title[i].style.color = 'red'
    //     title[i].classList.remove('red');
    // } 