'use strict'

let myName = "Jarek";

function some() {
  console.log(myName);

  if(myName =='Jarek') { 
    let myName = "Johnas";
    console.log(myName);  
  }
}
 

some(); 


function jesus(jmeno) {
  console.log(jmeno);
}

function devil(jmeno) {
  console.log(jmeno);
}

jesus('Jehova');
devil('Baltazar')