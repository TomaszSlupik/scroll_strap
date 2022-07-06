
const scrollTop = document.querySelector('.scrollTop')
let root = document.documentElement;
// const active = document.querySelector('.active')


const scrollBar = () => {
    const scroll = window.scrollY
    

    const lefttoScroll = document.body.getBoundingClientRect().height - window.innerHeight
    
    const scrollWidth = Math.floor((scroll/lefttoScroll) *100)

    root.style.setProperty('--scroll-width', `${scrollWidth}%`)


    if (scrollWidth > 100) {
        scrollTop.classList.add('active')
    } 
    else {
        scrollTop.classList.remove('active')
    }
}

// const activeBtn = document.querySelector('btn')

const up = () => {
 window.scroll({
        
     top:0
        
 })
}


window.addEventListener('scroll', scrollBar)
scrollTop.addEventListener('click', up)

