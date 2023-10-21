const { createDataBase } = require("../db/config.js");
const OderHandler = require("../model/order.controller.js");

const order = new OderHandler();

const socketController = async ( socket ) => {
  const db = await createDataBase();

  //Monitoreamos cambios en la BD por segundo.
    setInterval(async () => {
      getInformation(await order.observeChange(db));
    }, 1000);
  
  //Recibimos los datos del monitoreo y los enviamos.
  function getInformation(datos) {
    socket.emit("pedidos", datos);
  }

  //Pasamos de orden en espera a orden lista
  socket.on('orden-lista', async( id )=>{
    // await order.readyOrders(db, id );
  });

  //Quitamos la orden de la lista
  socket.on("quitar-orden", async (id) => {
   await order.orderUpdate(db, id);
  });

};

module.exports = {
  socketController,
};
