const express = require('express');
const router = express.Router();
const funcionario = require('../controllers/funcionariosController');

router.post('/', funcionario.funcionariosController.criarFuncionario); // Criar um funcionário
router.get('/', funcionario.funcionariosController.buscarFuncionarios); // Busca todos os funcionários
router.get('/:id', funcionario.funcionariosController.buscarFuncionarioPorId); // Busca um funcionário por ID
router.put('/:id', funcionario.funcionariosController.editarFuncionario); // Atualiza um funcionário por ID
router.put('/:id', funcionario.funcionariosController.cancelarFuncionario); //Cancela um funcionário por ID

module.exports = router;
