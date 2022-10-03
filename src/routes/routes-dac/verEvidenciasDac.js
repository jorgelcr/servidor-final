
const Router = require('express');
const router = Router();


const {get_Evidencia_Dac} = require('../../controllers/dac/verEvidenciaDac.controllers');
       
 

router.get('/:id/:dac', get_Evidencia_Dac);
/* router.delete('/:id', delete_evidencia); */

module.exports = router;