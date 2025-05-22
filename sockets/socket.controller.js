const { manejadorDeOrdenes } = require("../controllers/ManejadorDeOrdenes.controller.js");

const socketController = async ( socket ) => {

  //Monitoreamos cambios en la BD por segundo.
  const intervalId =  setInterval(async () => {
    try {
    //Recibimos los datos del monitoreo y los enviamos.
    const datos = await manejadorDeOrdenes.observarCambios();
    socket.emit("pedidos", datos); 
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
    }, 2000);
  
 
  // Limpiar el intervalo cuando el cliente se desconecta
  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
    clearInterval(intervalId);
  });

  //Quitamos la orden de la lista
  socket.on("quitar-orden", async (id) => {
    await manejadorDeOrdenes.ordenesListas( id );
  });

};

module.exports = {
  socketController,
};
