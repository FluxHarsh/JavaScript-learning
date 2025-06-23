// Strings

let name="Harsh";
console.log(name);

let sentence=`My name is "Harsh" learning webdev`;
console.log(sentence);

let a=`i am using string innterpolation ${name}`;
console.log(a);

let b=" \r Using \t Escape \" sequence \n characters"
console.log(b);

//String properties

let realname="    Harsh   Bhai   ";
console.log(realname.length);
console.log(realname.toLocaleLowerCase());
console.log(realname.toUpperCase());
console.log(realname.slice(0,5));   //important
console.log(realname.slice(8));
console.log(realname.replace("Bhai" , "Bhau"));
console.log(realname.concat(name,"\tconcating both the names"));
console.log(realname.trim());
console.log(realname[0]);

//practice set

console.log("harsh\"".length)

//done


