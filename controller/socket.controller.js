const Turnos = require("../model/turnos.control.js");
const { createDataBase } = require("../db/config.js");

const turnos = new Turnos();

const socketController = async (cliente) => {
  const db = await createDataBase();

  async function ejecutar() {
    setInterval(async () => {
      obtenerDatos(await turnos.observarCambios(db));
    }, 1000);
  }

  function obtenerDatos(datos) {
    cliente.broadcast.emit("pedidos", datos);
  }

  ejecutar();
};

module.exports = {
  socketController,
};
