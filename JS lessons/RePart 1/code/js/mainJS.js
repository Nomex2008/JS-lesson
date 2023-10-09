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