const buscarFuncionariosPorIdUseCase = require('./usecases/buscarFuncionariosPorIdUseCase');
const buscarFuncionariosUseCase = require('./usecases/buscarFuncionariosUseCase');
const cancelarFuncionariosUseCase = require('./usecases/cancelarFuncionariosUseCase');
const criarFuncionariosUseCase = require('./usecases/criarFuncionariosUseCase');
const editarFuncionarioUseCase = require('./usecases/editarFuncionariosUseCase');

exports.funcionariosController = {
    buscarFuncionariosPorId: buscarFuncionariosPorIdUseCase.buscarFuncionariosPorId,
    buscarFuncionarios: buscarFuncionariosUseCase.buscarFuncionarios,
    cancelarFuncionarios: cancelarFuncionariosUseCase.cancelarFuncionarios,
    criarFuncionarios: criarFuncionariosUseCase.criarFuncionarios,
    editarFuncionarios: editarFuncionarioUseCase.editarFuncionarios
}