const { Router } = require('express');

const router = Router();

router.get('/',( req, res )=>{
    res.status(200).json({
        msg: 'Servicio levantado'
    })
});

module.exports = router;