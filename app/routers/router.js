const express = require('express');
const router = express.Router();

const juegoController = require('../controllers/juegocontroller.js');


router.post('/create', juegoController.create); 
router.get('/all', juegoController.retrieveAllJuegos); 
router.get('/onebyid/:id', juegoController.getJuegoById); 
router.put('/update/:id', juegoController.updateById); 
router.delete('/delete/:id', juegoController.deleteById); 

module.exports = router;
