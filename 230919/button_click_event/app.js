const friends = ['짱구', '흰둥이', '철수', '훈이', '유리', '맹구', '짱아']


console.log(`친구들은 총 ${friends.length}명입니다`);

console.log(friends[1]);

friends.pop();

friends.push('짱아');
console.log(friends);

//for 문
//for(초기화 변수; 조건; 증가/감소연산자){
    //실행
//}

for(let i = 0; i < friends.length; i++){
     console.log(`${friends[i]}는 ${i}번째`);
}


const add = (x) => {
    return console.log(x * 2);
}

const numbers = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length ; i++){
    // console.log(numbers[i])
    add(numbers[i])
}

const showName = (name) => {
    return console.log(`제 이름은 ${name} 입니다`)
    console.log('테스트완료')
    //리턴 아래에 있는 내용은 실행되지 않는다
}


showName('황승빈')

// friends = ['짱구', '흰둥이', '철수', '훈이', '유리', '맹구', '짱아'];

// friends의 내용을 for문으로 차례대로 꺼내 showName 함수에 전달
for(let i = 0; i < friends.length; i++){
    showName(friends[i]);
}