let arrYwo = [
    'alex',
    {
        age:15,
        name:'alex',
    },
    function() {
        console.log('Hi I am Alex!')
    }
]
console.log(arrYwo[1].name)
console.log(arrYwo[0])
arrYwo[2]()

const matrix = [
    [3,2,1],
    [1,2,3],
]
console.log(matrix[1][0])
console.log(matrix.length)
console.log(matrix[1].length)

let x = matrix
console.log(x)

x.length = 1

console.log(matrix)
console.log(x)

console.log(arrYwo)
arrYwo.push('boris')

console.log(arrYwo)
arrYwo.shift()

console.log(arrYwo)
arrYwo.pop()

console.log(arrYwo)
arrYwo.unshift('alex')

console.log(arrYwo)
arrYwo.push('boris')

console.log(arrYwo)

//part 2

const num = [
    11,
    1,
    15,
]

num.splice(0,2)
console.log(num)

num.splice(0,0,'...',17,16)
console.log(num)

num.splice(-1,1)
console.log(num)

let num2 = num.slice()
console.log(num2)

let num3 = num.concat('...',1)
console.log(num3)

console.log(num3.indexOf(15))
console.log(num3.includes('...'))
console.log(num3.includes('...',5))

let num4 = num3.find(function (item) {
    return item === 16
})
console.log(num4)

let num5 = num3.findIndex(function (item) {
    return item === '...'
})
console.log(num5)

let num6 = num3.filter(function (item) {
    return item >= 1
})
console.log(num6)

let info = ['Alex','Boris','Andriyovich']
console.log(info.sort())

let numbers = [11,8,22]

console.log(numbers.sort())

function numbersSort(a,b) {
    console.log(`compare ${a} and ${b}`)

    return a - b
}
console.log(numbers.sort(numbersSort))

console.log(numbers.reverse())

let arr = [11,22,33]

let result = arr.map(function (item,index,array) {
    return item
})
console.log(result)

let line = 'Alex,Boris,15';

info = line.split(',')
console.log(info)

let info2 = line.split(',', 2)
console.log(info2)

console.log(typeof info2)

const obj = {}

console.log(typeof obj)

itIsArray(info2)
itIsArray(obj)

function itIsArray(arr) {
    if (Array.isArray(arr)) {
        console.log('It is Array!')
    } else {
        console.log('It is not Array!')
    }
}

console.log(info2)

info2.forEach(showItem)

function showItem(item) {
    console.log(item)
}

let arrOne = ['Alex',' Boris',' Andriyovich',' 15 years']

console.log(arrOne)

let value = arrOne.reduceRight(function (previousValue, item, index, array) {
    return item + previousValue
}, '')
console.log(value)