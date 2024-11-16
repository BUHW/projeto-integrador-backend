const db = require('../../../utils/database/database_postgres')

exports.buscarAlunosPorId = async (req, res, next) => {

    try {
        const aluno = await db.alunos.findOne({ where: { id: req.params.id } });
        
        if (!aluno) {
            return res.status(404).json({ message: 'Aluno não encontrado' });
        }

        return res.status(200).json({ conteudo: aluno });
    } catch (e) {
        res.status(500).json({ error: 'Erro ao encontrar responsável: ' + e.message})
    }
}