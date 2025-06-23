let array = [1, 3, 5, 7, 11];
//let newarr=[]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     newarr.push(element**2)
// }

// console.log(newarr)

let newArr = array.map((e, index, array) => {
    return e ** 2
})

console.log(newArr)
const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}
console.log(array.filter(greaterThanSeven))

let array2 = [1, 2, 3, 4, 5, 6]

const red = (a, b) => {
    return a + b
}

console.log(array2.reduce(red))