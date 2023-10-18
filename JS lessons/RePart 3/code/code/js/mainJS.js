const windowHeight = document.documentElement

console.log(windowHeight.clientHeight)
console.log(windowHeight.clientWidth)

console.log(window.innerHeight)
console.log(window.innerWidth)

console.log(document.body.clientHeight)

console.log(window.pageXOffset)
console.log(window.pageYOffset)

addEventListener('scroll', onScrollPage)

function onScrollPage() {

    console.log(window.pageYOffset)
}

const btn = document.getElementById('btn')

console.log(btn)
btn.addEventListener('click',/*btnClick*/btnClick2)

function btnClick() {
    window.scrollTo({
        top:2000,
        left:0,

        behavior:'smooth',
    })
}
let text = document.getElementById('text')
function btnClick2() {
    text.scrollIntoView({
        behavior:'smooth',
    })
}

console.log(text.offsetParent)

console.log(btn.getBoundingClientRect())
console.log(btn.getBoundingClientRect().bottom)

console.log(document.elementFromPoint(/*width*/400, 10))