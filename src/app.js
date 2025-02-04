import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const ObjetoCarta = [

  {palo: 'spade', max: 12},
  {palo: 'club', max: 12},
  {palo: 'heart', max: 12}, 
  {palo: 'diamond', max: 12},
]
function tirarCarta() {
const tirada = math.floor(math.random()*ObjetoCarta.length);
const resultado =ObjetoCarta[tirada]
console.log(resultado)
}


window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
