console.log("Hey This is tutorial ")

let a =5;
//a=a+1
let b=6;
let c=10;
let _d=1;
let e="Harsh";

console.log( a + b +c)
console.log( typeof a,typeof b, typeof e)

{
    let a=66;
    console.log(a)
}
console.log(a)

let p ="Harsh Bhai";
let q =1;
let r =3.55;
const x = true;
let y =undefined;
let z =null;

console.log(p,q,r,x,y,z)

console.log(typeof p,typeof q,typeof r,typeof x,typeof y,typeof z)

let o = {
    "name": "HARSH",
    "job code": 5600,
    "is_handsome": true
}
console.log(o);

o.salary = "100crores";
console.log(o);

o.salary = "500crores";
console.log(o)

var s = "Hello, I am learning JS";
var result = s +2025;
console.log(result);

console.log(typeof s)
console.log(typeof result)

const person= {
    "name" : "Harsh",
    "age" : 18,
};
person.age=19


person.country="India";
console.log(person);

//problem5
const dictionary ={
  algorithm:  "a step-by-step procedure to solve a problem",
  variable:   "a named storage for data",
  recursion:  "a function that calls itself",
  prototype:  "the mechanism by which JS operates inherit features",
  closure:    "a function plus the lexical scope it was declared in"
};

for(let word in dictionary) {
    console.log(`${word}: ${dictionary[word]}`);
}


