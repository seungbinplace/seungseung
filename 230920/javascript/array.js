// 배열

const number = [1, 2, 3, 4, 5, 6]
const animal = ['고양이', '강아지', '코끼리']

// todo: 변수명 일치 시킬것
console.log(number.length)

// 객체, object
const classRoom = {
    number: '202',
    students: '20',
    aircon: true,
    computer: true,
    pokemon: ['피카츄', "꼬부기"],
    func: () => {
        console.log('함수도 담을 수 있다')
    }
}
// 객체에는 배열도 담을수 있다.
console.log(classRoom.pokemon)
console.log(classRoom.pokemon[0])

// 객체에 대한 함수 실행
classRoom.func()

// classRoom 객체에서 number라는 키를 이용해 값을 출력한 상황 
classRoom.number = '300'
console.log(classRoom.number)
console.log(classRoom["students"])

// 점심메뉴

const lunch = [
    {name: "짜장면", cost: 7000},
    {name: "짬뽕", cost: 8000},
    {name: "김밥", cost: 3500},
    {name: "콩나물국밥",cost: 6000}
]

console.log(lunch[0].name)
console.log(lunch[0]["name"])

console.log(lunch[3].cost)
console.log(lunch[3]["cost"])

// for - 반복문
//for(초기화; 조건; 증가/감소){
    //반복해서 해야할 일
//}

let totalCost= 0;

// 리스트
const list = document.getElementById('list')

for(let i = 0; i < lunch.length; i++){
    // console.log(i)
    console.log(lunch[i]["name"]);
    console.log(lunch[i].cost);

    // number.toLocaleString('ko-kr')로 적어주면, 현지 통화 기준으로 한국식에 맞춰 천단위 구분자를 표현해준다.
    
    console.log(`${lunch[i].name}의 가격은 ${lunch[i].cost.toLocaleString('ko-kr')}원 입니다`)

    //  console.log(lunch[0].cost+lunch[1].cost+lunch[2].cost
    //     +lunch[3].cost) === totalCost

    // totalCost = totalCost + lunch[i].cost
    totalCost += lunch[i].cost
    // list.innerHTML += `<li>${lunch[i].name}: ${lunch[i].cost}</li>`

    // document.body.innerHTML += `<p>${lunch[i].name} : ${lunch[i].cost}</p>`
    document.body.querySelector('#list').innerHTML += `<li>${lunch[i].name} : ${lunch[i].cost}</li>`
    
        
    }
    
    console.log(totalCost)
    // console.log(`메뉴단가의 총 합: ${totalCost} 원`)
    
 