console.log('runnig...')
const dot = document.querySelector('.dot')
console.log(dot)

window.addEventListener('mousemove', (event) => {
//     console.log(`X좌표 : ${event.clientX}`)
//     console.log(`Y좌표 : ${event.clientY}`)
//     dot.style.left =
//     dot.style.top = event.clientY 
//     console.log(`dot의 width : ${dot.clientWidth / 2}`)
//     console.log(`dot의 height : ${dot.clientHeight / 2}`)
    requestAnimationFrame(()=>{
        mousemove(event)
    })
})

const mousemove = (event) => {
    dot.style.left =event.clientX - (dot.clientWidth / 2) + 'px';
    dot.style.top = event.clientY- (dot.clientHeight / 2) + 'px';
}

window.addEventListener('click', () => {
    const span = document.createElement('span')
    span.classList.add('bubble')
    dot.append(span)

    // 요소를 삭제하는 메소드
    // span.remove()

    setTimeout(()=>{
        span.remove()},1000)
})