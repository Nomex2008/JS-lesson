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