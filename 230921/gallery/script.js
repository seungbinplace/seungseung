/**
 * .image : 이미지들
 * .show : 크기를 제어하는 클래스
 */

const image= document.querySelectorAll(".image")
console.log(image)

for(let i = 0; i < image.length; i++){
    
    console.log(image[i])
    
    
    image[i].addEventListener('click', () => {

        // 클래스 제거
            for(let i = 0; i < image.length; i++){
                image[i].classList.remove('show')
            }

        // 클래스 추가
        image[i].classList.add('show')
    }

)}
