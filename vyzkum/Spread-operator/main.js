'use strict'

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
 
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Zde je tvá oblibená pasta složená z ${ing1}, ${ing2} a ${ing3}`); 
  }
}; 


/* 
@ 1. Využitelnost pro rozšířeni pole
*/  
const arr = [7,8,9];
const arr2 = [arr, 'a další']; 
// console.log(arr2); 

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);               // (4) ["Pizza", "Pasta", "Rissoto", "Gnocci"]


/*
@ 2. Využitelnost v argumentech funkce:
*/
// const arr = [7, 8, 9];  
// console.log(...arr);    // 7 8 9
// console.log(7,8,9)     //  7 8 9  -  Je to stejné jako když napíšeme řádek výše 


/* Kopírování pole*/
const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);            // (3) ["Pizza", "Pasta", "Rissoto"] 
 

/* 
@ Mergování pole
*/  
const mergeArr = [...restaurant.startMenu, ...restaurant.mainMenu];  
// console.log(mergeArr);                                         //(7) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Rissoto"] 


/*Spread funguje na všechny ITERABLES*/
// Iterables jsou arrays, strings, maps, nebo sets 
const str = 'Jarek';
const letters = [...str, ' ', 'S.']; 
console.log(letters); 
console.log(...str);    // J a r e k 


/* Zakázaný SPREAD */
// SPREAD je dovolen v tvorbě polí a v argumentech fce.
// Např. v template literals není podporován, protože ${} nejsou stavěné na hodnoty oddělené čárkou.  

// console.log(`${...str} Skála`); 



/*Využití SPREAD u argumentu funkce*/
// Real world example
// const ingredients = [prompt('Let\'s ingredient 1'), prompt('Let\'s ingredient 2'), prompt('Let\'s ingredient 3')]; 
// restaurant.orderPasta(...ingredients);  

 
/*SPREAD S OBJECTY*/
// funguje od ES2018 
const newRestaurant = {
  ...restaurant,
  founder: 'Guiseppe',
  estabilished: 2002
};
newRestaurant.name = 'Slavek restaurace'; 

// console.log(restaurant); 
// console.log(newRestaurant); 

// --------------------------------------

const children = {
  name: 'Daniel',
  year: 5,
  birthYear: 2016,
  month: 'Únor'
};

const newChildren = {...children};
newChildren.name = 'Matyáš';
newChildren.year = 2;
newChildren.birthYear = 2018; 

console.log(children);
console.log(newChildren); 









