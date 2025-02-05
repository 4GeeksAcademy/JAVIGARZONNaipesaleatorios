import "bootstrap";
import "./style.css";




let ObjetoCarta = [
let numeroNaipe : ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
let palo :  ['spade', 'club', 'heart','diamond']
]

function tirarCarta() {
  //*Elegir el palo de la baraja
const cartaTirada = math.floor(math.random()*ObjetoCarta[numeroNaipe].length);
const resultado =ObjetoCarta[palo]
console.log(resultado)
//* Elegir número de carta
const paloCarta = math.floor(math.random()*resultado.max + 1);

return (resultado)

console.log (paloCarta)

}
document.getElementById('numero').innerHTML = ObjetoCarta[numeroNaipe[cartaTirada]];
document.getElementById('naipe').className = "";
document.getElementById('naipe').classList.add("naipe");
document.getElementById('naipe').classList.add(getSuiteClass(paloCarta));
tirarCarta ()

console.log (paloCarta)



