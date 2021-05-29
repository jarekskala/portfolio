'use strict'

// Primitive types
let lastName = "Williams";
let oldLastName = lastName; 
lastName = "Davis"; 

console.log(oldLastName);  // [Williams]
console.log(lastName);     // [Davis] 



// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Smithova",
  age: 27
}

let marriedJesica = jessica; 
marriedJesica.lastName = "Davis"; 

console.log(jessica.lastName);        // [Davis] 
console.log(marriedJesica.lastName);  // [Davis]  

// marriedJesica = {}; 

// console.log(marriedJesica); 
// console.log(jessica);



// copying object
const jessica2 = {
  firstName: "Jessica",
  lastName: "Smithova",
  age: 27,
  family: ['Alice, Pepa'] 
}

// Mergování prázdného {} a objectu jessica2 
const jessicaCopied = Object.assign({}, jessica2);

jessicaCopied.age = 30; 

jessicaCopied.family.push('Matyas'); // tohle se projeví do obou objectu, protoze Object.assign({}, jessica2); jede jen na prvni urovni zanoreni
jessicaCopied.family.push('Dan    '); // tohle se projeví do obou objectu, protoze Object.assign({}, jessica2); jede jen na prvni urovni zanoreni

console.log(jessica2);
console.log(jessicaCopied); 