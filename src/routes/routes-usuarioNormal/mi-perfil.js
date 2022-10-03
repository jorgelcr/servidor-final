
const Router = require('express');
const res = require('express/lib/response');
const router = Router();


const { get_TotalEvidencias } = require('../../controllers/usuarioNormal/mi-perfil.controllers');
   
router.get('/totalEvidencias/:id', get_TotalEvidencias);




module.exports = router;
