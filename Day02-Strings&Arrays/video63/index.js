let arr=[1,2,3,4,"Harsh",5];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);

arr[1]=9
console.log(arr[1]);
console.log(typeof arr);  //arrays are obj in js

let num=[1,3,8,2]
console.log(num.toString())
console.log(num.join("-and-"))

console.log(num.pop())
console.log(num.shift())
console.log(num.push(4))
console.log(num.unshift(7))

console.log(delete(1))
console.log(arr.concat(num))
console.log(num.sort())
console.log(num.splice(2,2,14,15))
console.log(num.slice(1,2))
console.log(num.reverse())