console.log('')
console.log('Lesson 14')
console.log('')

let mainElement = document.documentElement
let mainElementWidth = mainElement.clientWidth
let mainElementHeight = mainElement.clientHeight

console.log(mainElement)
console.log('')
console.log(mainElementWidth)
console.log(mainElementHeight)

console.log('')

let mainElementWidthIner = window.innerWidth
let mainElementHeightIner = window.innerHeight

console.log(mainElementWidthIner)
console.log(mainElementHeightIner)

let windowScrollTop = window.pageYOffset
console.log(windowScrollTop)

function scroll() {
    window.scrollTo(0,500)
    console.log(window.pageYOffset)
}
scroll()
mainElement.scrollIntoView(true)
window.scrollTo(0,500)

let objectBlock = document.querySelector('.block')
console.log(objectBlock)

elementOffsetLeft = objectBlock.offsetLeft
console.log(elementOffsetLeft)
elementOffsetTop = objectBlock.offsetTop
console.log(elementOffsetTop)

elementOffsetWidth = objectBlock.offsetWidth
console.log(elementOffsetWidth)
elementOffsetHeight = objectBlock.offsetHeight
console.log(elementOffsetHeight)

elementscrollWidth = objectBlock.scrollWidth
console.log(elementscrollWidth)
elementscrollHeight = objectBlock.scrollHeight
console.log(elementscrollHeight)

let getElementByAlect = objectBlock.getBoundingClientRect()
console.log(getElementByAlect)
let getElementByAlectTop = objectBlock.getBoundingClientRect().top
console.log(getElementByAlectTop)

const elem =document.elementFromPoint(100,100)
console.log(elem)

console.log('')
console.log('Lesson 15')
console.log('')