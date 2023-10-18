const { request, response } = require("express");

const { createDataBase } = require("../db/config.js");

const postPedido = async (req = request, res = response) => {
  const db = await createDataBase();

  const {
    Orden_Cliente,
    Orden_fecha,
    Orden_IdLocal,
    Orden_IdTerminal,
    Orden_IdCuenta,
    Orden_IdPosition,
    Orden_Status,
  } = req.body;

  try {
    const query =
      "INSERT IGNORE INTO Ordenes ( Orden_Cliente, Orden_fecha, Orden_IdLocal, Orden_IdTerminal, Orden_IdCuenta, Orden_IdPosition, Orden_Status ) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [
        Orden_Cliente,
        Orden_fecha,
        Orden_IdLocal,
        Orden_IdTerminal,
        Orden_IdCuenta,
        Orden_IdPosition,
        Orden_Status
      ],(err, result) => {
        if (err) {
          console.error("Error al ejecutar la consulta: " + err.message);
          res
            .status(500)
            .json({ error: "Error al insertar datos en la tabla Ordenes" });
        } else {
          res.status(200).json({ msg: "Datos insertados exitosamente" });
        }
      }
    );
  } catch (error) {
    console.error("Error en socketController:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = {
  postPedido,
};
