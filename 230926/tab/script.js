const tab = document.querySelectorAll(".tab-button")
console.log(tab)

const item = document.querySelectorAll(".tab-item")
console.log(item)

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', () => {

        for (let i = 0; i < tab.length; i++) {
            tab[i].classList.remove('selected')
            item[i].classList.remove('show')
        }

        tab[i].classList.add('selected')
        item[i].classList.add('show')
    })
}

// tab.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         tab.forEach((item.idx) => {
//             item.classList.remove('selected')
//             tab[idx].classList.remove('show')
//         })
//         tab.classList.add('selected')
//         item.classList.add('show')
//     })
// })