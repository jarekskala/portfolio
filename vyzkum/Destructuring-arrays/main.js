'use strict'

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
 
  order: function(starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]]
  }
};


// Starý a špatný způsob jak rozbít pole a nacpat ho do samostatných proměnných
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2]; 



// Desctructuring moderní způsob jak rozbít pole a nacpat ho do samostatných proměnných
// Znázornění základního využití
const DestructuringArr = [1,7,12]; 
const [x, y, z] = DestructuringArr; 
// console.log(z);


// Vyber 1 a 2 element
const [first,second] = restaurant.categories; 
// console.log(first); // ['Italian]
// console.log(second); // [Pizzeria] 


// Vyber 1 a 3 element 
const [uno, , tree] = restaurant.categories;
// console.log(uno);
// console.log(tree); 


// Přehození values v proměnných
let [main, secondary] = restaurant.categories; 
// console.log(main);           // Italian
// console.log(secondary);      // Pizzeria

// console.log('--------------------');  

[main, secondary] = [secondary, main];     
// console.log(main);              // Pizzeria
// console.log(secondary);         // Italian 



const [startMenu, mainMenu] = restaurant.order(1,1); 

// console.log(startMenu, mainMenu);  // Bruschetta Pasta


/* 
@ NESTED DESTRICTURING
*/
const nested = [2, 1, [5, 6]]; 
// const [i, , j] = nested;  
// console.log(i,j);

const [i, , [j,k]] = nested; 
// console.log(i,j,k);  


/* 
@ DEFAULT VALUES
*/

const array = [8];

const [p = 1, q = 1, r = 1] = array; 

console.log(p,q,r);