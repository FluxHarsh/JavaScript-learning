//making a faulty calculator

let random = Math.random()
console.log(random)

let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "-": "+",
    "*": "**",
    "/": "*",

}


if (random > 0.1) {
    //Perform correct calculation as we want 10% accurracy
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    //Perform wrong operations
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
