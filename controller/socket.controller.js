const { createDataBase } = require("../db/config.js");
const Turnos = require("../model/turnos.control.js");

const turnos = new Turnos();
let cantidadActual = 0;

const socketController = async (cliente) => {
  const db = await createDataBase();

  async function ejecutar() {
    setInterval(async () => {
      obtenerDatos(await turnos.observarCambios(db));
    }, 1000);
  }

  function obtenerDatos(datos) {
    
    cliente.emit("pedidos", datos );

  }

  ejecutar();
};

module.exports = {
  socketController,
};
