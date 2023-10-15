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
