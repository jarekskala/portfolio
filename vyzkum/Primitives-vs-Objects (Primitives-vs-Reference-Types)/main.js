'use strict'

let age = 30;
let oldAge = age;
age = 31;

console.log(age);       // 31
console.log(oldAge);    // 30





const jonas = {
  name : 'Jonas',
  age: 30
}

const me = jonas;

me.age  = 31;  

console.log(jonas.age);    // 31, předpokládali bychom 30, protože jonase jsme neměnili.
console.log(me.age);       // 31
