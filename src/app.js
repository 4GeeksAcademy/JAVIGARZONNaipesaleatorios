import "bootstrap";
import "./style.css";




const numeroNaipe =  ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const palo = ["Diamonds", "Spades", "Hearts", "Clubs"];


function tirarCarta() {
  //*Elegir el palo de la baraja
const cartaTirada = math.floor(math.random()*numeroNaipe.length);
//* Elegir número de carta
const paloCarta = math.floor(math.random()*palo.length);

return (paloCarta)
return (cartaTirada)

}
tirarCarta()

document.getElementById('numeroCarta').innerHTML = numeroNaipe[cartaTirada];
document.getElementById('Carta').className = "";
document.getElementById('Carta').classList.add("naipe");
document.getElementById('Carta').classList.add ("paloCarta");


  






