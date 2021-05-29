'use strict'

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    }
  },
 
  order: function(starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  delivery: function({time = 20, count = 5, withBox = false}) { 
    console.log(`time ${time}`); 
    console.log(`count ${count}`);  
    console.log(`width box: ${withBox}`);   
  }
};

// Immediately destructuring.
// Toto používají mnohé knihovny a je vhodné to použít, když už máš mnoho argumentů.  
// Nezáleží na pořadí argumentu 
restaurant.delivery({ 
  count: 5,
  withBox: true
}); 

/* 
@ Základní destructuring. Je nutno psát názvy properties, které budou zároveň nové proměnné.
*/
const {name, openingHours, categories} = restaurant; 
// console.log(name, openingHours, categories);     // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

/* 
@ Destructuring, kdy si určíme jak chce aby se variables jmenovaly.
*/
const {name:mainName, openingHours:mainHours, categories:mainCategories} = restaurant; 
// console.log(mainName, mainHours, mainCategories);  // Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]


/*
@ Nastavení default pro případ, že by property neexistovala + opět destructuring, kdy si určíme jak chce aby se variables jmenovaly.
*/
let {menu = [], startMenu: starters = [] } = restaurant;
// console.log(menu);   // [] 
// console.log(starters);      //(4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]


/*
@ Mutating variables
*/
// Meníš variables hodnotama z objectu.

let a = 111;
let b  = 999;

const obj = {a:23, b: 7, c: 14};  // parametry objectu musí mít stejný název jako měněné proměnné.  
({a, b} = obj);                   // Používá se syntax obalení do závorek. 

// console.log(a);   //23
// console.log(b);   // 7 


/*
@ Nesting destructuring
*/
// Klasická deklarace zanořeného openu
const {thu:{open}} = restaurant.openingHours; 
// console.log(open);  // 12 

// Deklarace s vlastní volbou názvu proměnné zanořenému openu. 
const {thu:{open:o, close:c}} = restaurant.openingHours;   
// console.log(o);     // 12
// console.log(c);     // 22

// Nakonec ukázka hraní si kombinací
const {thu:utery, thu:{open:y, close:z}} = restaurant.openingHours;
// console.log(utery);                     // {open: 12, close: 22}
// console.log(y);     // 12
// console.log(z);     // 22 
 


