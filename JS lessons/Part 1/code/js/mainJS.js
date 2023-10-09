//lesson 1,2,3

console.log('lesson 1,2,3')
console.log(' ')

let age;
age = 15 + " years now";
const happyYear = 2008 + " happy birthday";
const day = 10;
const month = 04;
console.log(age +  " " + day +  " " + month +  " " + happyYear);

//true
if (true) {
    var apples = 5;
}
console.log(apples)

//False
//if (true) {
//   let banans = 5;
//}
//console.log(banans)

let userName = 'me';
let user = userName
console.log(user)

//lesson 4
console.log(' ')
console.log('lesson 4')
console.log(' ')

let number = 11
let boolean = true
let nameMy = null
let  notAall 
let none = 'notAall' / 10
let str = 'notAall'
let miniObj = {
    name:'Alex',
    age:15,
}
//type
console.log(typeof(number))
console.log(typeof(boolean))
console.log(typeof(nameMy + "it s null"))
console.log(typeof(notAall))
console.log(typeof none )
console.log(typeof str )
console.log(typeof miniObj )

let notNumb=11
console.log(notNumb)
console.log(typeof notNumb)

notNumb = String(notNumb)

console.log(notNumb)
console.log(typeof notNumb)

//lesson 5
console.log(' ')
console.log('lesson 5')
console.log(' ')

//operetion
x = 2**6
console.log(x)
y=7%3
console.log(y)
let hi = 'hi I am Alex and my age is ' + 15
console.log(hi)
r = '10';t = '1'
console.log(r + t)
console.log(+r + +t)
b =10
b = ++b
i =10
i = i++
console.log(b)
console.log(i)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log(true && true)
console.log(true && false)

console.log(!true)

let name
console.log(name ?? 'Dont have name')
name = 'Alex'
console.log(name ?? 'Dont have name')

//lesson 6
console.log(' ')
console.log('lesson 6')
console.log(' ')

let massage = 'Hi freelancer!'

if (true) {
    console.log(massage)
}else {
    console.log('Hi people!')
}

if (false) {
    console.log(massage)
}else {
    console.log('Hi people!')
}
let nameMasage = (true) ? 'Hi Alex' : 'Hi Nomex';
console.log(nameMasage)
let nameMasage2 = (false) ? 'Hi Alex' : 'Hi Nomex';
console.log(nameMasage2)

//lesson 7
//cycle
console.log(' ')
console.log('lesson 7')
console.log(' ')

let nums = 0
while (nums <= 5) {
    console.log(nums);
    ++nums;
}
console.log(' ')

for (let numbs = 0; numbs <= 5;numbs++) {
    console.log(numbs)
}
console.log(' ')
let numbs = 0
for (; numbs <= 5;numbs++) {
    console.log(numbs)
    if(numbs == 2) break;
}
console.log(`Job finished number = ${numbs}`)

console.log(' ')
let numbe = 0
for (; numbe <= 5;numbe++) {
    if(numbe == 2) console.log('We skip number 2');
    if(numbe == 2) continue;
    console.log(numbe)
}

//lesson 8
console.log(' ')
console.log('lesson 8')
console.log(' ')

function ShowMassage() {
    console.log('Massage func!')
}
ShowMassage();

function userNameg(name,nameuser) {
    nameless = name + ' ' + nameuser
    console.log('Your user name is ' + nameless)
}
userNameg('Alex','Nomex');

let funcItem = (a,b) => {
    return a+b
}

console.log(funcItem(1,10))

setTimeout(ShowMassage,3000)
h= 0
function clock () {
    console.log(h + 's after server start')
    h++
}

setInterval(clock,1000)
