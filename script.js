"use strict";

// task 1

for (let el = 5; el <= 100; el++) {
  console.log(el);
}

// task 2

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let el1 of array1) {
  if(el1 > 0 && el1 < 10) {
    console.log (el1)
  } 
}


// task 3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let el2 of array2) {
  
  if (el2 === 5) {
    console.log("არის") ;
    break;
  }
}



// task 4


let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let el3 of array3) {
  sum += el3;
}

console.log(sum)


// task 5

let array4= [1, 2, 3, 4, 5];
let sum1 = 0

for (let el4 of array4){
  sum1 += el4
}

console.log(sum1 / array4.length)

// task 6

let array5 = [1, 2, 3, 7, 6, 9];

for (let el5 of array5) {

  if (el5 === 7) {
  continue;
  }
  console.log(el5)
}

// task 7

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,  
  studentstatus: "active"
};

console.log(user.studentstatus)

// task 8

let user2 = {
  name: 'anna',
  age:  20,
  studentstatus: 'active'
}


if (user2.age < 18 && user2.studentstatus == "active") {
  console.log("hello user")
} else if (user2.name == "levani") {
  console.log("hello levani")
} else if (user2.studentstatus == "active" || user2.age < 25) {
  console.log("hello anna")
} else{
  console.log(error)
}

let user22 =
  user2.age < 18 && user2.studentstatus == "active"
    ? "hello user"
    : user2.name == "levani"
    ? "hello levani"
    : user2.studentstatus == "active" || user2.age < 25
    ? "hello anna"
    : "error";
console.log(user22);

// task 9

let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

for (let el6 of array6){
  if(el6 % 2 == 0){
    console.log(el6)
  }
}

// task 10

let users = [
  {username: 'giorgi', status: false},
  {username: 'levani', status: false},
  {username: 'anna', status: true}
]

for (let user of users) {
  if(user.status == true) {
    console.log(user.username)
  }
}



// task 11

let array7 = [32, 14, null, "40", 50];

for (let el7 of array7) {
  if (el7 % 5 === 0){
    console.log(el7)
  }
}

// task 12 

let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];

for (let el8 of array8) {
  for (let el0 of el8) {
    if (el0 > 0) {
      console.log(el0)
    }
  }
}










