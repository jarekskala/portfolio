'use strict'
var firstName = "Matylda";   //duvod proč nikdy nepoužít VAR. Tento first name se projeví v jonas.varTest();

const jonas = {
  firstName : 'Johnas', 
  lastName: 'Skála', 
  year: 1991,
  
  calcAge: function() {
    console.log(this);
    console.log(2037 - this.year);
  },

  testFcInFc: function() {
    
    const isMilenial = function() {
      console.log(this);                                    // [undefined] 
      console.log(this.year >= 1982 && this.year <= 1996)
    };
    isMilenial(); 
  },

  testFcInFc2correct: function() {
    
    const isMilenial = () => {                                // arrow fce dědí this z rodiče, takže zde je to v pořádku.
      console.log(this);                                      // [jonas object] 
      console.log(this.year >= 1982 && this.year <= 1996)     // [true]
    };
    isMilenial();  
  },

  // Testování druhé úrovně zanoření arrow fce pro this
  testFcIn3: function() {
    const isMilenial = () => {
      const isMilenial2 = () => {
        console.log(this);
      }
      isMilenial2(); 
    }
    isMilenial(); 
  },
  
   // arrow function, která má testovat this, a který se projeví jako global window object. Viz. popsano při volání
   varTest: () => console.log(this.firstName),

  // arrow function, která má testovat this, a který se projeví jako global window object. Viz. popsano při volání 
  greet: () => console.log(`Hey ${this.lastName}`),   
};






jonas.greet();              //  [Undefined], protože arrow function nemají vlastní this, dědí ho - a object není scope, takže z něj to nemůže zděďit.. dědí tedy z window.object
jonas.varTest();            //  [Matylda], arrows nemají this, takže hledají ve window object,kde naleznou díky var deklaraci v global EC.



jonas.testFcInFc2correct(); // [jonas.object, true]


jonas.testFcIn3();        // [jonas object] - dokonce i další levely zanoření dědí jonas object.






// arguments keyword (jsou dostupné pouze v regular funcions declaration a function expression, ale ne v arrow functions) 
const addExpr = function(a,b) {
  console.log(arguments); 
  return a + b;
}

addExpr(3, 5, 16, 'test');     // [ arguments(4)[3, 5, 16, 'test'] ] Můžeš zadat více argumentů, než je deklarováno parametrů.


const addArrow = (a,b) => {
  console.log(arguments);
  return a + b; 
}

addArrow(3, 5); // [Error - arguments not defined] Protože arguments keyword existují pouze v regular funcions declaration a function expression.