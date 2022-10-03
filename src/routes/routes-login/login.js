const Router = require('express');
/* const res = require('express/lib/response'); */
const router = Router();



const { login, revalidarToken } = require('../../controllers/login/login.controllers');
const { validarJWT } = require('../../reutilizar-verificaciones/validar-jwt');


router.post('/', login);
router.get('/renovar', validarJWT, revalidarToken);
module.exports = router;

    
  