"use strict";

// task 1

let array1 = [14, 150, "css", null, "javascript", 25];
let newArray1 = array1.map(function (el) {
  if (typeof el === "number") {
    return Math.pow(el, 2);
  } else if (typeof el === "string") {
    return el.toUpperCase();
  } else {
    return el;
  }
});

console.log(newArray1);

// task 2

let info = "good day";
let NewInfo = info.split(" ");
let NewInfo1 = NewInfo.slice(1, 2);
console.log(NewInfo1);

// task 3

function getLength(el3) {
  return el3.length;
}

let resultGetLength = getLength("saba");
console.log(resultGetLength);

// task 4

let answer = prompt("saqartvelos dedaqalaqi");

let correctAnswer = "tbilisi";

let lowAnswer = answer.toLowerCase();

if (lowAnswer === correctAnswer) {
  console.log("correct");
} else {
  console.log("not correct");
}

// task 5

let fruits = ["apple", "mango", "avocado", "kiwi"];

fruits.splice(-2, 1, "strawberry");
console.log(fruits);

// task 6

let array6 = [5, 25, 89, 120, 36];

array6.push("javascript", "python");
array6.unshift("html", "css");
console.log(array6);

console.log(array6.length);

let sliceArray6 = array6.slice(1, 8);
console.log(sliceArray6);

// task 7

let array7 = ["orange", "banana", "kiwi"];

console.log(array7.length);

array7.push("apple", "pineapple");
array7.unshift("watermelon");
console.log(array7);

console.log(array7.length);

array7.splice(2, 0, "mango");
console.log(array7);

let sliceArray7 = array7.slice(1, 6);
console.log(sliceArray7);

console.log(sliceArray7.length);

// task 8

let array8 = [1, 2, 3, 4, 5];

array8.splice(3, 0, "a", "b", "c");
console.log(array8);

// task 9

let array9 = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray9 = array9.map((el9) => el9 / 3);
console.log(newArray9);

// task 10

let array10 = [15, 100, 25, 10, 36];

array10.splice(3, 1);
console.log(array10);

// task 11

let array11 = [1, 2, 3, 4];

array11.splice(2, 1, "three");
console.log(array11);

// task 12

let array12 = ["hello1", 14, 24, "hello2"];

let filterArray12 = array12.filter((el12) => typeof el12 === "number");
console.log(filterArray12);

// task 13

let array13 = [1, 2, 3, 4, 5];
let sum = 0;
array13.forEach((el) => (sum += el));
console.log(sum);

// task 14

let languages = ["html", "css", "javascript", "python", "php"];

let filterLanguages = languages.filter((el14) => el14.length > 3);
console.log(filterLanguages);

// task 15

let words = ["Madrid", "rome", "Milan", "berlin"];

let filterWords = words.filter(
  (el15) => el15.includes("m") || el15.includes("M")
);

console.log(filterWords);

// task 16

let link = "https://google.com";

function linkInfo(item) {
  if (item.indexOf("https://") !== -1) {
    return "მოიცავს";
  }
  return "ar moicavs";
}

let result = linkInfo(link);
console.log(result);

// task 17

let array17 = [-1, -2, -3, 4];

let someArray17 = array17.some((el17) => el17 > 0);
console.log(someArray17);

// task 18

let string18 = "12345";
let array18 = string18.split("").map(Number);
let sum2 = 0;
array18.forEach((el) => (sum2 += el));
console.log(sum2);

// task 19

let array19 = [13, 18, 28].reduce((num1, num2) => num1 + num2);
console.log(array19);

// task 20

let array = [
  [2, -3, 5, 11],
  [1, -30, -11, 100],
  [-1, -3, -4],
].reduce((accumulator, curentValue) => accumulator.concat(curentValue), []);

let arrayFilter = array.filter((item) => item > 0);

console.log(arrayFilter);
