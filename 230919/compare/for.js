// console.log('for문 연습')

// // for(초기화 변수, 조건, 증감)
// // i = index번호
// for(let i= 0; i <=10; i++){
//     console.log(i);

    // for(let i = 0; i< 10; i++){
    //     console.log(`i: ${1}`)
    //     for(let j = 0; j < 10; j++){
    //         console.log(`j번째: ${j}`)
    //     }
    // }

// const pokemon = ['피카츄', '이브이','라이츄','파이리','꼬부기', "야통이","삼색이","연님이","래기"]

// for(let i = 0; i < pokemon.length; i++)
//     console.log(pokemon[i])


const style = 'background-color:red; color:white; padding: 2px 8px; font-size: 18px; font-weight: bold;'

    for(let i = 1; i < 10; i++){
     console.log(`%c${i}단`, style);
    for(let j = 1; j <= 9; j++){
        console.log(`%c${i} x ${j}= ${i * j}`,style)
}
}

let star = '';
for(let i = 0; i < 5; i++){
    // star = star + '*';
    star += '*'
    console.log(star)   
}