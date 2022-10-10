
const Router = require('express');
const res = require('express/lib/response');
const router = Router();


const { get_TotalEvidencias, get_TotalEvidenciasAprobadasRechazadas, get_TotalEvidenciasAprobadasRechazadasdAC } = require('../../controllers/usuarioNormal/mi-perfil.controllers');
   
router.get('/totalEvidencias/:id', get_TotalEvidencias);
router.get('/totalEvidenciasresponsable/:id/:idunidad', get_TotalEvidenciasAprobadasRechazadas);
router.get('/totalEvidenciasdac/:id/:idunidad', get_TotalEvidenciasAprobadasRechazadasdAC);


module.exports = router;
