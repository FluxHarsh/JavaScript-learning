console.log("Hey this is video 57")

let a = 1

for (let i = 0; i < 5; i++) {
    console.log(a + i);

}

let obj = {
    name: "Harsh",
    role: "fullstackwebdev",
    company: "Flux_Harsh",
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)

}

for (const c of "Harsh") {
    console.log(c)

}

let i = 0

while (i < 5) {
    console.log(i)
    i++;
}

// let i = 10;
// do {
//     console.log(i)
//     i++;
// } while (i < 6);
