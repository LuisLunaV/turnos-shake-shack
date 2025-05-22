const { request, response } =require('express');
const { Orders } = require('../model/orders.js');
const { orden } = require('../controllers/Observador.js');
const Pedidos = {
    
    crearPedido: async( req = request, res = response )=>{
        try {
            const pedido = req.body;
           const data = await Orders.create( pedido );
           if(data){
            //Si la orden se guardo con exito, enviamos la notificacion al observador
                orden.notificarCambio( 'cambio' );
           }
            res.status(201).json({
                msg:'ok'
            })
    
        } catch (error) {
            res.status(500).json({ error: "Error al insertar nuevo pedido" });
        }

    }
    
}

module.exports={
    Pedidos
}