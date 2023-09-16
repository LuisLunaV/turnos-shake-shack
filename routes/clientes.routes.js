const { Router } = require('express');
const actualizarCliente = require('../controller/clientes.controller.js');
const router = Router();

router.patch('/:id', actualizarCliente);

module.exports = router;