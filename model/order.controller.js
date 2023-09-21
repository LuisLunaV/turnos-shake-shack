const filterInformation =require('../utils/filter-information.js');

class OderHandler {
  constructor() {
    // this.intervalId = null;
    // this.numberOfOrders = 0;
  }
  observeChange(db) {
    return new Promise(async (resolve, reject) => {
      try {
        db.query("SELECT * FROM NIPS", (err, result) => {
          if (err) {
            console.error('Error al ejecutar la consulta: ' + err.message);
            return;
          }
          
         resolve( filterInformation(result) )
          
        });
      } catch (error) {
        console.error("Error en socketController:", error);
        reject( error )
      }
    });
  }

  orderUpdate(db, id ){

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

module.exports = OderHandler;
