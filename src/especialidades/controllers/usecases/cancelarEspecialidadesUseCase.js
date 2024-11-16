const db = require('../../../utils/database/database_postgres');
const { Op } = require('sequelize');

exports.cancelarEspecialidades = async (req, res, next) => {
    try {
        const especialidade = await db.especialidades.update(
            { cancelado: true },
            { where: { id: req.params.id } }
        );

        if (especialidade[0] > 0) {
            res.status(200).json({ Mensagem: 'Especialidade cancelada com sucesso' });
        } else {
            res.status(404).json({ Mensagem: 'Nenhuma especialidade encontrada' });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ Mensagem: 'Erro ao cancelar especialidade' });
    }
};
