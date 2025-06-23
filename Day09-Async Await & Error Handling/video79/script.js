let a=prompt("Enter first number")

let b=prompt("Enter second number")

if(isNaN(a) || isNaN(b) ){
    throw SyntaxError("Please enter a number only")
}

let sum= parseInt(a) + parseInt(b)

function main(){
    let x=1
    try {
        console.log("The sum is ", sum*x)
    } catch (error) {
        console.log("Error hogya bhai")
    }
    finally{
        console.log("files close ho rahi hai and db connection khatam hogya using finally clause")
    }

}

let c = main()
