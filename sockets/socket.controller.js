const { createDataBase } = require("../db/config.js");
const OderHandler = require("../model/order.controller.js");

const order = new OderHandler();

const socketController = async ( socket ) => {
  const db = await createDataBase();

  async function startDbMonitoring() {
    setInterval(async () => {
      getInformation(await order.observeChange(db));
    }, 1000);
  }
  
  function getInformation(datos) {
    socket.broadcast.emit("pedidos", datos);
  }

  startDbMonitoring();

  socket.on("siguiente-turno", async (id) => {
    await order.orderUpdate(db, id);
  });

};

module.exports = {
  socketController,
};
