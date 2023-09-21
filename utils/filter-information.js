const filterInformation =( data )=>{
  // Mapear y filtrar los resultados de la consulta
  const resp = data.map((value) => {
    return {
      id: value.Local_id,
      Nombre: value.Local_Cliente,
      status: value.Local_Status,
    };
  }).filter((value) => value.status != 0);

  return resp;
}

module.exports = filterInformation;