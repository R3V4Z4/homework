"use strict";

// task 1

let newElement = document.getElementsById("div");
newElement.classlist.add("wraper");

let newImg = document.createElement("img");
newImg.innerText = "alt=image";
newImg.setAttribute("src",  "https://i.pinimg.com/originals/51/f0/7a/51f07a9274c577f6df844fe1f579fe0c.png")
newElement.appendchild(newImg);

let newElemnt2 = document.createElement("h2");
newElement2.classlist.add("title");
newElement2.innertext = "image title";
newElement2.style.fontSize = "30px";
newElement2.style.color = "red";
newElement.appendchild(newElement2);

// task 2

let container = document.querySelector('div2');

container.forEach(function(el) {
  let newParagraph = document.createElement("p");
  newParagraph.classlist.add("text");
  newParagraph.innerText = "hello";
  el.appendchild(newParagraph);
});

