const filterInformation = (data) => {
  // Mapear y filtrar los resultados de la consulta
  const resp = data
    .map((value) => {
      return {
        id: value.Orden_Id,
        Nombre: value.Orden_Cliente,
        status: value.Orden_Status,
      };
    })
    .filter((value) => value.status != 2);
  return resp;
};

module.exports = filterInformation;
