const { Orders } = require('../model/orders');
const { orden } = require('../controllers/Observador.js');

const manejadorDeOrdenes = {
    observarCambios: async()=>{
try {
    const orders = await Orders.findAll({
        attributes: ["Orden_Id", "Orden_Cliente", "Orden_Status"],
        where:{
            Orden_Status:0
        }
    });
    // filterInformation( orders )
    const filteredOrders = orders.map(order => order.dataValues) .map((value) => {
        return {
          id: value.Orden_Id,
          Nombre: value.Orden_Cliente,
          status: value.Orden_Status,
        };
      });
    return filteredOrders;
} catch (error) {
    console.log('Error en la consulta de pedidos:',error);
}
    },

   ordenesListas:async( id )=>{
try {
    const ordenId = await Orders.findOne({
        where:{
            Orden_Id:id,
            Orden_Status:0
        }
    });
    
    if(!ordenId)return;
  const data =  await Orders.update({
        Orden_Status:2
    },{
        where:{
            Orden_Id:id
        }
    });

    if( data ){
        //Notificamos un cambio
        orden.notificarCambio('cambio');
    }
} catch (error) {
    console.log('Error al actualizar pedido:',error);
}
    }
};

module.exports={
    manejadorDeOrdenes
}