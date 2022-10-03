
const Router = require('express');
const router = Router();


const { get_Evidencia_UsuarioNormal, delete_Mi_evidencia_UsuarioNormal, get_Evidencia_Id } = require('../../controllers/usuarioNormal/misEvidenciasUsuarioNormal.controllers');
       

router.get('/Evidencias/:id', get_Evidencia_UsuarioNormal);
router.get('/:id', get_Evidencia_Id);
router.delete('/:id', delete_Mi_evidencia_UsuarioNormal);

module.exports = router;