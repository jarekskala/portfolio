'use strict'

 
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'], 
  };



/* || ------------------ OR operator || - short circuiting------------------------------------*/

// Vrátí první truthy hodnotu, nebo poslední hodnotu v případě, že neexistuje truthy hodnota. 
console.log(undefined || '' || 0 || null || '' || 0 ); // 0
console.log(undefined || '' || 0 || null || 2 || '' || 0 ); // 2


/*Real World example*/
// Určení defaultu v případě, že default neexistuje. 

// porovnání ternary operatoru vs OR
// restaurant.numGuest = 10;    
const guests1 = restaurant.numGuest ? restaurant.numGuest : 50;   
const guests2 = restaurant.numGuest || 60;  
// console.log(guests1);  // 50
// console.log(guests2);  // 60 



/* || ------------------ AND operator && - short circuiting------------------------------------*/
console.log(0 && 'Jonas');              // 0
console.log(undefined && 10);           // undefined
console.log(1 && 2 && 3 && 'last');     // last

/*Real World example*/
//Proveď funkci, pokud if je true - v tomto případě zda je neco prirazeno do promene.

function feed(meal) {
  console.log(`Zvíře jsi nakrmil s: ${meal}`); 
}

let food;
food = 5;

// porovnání IF vs &&. Oboje dělá stejnou práci. 
if(food) {
  feed('jablko'); 
}  

food && feed('hruška');  // && vrací první false hodnotu. Pokud neexistuje food, provede se returnutí food. Pokud food existuje, provede se funkce. 







