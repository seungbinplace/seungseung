console.log('function')

/**
 * add 라는 이름의 함수
 * x와, y라는 값을 받아서 더하는 함수
 * x, y :매개변수,parameter
 */

function add(x, y){
    return console.log (`덧셈결과는 ${x + y}`);
}

add(5,2); // 사용하는 방법

// 곱하기 함수 작성
function multiply(x, y){
    add(x, y);
    return console.log ('곱셈결과는 ' + x * y);
}

multiply(5,13);

//fat arrow function, 화살표 함수
const addFunc = (x, y) => {
    return console.log(x + y)
}
addFunc(10,20)

// 매개변수를 받아서 그대로 출력하는 함수
// const showName = (name) => {
//     return console.log(`제 이름은 ${name}입니다`)
// }
// showName('황승빈')

//매개변수가 하나고, 한줄만 실행할때는 리턴(return)없이 바로 출력하도록 축약해서 쓸수 있다

// const showName = name => console.log(`제 이름은 ${name}입니다`) showName('황승빈')