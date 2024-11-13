const db = require('../../../utils/database/database_postgres');
const { Op } = require('sequelize');

exports.editarFuncionarios = async (req, res, next) => {
    try {
        let funcionarioExistente = null;
        if (req.body.email) {
            funcionarioExistente = await db.Funcionarios.findOne({
                where: {
                    email: req.body.email,
                    id: {
                        [Op.ne]: req.params.id
                    }
                }
            });
        }

        if (!funcionarioExistente) {
            const funcionarioAtualizado = await db.Funcionarios.update(req.body, { where: { id: req.params.id } });
            
            if (funcionarioAtualizado[0] > 0) {
                res.status(200).json({ Mensagem: 'Funcionário Atualizado' });
            } else {
                res.status(404).json({ Mensagem: 'Nenhum funcionário encontrado' });
            }
        } else {
            res.status(403).json({ Mensagem: 'Email já existe na base de dados' });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ Mensagem: 'Erro interno do servidor' });
    }
};
