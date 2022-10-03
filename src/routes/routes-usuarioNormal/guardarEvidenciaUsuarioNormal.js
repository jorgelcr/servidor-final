
const Router = require('express');
const res = require('express/lib/response');
const router = Router();


const {get_Unidad, get_TipoRegistro, get_AmbitoAcademico, get_Criterios, get_Procesos, get_AmbitoGeografico, get_Debilidad, post_EvicenciaUsuarioNormal, get_Evidencia, delete_evidencia, get_Evidencia_Id, update_EvidenciaUsuarioNormal} = require('../../controllers/usuarioNormal/guardarEvidenciaUsuarioNormal.controllers');
   
router.get('/Unidad', get_Unidad);
router.get('/TipoRegistro', get_TipoRegistro);
router.get('/AmbitoAcademico', get_AmbitoAcademico);
router.get('/Criterio', get_Criterios);
router.get('/Proceso', get_Procesos);
router.get('/AmbitoGeografico', get_AmbitoGeografico);
router.get('/Debilidad', get_Debilidad);
router.post('/', post_EvicenciaUsuarioNormal);
router.put('/:id', update_EvidenciaUsuarioNormal);



module.exports = router;



