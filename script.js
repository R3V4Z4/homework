// 1 exercise

let number1 = 100;

if (number1 < 50) {
  console.log("less than 50")
} else if (number1 > 20) {
  console.log("more than 20")
} else{
  console.log('error')
}

// 2 exercise

let name1 = "mariam";
let name2 = (name1 = "mariam" ? 'true' :'false');
console.log(name2);

// 3 exercise

let userName = "mariam";

switch (userName) {
  case "mariam" :
    console.log("true");
    break;
  default :
    console.log ("false");
}
