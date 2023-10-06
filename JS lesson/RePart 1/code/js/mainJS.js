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