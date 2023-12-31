console.log('app');

//문서안에서 title이라는 아이디를 가진 요소를 찾아서 text라는 변수에 담은 상황
const text = document.getElementById('title');
console.log(text);
text.style.color = 'red';
// font-size: 1rem;
const size = 20
// DOM을 제어한다. = html 요소들을 추가, 수정, 삭제...
text.style.fontSize= size + 'px'; //문자열 결합방식
text.style.fontSize= `${size}px`; //템플릿 리터럴 방식

//텍스트 내용을 바꾸는 방법
text.textContent='바뀐 내용';
text.innerHTML = '이렇게도 바꿈';
// HTML요소를 추가할 수 있는 방식
text.innerHTML='<span>이렇게 태그를 넣어서 바꿈</span>'

// graph 라는 아이디를 통해서 element 요소를 가져옴
const barGraph= document.getElementById('graph');

// graph 요소에서 data-value 값을 가져옴
const graphValue = barGraph.dataset.value;

// graph 요소의 폭을 graphValue만큼 조정
barGraph.style.width = graphValue + '%';

// graph요소의 텍스트를 graph 값으로 넣음
barGraph.textContent=`${graphValue}%`

// graph 요소의 컬러, 폰트 사이즈 조정
barGraph.style.color='white';
barGraph.style.fontSize='30px';

console.log(barGraph, graphValue);