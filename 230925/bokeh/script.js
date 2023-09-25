const container = document.querySelector(".container")

console.log(container)

const bokeh = document.createElement('span')
bokeh.classList.add('bokeh')
container.append(bokeh)


function randomGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}    

for(let i = 0; i < 50; i++){
    
    const bokeh = document.createElement('span')
    bokeh.classList.add('bokeh')
    bokeh.style.top= `${randomGenerator(0,100)}%`
    bokeh.style.left = `${randomGenerator(0,100)}%`
    bokeh.style.animationDuration = `${randomGenerator(10,30)}s`
    // bokeh.style.backgroundColor = 
    bokeh.style.opacity = Math.random()
    container.append(bokeh)

}

