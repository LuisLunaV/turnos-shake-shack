const { Router } = require('express');

const { postPedido } = require("../controllers/pedido.controller.js");

const router = Router();

router.post('/', postPedido );

module.exports = router;