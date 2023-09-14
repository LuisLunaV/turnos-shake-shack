const { createDataBase } = require("../db/config.js");
const socketController = async (cliente) => {
  try {
        // Crear una conexión a la base de datos
    const db = await createDataBase();

    let cantidadDePedidos = 0;

    // Establecer un intervalo para consultar la base de datos periódicamente
   const intervalId = setInterval(() => {
      db.query("SELECT * FROM NIPS", (err, result) => {
        if (err) {
          console.error("Error al ejecutar la consulta:", err);
          clearInterval( intervalId );
          db.detach();
          return;
        }

         // Mapear y filtrar los resultados de la consulta
        const resp = result
          .map((value) => {
            return {
              nip: value.Local_Nip,
              status: value.Local_Status,
            };
          })
          .filter((value) => value.status != 0);

          // Emitir el evento solo si ha habido cambios
        if (cantidadDePedidos != resp.length) {
          cliente.emit("pedidos", resp);
          cantidadDePedidos = resp.length;
        }
      });
    }, 1000);
  } catch (error) {
    console.error("Error en socketController:", error);
  }
};

module.exports = {
  socketController,
};
