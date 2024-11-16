const db = require('../../../utils/database/database_postgres');

exports.editarAlunos = async (req, res, next) => {
    try {
        const alunoAtualizado = await db.alunos.update(req.body, { where: { id: req.params.id } });
        
        if (alunoAtualizado[0] > 0) {
            res.status(200).json({ Mensagem: 'Aluno atualizado' });
        } else {
            res.status(404).json({ Mensagem: 'Nenhum aluno encontrado' });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ Mensagem: 'Erro ao atualizar aluno' });
    }
};
