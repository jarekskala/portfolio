'use strict'

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
  openingHours: {
    monday: {
      open: 12,
      close: 13 
    },
    tuesday: { 
      open: 12,
      close: 13 
    },
    saturday: {
      open: 12,
      close: 13 
    },
    sunday: {
      open: 12,
      close: 13 
    },
  },
 
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Zde je tvá oblibená pasta složená z ${ing1}, ${ing2} a ${ing3}`); 
  }
}; 


/* ------------------------------------------------PART ABOUT DESCTRUCTURING ------------------------------------------- */
/*
@ Ukázka SPREAD Operátoru
*/
// Toto je SPREAD, protože se používá na pravé straně za rovnítkem.
const arr = [1,2, ...[3,4]];   // (4) [1,2,3,4] 
// console.log(arr); 


/* 
@ Desctructuring smíchaný s rest operatorem
*/
// Toto je REST, protože se používá na levé straně před rovnítkem 
const [a,b, ...zbytek] = [1,2,3,4,5,6,7,8,9,10];
// console.log(a);             // 1
// console.log(b);             // 2
// console.log(zbytek);        // [3,4,5,6,7,8,9,10] 

//----------------------- Další příklad ------------------------------
// Kombinace rest a spread dohromady 
// Rest řeší pouze zbytek, neřeší vynechané elementy.  Z toho důvodu musí být rest vždy na posledním místě.  
const [pizza, , ...othersIngredients] = [...restaurant.startMenu, ...restaurant.mainMenu];

// console.log(pizza);                            // Focaccia
// console.log(othersIngredients);                // Očekávaně chybí Bruschetta // (5) ["Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Rissoto"]
 


/*OBJECTS*/
const {monday, tuesday, ...weekend} = restaurant.openingHours; 
// console.log(weekend); 









/* ------------------------------------------------PART ABOUT FUNCTIONS ------------------------------------------- */

/*REST PARAMETERS*/
const add = function(...argumenty) {
  let sum = 0;

  for(let i = 0; i < argumenty.length; i++) sum += argumenty[i];   
  console.log(sum); 
} 

add(2,3);            // 5 
add(5,5,5,5,5,5);    // 30

//----------------------- Další příklad ------------------------------
const x = [23, 5, 7]; 
add(...x);                      // 35 




