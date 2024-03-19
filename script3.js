"use strict";

// task 1

function fun1 (...numbers) {
  let sum = 0
  for (let num of numbers) {
    sum += num
  }

  return sum
}

let sum1 = fun1(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(sum1);


// task 2 

let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: true
}

// for(let el in user) {
//   if(user.isloggedin) {
//     console.log(`${user.firstname} ${user.lastname}`)
//   } else {
//     console.log(false)
//   }
// }

function fun2 (arr) {
  for (let el in arr) {
    if (arr.isloggedin) {
      return(`${arr.firstname} ${arr.lastname}`)
    } else {
      return"false"
    }
  }
}


let resultFun2 = fun2(user)
console.log(resultFun2)



// task 3


// function fun3 (...numbers) {
//   console.log(Math.max(...numbers))
  
// }

// fun3([1, 2, 3,])

// let numbers1 = ([1, 2, 3, 4]);
// console.log(Math.max(numbers1));



function fun3 (numbers) {
  let el3 = Math.max(...numbers);
  return el3;
}

let resultFun3 = fun3([2, 3, 4]);
console.log(resultFun3);



// task 4

function fun4(x)  {
  if(x % 2 == 0) {
    return "this number is even"
  } else { 
    return "this number is odd"
  }
}

let resultFun4 = fun4(2)
resultFun4 =fun4(3)
console.log(resultFun4)


// task 5

let array = [1,2,3,4,5];


for (let element of array) {
  console.log(element);
}


// task 6

let fun6 = (age) => {
  let userAge =
    age > 18
    ? "srulwlovani"
    : "arasrulwlovani"
  return userAge
}

let resultFun6 = fun6(10)
resultFun6 = fun6(20)
console.log(resultFun6)
  


