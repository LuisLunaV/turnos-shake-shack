import {
  imprimirNombresDisponibles,
  limpiarListaDeTurnos,
  cantidadDeElementosList,
} from "./components/publico.js";
import { primerosDiez } from "./utils/primeros-diez.js";

const socket = io();
const nombrePagina = window.location.pathname;

let cantidad = 0;

socket.on("pedidos", (clientes) => {
  if (cantidad != clientes.length) {
    const turnos = primerosDiez(clientes);
    socket.emit("primeros-diez", turnos);

    if (nombrePagina === "/publico.html") {
      limpiarListaDeTurnos();
      turnos.forEach(imprimirNombresDisponibles);
      cantidad = clientes.length;
      cantidadDeElementosList();
      return;
    }
  }
});

socket.on("recargar", (resp) => {
  if (resp) location.reload();
});
