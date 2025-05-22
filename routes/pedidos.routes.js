const { Router } = require('express');
const { Pedidos } =require('../controllers/Pedidos.controller.js');


const router = Router();

router.post('/',Pedidos.crearPedido );

module.exports = router;