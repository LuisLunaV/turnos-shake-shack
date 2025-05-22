const { request, response } =require('express');
const { Orders } = require('../model/orders.js');
const Pedidos = {
    
    crearPedido: async( req = request, res = response )=>{
        try {
            const pedido = req.body;
            await Orders.create( pedido );
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