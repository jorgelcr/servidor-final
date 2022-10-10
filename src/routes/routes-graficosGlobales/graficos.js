
const Router = require('express');
const res = require('express/lib/response');
const router = Router();


const { get_TotalEvidencias, get_TotalEvidenciasUnidades, get_TotalEvidenciasTiposRegistros, get_TotalEvidenciasDebilidades, get_TotalEvidenciasCriterios, get_TotalEvidenciasAmbitoAcademico, get_TotalEvidenciasAprobadasRechazadas, get_TotalUsuarios, get_TotalEvidenciasCreadasSistema, get_TotalEvidenciasAPR, get_TotalEvidenciasAprobadasRechazadasdAC} = require('../../controllers/graficos-globales/graficos.controllers');
   
router.get('/totalEvidencias/:id/:inicio/:fin', get_TotalEvidencias);
router.get('/totalEvidenciasunidades/:id/:inicio/:fin', get_TotalEvidenciasUnidades);
router.get('/tipo_registros/:id/:inicio/:fin', get_TotalEvidenciasTiposRegistros);
router.get('/debilidades/:id/:inicio/:fin', get_TotalEvidenciasDebilidades);
router.get('/criterios/:id/:inicio/:fin', get_TotalEvidenciasCriterios);
router.get('/ambitoacademico/:id/:inicio/:fin', get_TotalEvidenciasAmbitoAcademico);
router.get('/aprobadasenesperarechazadas/:id/:inicio/:fin/:idunidad', get_TotalEvidenciasAprobadasRechazadas);
router.get('/cantidadusuarios/:inicio/:fin', get_TotalUsuarios);
router.get('/totalEvidenciassistema/:inicio/:fin', get_TotalEvidenciasCreadasSistema);
router.get('/administradorAPRdelsistema/:inicio/:fin', get_TotalEvidenciasAPR);
router.get('/aprobadasenesperarechazadasdac/:id/:inicio/:fin/:idunidad', get_TotalEvidenciasAprobadasRechazadasdAC);
module.exports = router;
