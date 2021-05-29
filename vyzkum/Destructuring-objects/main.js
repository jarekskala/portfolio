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
  }
};


// Základní destructuring. Je nutno psát názvy properties, které budou zároveň nové proměnné.
const {name, openingHours, categories} = restaurant; 
// console.log(name, openingHours, categories);

// Destructuring, kdy si určíme jak chce aby se variables jmenovaly.
const {name:mainName, openingHours:mainHours, categories:mainCategories} = restaurant; 
console.log(mainName, mainHours, mainCategories);  



