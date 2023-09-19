const { filtrarDatos } =require('../utils/index.js');

class Turnos {
  constructor() {
    this.intervalId = null;
    this.cantidadDePedidos = 0;
  }
  observarCambios(db) {
    return new Promise(async (resolve, reject) => {
      try {
        db.query("SELECT * FROM NIPS", (err, result) => {
          if (err) {
            console.error('Error al ejecutar la consulta: ' + err.message);
            return;
          }
          
         resolve( filtrarDatos(result) )
          
        });
      } catch (error) {
        console.error("Error en socketController:", error);
        reject( error )
      }
    });
  }

  actualizarTurno(db, id ){

    return new Promise( async ( resolve, reject )=>{
      try {
        db.query("UPDATE NIPS SET Local_Status = 0 WHERE Local_id = ?",[id], (err, result)=>{
          resolve(result)
        })
      } catch (error) {
        reject( error );
      }
    })
  }
}

module.exports = Turnos;
