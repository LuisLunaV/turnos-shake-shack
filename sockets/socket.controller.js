const {
  manejadorDeOrdenes,
} = require("../controllers/ManejadorDeOrdenes.controller.js");

const { orden, Observador } = require("../controllers/Observador.js");

const socketController = async (socket) => {
  //Monitoreamos cambios en con el patron observado.
  try {

    const observadoUno = new Observador(async ( data ) => {
      //Cada que recibimos una notificacion de nueva orden grabada en bd, enviamos los pedidos nuevos al front
      const datos = await manejadorDeOrdenes.observarCambios();
      socket.emit("pedidos", datos);
    });

    orden.suscribe(observadoUno);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
  // }, 2000);

  // Limpiar el intervalo cuando el cliente se desconecta
  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });

  //Quitamos la orden de la lista
  socket.on("quitar-orden", async (id) => {
    await manejadorDeOrdenes.ordenesListas(id);
  });
};

module.exports = {
  socketController,
};
