//console.log('sriptrunning...')
/**
 * 비교 연산자
 * 두 값이 같은지, 다른지, 큰지, 작은지 판단
 */

//let x = 1;
// x와 1이 같다

//console.log(x == 1); // true, x와 1이 같다
//console.log(x === 1); //true, x와 1이 같다

// !(not) 연산자
//console.log(x !=1); // false, x와 1이 다르다
//console.log(x !== 1); //false x와 1이 다르다

//  자바스크립트는 등호 3개(===)를 기본으로 비교한다고 생각하는 것이 좋다
//console.log(1 == '1'); // true, ???
//console.log(1 === '1'); //false, 값의 타입까지 같은지 비교

//console.log(x > 1); // false, x가 1보다 크다
//console.log(x >= 1); //true, x가 1과 같거나 크다
//console.log(x < 1); // false, x가 1보다 작다
//console.log(x <=1); //true, x가 1보다 작거나 작다

/**
 * if문(조건문)
 * 조건이 들어오면, true, false, 혹은 작은지 큰지 같은지 등을 판단해서 실행하는 문법
 */

 let value = '강아지';

//  value가 10보다 크면 실행
if(value>10){
    console.log(`${value}는 10보다 큽니다`)
} else if (value === 10){
    console.log(`${value}는 10과 같습니다`)
} else if (value < 10){
    console.log(`${value}는 10과 작습니다`)
} else{
    console.error('숫자를 입력해주세요')
}

// if문의 참(true)일때 실행
// value의 자료타입이 string(문자형)인지 체크
if(typeof value === 'string'){
        console.log('문자형입니다')
} else{
    // else 거짓(false)일때 실행
    console.log('숫자형입니다')
}

// 짜장면은 7천원, 짬뽕 9천원
let money = 8000

if(money<9000){
    console.log('짜장면을 먹을 수 있습니다')
} else{
    console.log('짬뽕을 먹을 수 있습니다')
}
// 3항 연산자
money < 9000 ? console.log('짜장면') : console.log('짬뽕')