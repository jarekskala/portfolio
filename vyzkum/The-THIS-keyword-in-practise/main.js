'use strict'
let arrow_p = document.querySelector('p.arrow');  
let declaration_p = document.querySelector('p.declaration');


const jaroslav = {
  name: 'Jaroslav', 
  year: 1994, 
  declaration_age: function() {
    console.log(this); 
    console.log(2021 - this.year); 
  } 
}


const declaration_age = function(birthYear) {
   console.log(2021 - birthYear);
   console.log(this);                            
}
 

const arrow_age = birthYear => {  
   console.log(2021 - birthYear); 
   console.log(this);  
}


console.log(this);                                                      // [ window object ]
 

declaration_age(1994);                                                  // [ Undefined ] | without 'strict mode' it is window object


arrow_age(1997);                                                        // [ window object ] | protože nemá svůj this keyword, bere si ho z rodičovské fce, nebo scope. 


arrow_p.addEventListener('click', () => {                               // [ window object ] | protože nemá svůj this keyword, bere si ho z rodičovské fce, nebo scope. 
  console.log(this); 
})  


declaration_p.addEventListener('click', function(){                     // [ <p> element ] | Funkce se přiřadí k ownerovi, tedy event hendlerovi.  
  console.log(this);  
}) 


jaroslav.declaration_age();                                              // [ jaroslav object ] | this metody se přířadí k ownerovi, který tuhle metodu zavolal.

const daniel = {
  name: 'Daniel', 
  year :  2016 
}
daniel.declaration_age = jaroslav.declaration_age;                        // Method Borrowing 
daniel.declaration_age();                                                 // [ daniel object ] | this metody se přířadí k ownerovi, který tuhle metodu zavolal,
                                                                          // ačkoliv v tomto případě je declaration_age napsaná v jaroslav objectu. 


const f = jaroslav.declaration_age;                                       // Vytváříme function expression 
console.log(f);                                                           // const f =  function() {console.log(this); console.log(2021 - this.year); } 
 
f();                                                                      // [ Undefined ] | without 'strict mode' it is window object 
 
 
