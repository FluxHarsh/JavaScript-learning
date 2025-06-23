

setTimeout(() => {
    console.log("This is an settimeout function")
}, 0);


console.log("Hello i am in console function")
console.log("Heloo i am console2 function")


const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harsh", fn);
    document.head.append(sc)
}



loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )