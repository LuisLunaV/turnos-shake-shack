import { imprimirInfoEscritorio, sinPedidos } from "./components/escritorio.js";
const btnSigiuente = document.querySelector(".btn-next");

const socket = io();

const nombres = [];

let cantidad = 0;

socket.on("pedidos", (clientes) => {
  if (cantidad != clientes.length) {
    if (nombres.length === 0 ) {
      nombres.push(...clientes);
      (nombres[0])?imprimirInfoEscritorio(nombres[0].Nombre, nombres.length):'';
    }
    cantidad = clientes.length;
  }
});

btnSigiuente.addEventListener("click", () => {
  if (nombres.length > 0) {
    const { id } = nombres.shift();
    
    (nombres.length > 0)?imprimirInfoEscritorio(nombres[0].Nombre, nombres.length):sinPedidos();
  
    socket.emit("siguiente-turno", id);
 
  }
});
