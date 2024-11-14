const express = require('express');
const router = express.Router();
const responsavel = require('../controllers/responsaveisController');

router.post('/', responsavel.responsaveisController.criarResponsaveis); // Criar um funcionário
router.get('/', responsavel.responsaveisController.buscarResponsaveis); // Busca todos os funcionários
router.get('/:id', responsavel.responsaveisController.buscarResponsaveisPorId); // Busca um funcionário por ID
router.put('/:id', responsavel.responsaveisController.editarResponsaveis); // Atualiza um funcionário por ID
router.put('/:id', responsavel.responsaveisController.cancelarResponsaveis); //Cancela um funcionário por ID

module.exports = router;
