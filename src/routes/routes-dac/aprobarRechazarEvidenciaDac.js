
const Router = require('express');
const router = Router();


const { get_Evidencia_Id_Dac, get_Unidad, get_TipoRegistro, get_AmbitoAcademico, get_Criterios, get_Procesos, get_AmbitoGeografico, get_Debilidad, update_EvicenciaDac, update_EvicenciaObservacionesDac} = require('../../controllers/dac/aprobarRechazarEvidenciaDac.controllers');
       
 

router.get('/id/:id', get_Evidencia_Id_Dac);
router.get('/unidad', get_Unidad);
router.get('/tipoRegistro', get_TipoRegistro);
router.get('/AmbitoAcademico', get_AmbitoAcademico);
router.get('/Criterio', get_Criterios);
router.get('/Proceso', get_Procesos);
router.get('/AmbitoGeografico', get_AmbitoGeografico);
router.get('/Debilidad', get_Debilidad);
router.put('/aprobar/:id', update_EvicenciaDac); 
router.put('/rechazar/:id', update_EvicenciaObservacionesDac);   


module.exports = router;


