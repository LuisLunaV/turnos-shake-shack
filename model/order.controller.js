const filterInformation = require("../utils/filter-information.js");

class OderHandler {
  observeChange(db) {
    return new Promise(async (resolve, reject) => {
      try {
        db.query("SELECT * FROM Ordenes", (err, result) => {
          if (err) {
            console.error("Error al ejecutar la consulta: " + err.message);
            return;
          }
          resolve(filterInformation(result));
        });
      } catch (error) {
        console.error("Error en socketController:", error);
        reject(error);
      }
    });
  }

  readyOrders(db, id) {
    return new Promise(async (resolve, reject) => {
      try {
        db.query(
          "UPDATE Ordenes SET Orden_Status = 1 WHERE Orden_Id = ?",
          [id],
          (err, result) => {
            resolve(result);
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  orderUpdate(db, id) {
    return new Promise(async (resolve, reject) => {
      try {
        db.query(
          "UPDATE Ordenes SET Orden_Status = 2 WHERE Orden_Id = ?",
          [id],
          (err, result) => {
            resolve(result);
          }
        );
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = OderHandler;
