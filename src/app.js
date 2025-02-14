import "bootstrap";
import "./style.css";

const numeroNaipe =  ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const palo = ["Diamonds", "Spades", "Hearts", "Clubs"];

function tirarCarta() {
  //* Elegir número de carta
  const cartaTirada = Math.floor(Math.random() * numeroNaipe.length);
  //* Elegir el palo de la baraja
  const paloCarta = Math.floor(Math.random() * palo.length);

  // Devolver ambos valores como un objeto
  return {
    numero: numeroNaipe[cartaTirada],
    palo: palo[paloCarta]
  };
}

// Llamar a la función y obtener los resultados
const carta = tirarCarta();

// Actualizar el DOM con los valores obtenidos
document.getElementById('numeroCarta').innerHTML = carta.numero;
document.getElementById('Carta').className = "";
document.getElementById('Carta').classList.add("naipe");
document.getElementById('Carta').classList.add(carta.palo);

  






