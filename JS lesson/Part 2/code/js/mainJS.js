//lesson 9
console.log('')
console.log('lesson 9')
console.log('')

//object
let userInfo = new Object()
let literallObject ={
    name:'Alex',
    age:15,
    nickname:'Nomex',
    "likes js":true,
    for:false,
}
console.log(literallObject)
console.log(literallObject.name)
console.log(literallObject["likes js"])

let key = 'age'
console.log(literallObject[key])
console.log(literallObject.for)

let id =Symbol['id'];
let usInfo = {
    name:'Noname',
    age:undefined,
    [id]:'else',
};
console.log(usInfo)

let userAlex = {
    name:'Alex',
    age:15,
    nickname:'Nomex',
    adress: {
        city:'Rivne',
        street:'Kylik and Gudashik',
    },
    "likes js":true,
    showInfo() {
        console.log(`Name ${this.name}, ${this.age} years, nickname ${this.nickname}`)
    },
};
console.log(userAlex);
console.log(userAlex.adress.city);

let vasia = {
    name:'Vasia',
};
console.log(vasia);
vasia.age = 32;
console.log(vasia);
delete vasia.age;
console.log(vasia);
vasia.age = 40;
console.log(vasia);
let volodia = Object.assign({},vasia)
volodia.age =13
volodia.name ='volodia'
console.log(volodia)
console.log(volodia?.adress?.street)

for (let key in userAlex) {
    console.log(key)
    console.log(userAlex[key])
}
userAlex.showInfo()

//lesson 10
console.log('')
console.log('lesson 10')
console.log('')

//number

let milion =1e6
console.log(milion)
let notmilion =1e-6
console.log(notmilion)
let num = 5.8
console.log(num)
console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))
let Zerohungred = 8.4567
console.log(Math.round(Zerohungred * 10) / 10)
console.log(Zerohungred.toFixed(3))

console.log(0.1+0.2 + Number.EPSILON)

let px = '159.32px'
let pxn = parseFloat(px)
console.log(px)
console.log(typeof px)
console.log(pxn)
console.log(typeof pxn)

let rand = Math.random()
let max = Math.max(1,2,3,4,5)
console.log(rand)
console.log(max)

//lesson 11
console.log('')
console.log('lesson 11')
console.log('')

//string

myName ='Alex'
console.log(`${myName} is my name`)

let hi = `Hi
I
am 
Alex !`

console.log(hi)
console.log(hi.length)
console.log(hi[0]+hi[1]+hi[hi.length-1])

console.log('A'>'a')
console.log('a'>'A')

//lesson 12
console.log('')
console.log('lesson 12')
console.log('')

let firstMassive = [
    1,2,3,4,5
]
console.log(firstMassive)

let megaMasive =[
    [2,3,4],
    [1,0,-1],
    [5,6,7]
]

console.log(megaMasive[2])
console.log(megaMasive.length)
megaMasive[2] = 'alex'
console.log(megaMasive)

megaMasive.shift()
console.log(megaMasive)
megaMasive.unshift(1)
console.log(megaMasive)
megaMasive.concat(1)
console.log(megaMasive)

console.log(megaMasive.includes(1))
let sort = [
    22,
    11,
    33,
]
console.log(sort.sort((a,b) => a-b))

let str = [
    'asasa,sasasa,dfdfdf'
]
let afterSplit = str[0].split(',');
console.log(afterSplit)

if(Array.isArray(afterSplit)){
    console.log('Is masive!')
} else {
    console.log('Is not masive!')
}

//lesson 13
console.log('')
console.log('lesson 13')
console.log('')

//DOM

//alert('hi')
//confirm('You wont try ')
//prompt('your age')

let copyBody =document.body
let first = copyBody.firstChild
console.log(copyBody)
console.log(first)

const ok = document.querySelectorAll('.ok')
const idshs = document.querySelectorAll('#IAMALEX')
console.log(ok)
console.log(idshs)
const idsh = document.querySelector('#IAMALEX')
console.log(idsh)

if (idsh.matches('div#IAMALEX.ok')) {
    console.log(1)
}else(console.log(0))

let idshText = idsh.innerHTML
console.log(idshText)
idsh.innerHTML = 
`Hi<p class=" p">I am Alex</p> <h2>I am Junior</h2>`
let idshTexe = idsh.innerHTML
console.log(idshTexe)

let OuterHTML = idsh.outerHTML
console.log(OuterHTML)

let textCon = idsh.textContent
console.log(textCon)

let nextSub = idsh.nextSibling
console.log(nextSub)

let newElement = document.createElement('div')
console.log(newElement)

newElement.innerHTML = 
`
<div class='yellow'>Yellow world!</div>
`
console.log(newElement)

let createText = document.createTextNode(`Hi it's my text`)
console.log(createText)

elementTextHI = document.querySelector('#IAMALEX')
console.log(elementTextHI)

elementTextHI.after(createText)
elementTextHI.before(newElement)

createTextFront = document.createTextNode(' Frontend developer!')
elementTextHI.append(createTextFront)

createTextFrontProp = document.createTextNode(' Hmmm?')
elementTextHI.prepend(createTextFrontProp)

let createText2helper = document.querySelector(`#createText2Helper`)
console.log(createText2helper)

createText2helper.insertAdjacentHTML(
    'afterend',
    `<div class='text2' id='#text2'>It's my text two!</div>`
)

let text2 = document.querySelector(`.text2`)
console.log(text2)

let createText3 = document.querySelector(`#text3`)
console.log(createText3)

text2.after(createText3)

let cloneCreateText3 = createText3.cloneNode(true)
createText3.after(cloneCreateText3)

cloneCreateText3.remove()

let IAMALEX = document.querySelector('#IAMALEX')

let IAMALEXClassName =IAMALEX.className
console.log(IAMALEXClassName)

IAMALEX.classList.add('red')

let greenText = document.querySelector('#green')
greenText.style.color = 'green'
greenText.style.fontSize = '22px'
greenText.style.textAlign = 'center'

let greenTextGetCompStylle = getComputedStyle(greenText)
console.log(parseInt(greenTextGetCompStylle.fontSize))
