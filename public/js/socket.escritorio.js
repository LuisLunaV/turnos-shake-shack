import { imprimirInfoEscritorio } from "./components/escritorio.js";
const btnSigiuente = document.querySelector(".btn-next");

const socket = io();

const nombres = [];

socket.on("carga-turnos", (turnos) => {
  console.log(turnos)
  // if (nombres.length === 0) {
  //   nombres.push(...turnos);
    if (turnos[0] && turnos[0].Nombre) {
      imprimirInfoEscritorio(turnos[0].Nombre, turnos.length);
      return;
    }
  // }
});

btnSigiuente.addEventListener("click", () => {
  if (nombres.length > 0) {
    const { id } = nombres.shift();
    console.log(nombres[0]);
    if (nombres.length > 0) {
      imprimirInfoEscritorio(nombres[0].Nombre, nombres.length);
    }
    socket.emit("siguiente-turno", id);
    setTimeout(() => {
      socket.emit("actualizar", true);
    }, 200);
  }
});
