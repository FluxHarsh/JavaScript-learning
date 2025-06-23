let age = prompt("Enter your age");
age = Number(age);

if (age < 0) {
  console.error("Age cannot be negative!");
} else if (age >= 18) {
  alert("You can drive");
} else {
  alert("You cannot drive");
}

let repeat = confirm("Do you want to enter the age again?");
if (repeat) {
  age = prompt("Enter your age");
  age = Number(age);

  if (age < 0) {
    console.error("Age cannot be negative!");
  } else if (age >= 18) {
    alert("You can drive");
  } else {
    alert("You cannot drive");
  }
}

let num=prompt("Enter a number");
num =Number(num);

if (num>4){
    window.location.href="https://www.google.com";
}

let color=prompt("Enter a background color (e.g. yellow,red ,etc)");
document.body.style.backgroundColor=color;