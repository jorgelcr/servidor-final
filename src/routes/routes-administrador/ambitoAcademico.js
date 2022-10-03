const Router = require('express');

const router = Router();


const {get_AmbitoAcademico, post_get_AmbitoAcademico, delete_get_AmbitoAcademico, update_get_AmbitoAcademico, getUserByIdget_AmbitoAcademico} = require('../../controllers/administrador/ambitoAcademico.controllers');


router.get('/', get_AmbitoAcademico);
router.post('/', post_get_AmbitoAcademico);
router.delete('/:id', delete_get_AmbitoAcademico);
router.put('/:id', update_get_AmbitoAcademico); 
router.get('/:id', getUserByIdget_AmbitoAcademico); 
module.exports = router;

    
  