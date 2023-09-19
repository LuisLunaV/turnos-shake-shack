const { createDataBase } = require("../db/config.js");
const { primerosDiez } =require('../utils/index.js');
const Turnos = require("../model/turnos.control.js");

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

  cliente.on('primeros-diez', ( payload )=>{
    cliente.broadcast.emit('carga-turnos', payload );
  });

  cliente.on('siguiente-turno', async( id )=>{
     await turnos.actualizarTurno(db, id );
  });
  
  cliente.on('actualizar',( resp )=>{
    cliente.broadcast.emit('recargar', resp);
  });

};

module.exports = {
  socketController,
};
