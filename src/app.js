import "bootstrap";
import "./style.css";




const numeroNaipe = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const palo =  ['spade', 'club', 'heart','diamond']

function tirarCarta() {
  //*Elegir el palo de la baraja
const cartaTirada = math.floor(math.random()*numeroNaipe.length);
console.log(resultado)
//* Elegir número de carta
const paloCarta = math.floor(math.random()*palo.max + 1);

return (cartaTirada)
console.log (paloCarta)

}
document.getElementById('numero').innerHTML = numeroNaipe[cartaTirada];
document.getElementById('naipe').className = "";
document.getElementById('naipe').classList.add("naipe");
document.getElementById('naipe').classList.add(getSuiteClass(paloCarta));
tirarCarta ()





