//BOM
//PC settings info
console.log(navigator.userAgent)
//location
console.log(location)
//alert
//alert('Hello!')
//DOM

let body = document.body
let doc = document

console.log(body)
console.log(doc)

let bodyText = document.body.firstChild

console.log(bodyText)
console.log(body.childNodes)
console.log(body.hasChildNodes())

let bodyChild = body.childNodes

console.log(body.childNodes.length)

for (let i = 0; i < bodyChild.length; i++) {
    console.log(bodyChild[i])
}

console.log(body.parentNode)

console.log(body.children)

console.log(body.firstElementChild)

const titleMassif = document.body.querySelectorAll('h1.title')

const text = document.body.querySelector('#text')

console.log(titleMassif)

console.log(titleMassif[0])

console.log(text)

let num = 0

for (const item of bodyChild) {
    console.log(`item ${num}`)
    num++
    console.log(item)
}

console.log(
    body.querySelectorAll('.text')[0]
)

console.log(
    document.getElementById('text')
)

console.log(
    text.innerHTML
)
text.innerHTML = 'Life and job after that!'

let text2 = document.querySelector('.text2')
text2.outerHTML = `
<p id="text3" class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusamus.</p>
`

const newElement = document.createElement('div')

newElement.innerHTML = `
<p class='text' id='2'>Hi there!</p>
`
document.querySelectorAll('.text')[1].after(newElement)


let div1 = document.getElementById('div')

div1.insertAdjacentHTML(
    'afterbegin',
    `
    <p class='text' id='3'>Hi there v2!</p>
    `
)

let wrapper = document.querySelector('.wrapper')

wrapper.append(
    titleMassif[0],
    text,
    text3,
    document.getElementById('2'),
    document.getElementById('3'),
)

let title2 = titleMassif[0].cloneNode(true)

title2.innerHTML =
    `
    My name is Alex!
    `

wrapper.append(
    title2
)

console.log(text3.className)
text3.classList.add('yellow')

num = 1

for (let classs of text3.classList) {
    console.log(num)
    num++
    console.log(classs)
}

title2.style.color = 'blue'
title2.style.paddingTop = '20px'

console.log(title2.style.paddingTop)

console.log(getComputedStyle(title2))
console.log(getComputedStyle(title2).fontSize)

let h2PX = parseInt(getComputedStyle(title2).fontSize) // parseInt = only numbers

console.log(h2PX)