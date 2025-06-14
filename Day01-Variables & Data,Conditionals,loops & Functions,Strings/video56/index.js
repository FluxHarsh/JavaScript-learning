console.log("Hello I am Conditional Tutorial")

let age = 18;
// let grace=2;
// age += grace
// console.log(age/grace)
// console.log(age)
// console.log(age-grace)
// console.log(age*grace)
// console.log(age**grace)

if (age != 18) {
    console.log("You can drive");
}

else {
    console.log("You Cannot drive");
}

let name = 15;

if (name > 10 && name < 20) {
    console.log("The age is between 10 and 20");
}

else {
    console.log("The age is not between 10 and 20");
}

let fruit = "apple"

switch (fruit) {
    case "banana":
        console.log("Banana is yellow")
        break;
    case "apple":
        console.log("Apple is red");
        break;
        default:
            console.log("Unknown Fruit");
}

let number="24"

if( number % 2 === 0 && number % 3 === 0  ){
    console.log("Number is divisible by 2 and 3" )
}

else{
    console.log("Number is not divisible by 2 and 3" )
}

let aayu="18"

let result = aayu > 17 ? "You can drive":"You cannot drive";
console.log(result);