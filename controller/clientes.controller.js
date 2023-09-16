const { request, response } = require("express");
const { createDataBase } = require("../db/config.js");
const { socketController } = require("../controller/socket.controller.js");

const actualizarStatusCliente = async (req = request, res = response) => {
  try {
    const { id } = req.params;

    const db = await createDataBase();

    // Utiliza el método `execute` para ejecutar la consulta.
    const [result] = await db
      .promise()
      .execute("UPDATE NIPS SET Local_Status = 0 WHERE Local_id = ?", [id]);

    // Verifica si la actualización se realizó correctamente.
    if (result && result.affectedRows > 0) {
      socketController();
      res.status(200).json({
        message: "Status actualizado correctamente",
      });
    } else {
      res.status(404).json({
        message: "No se encontró el registro con el ID proporcionado",
      });
    }
  } catch (error) {
    console.error("Error en actualizarStatusCliente:", error);
    res.status(500).json({
      message: "Error al actualizar el status",
    });
  }
};

module.exports = actualizarStatusCliente;
