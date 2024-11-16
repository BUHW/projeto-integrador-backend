const db = require('../../../utils/database/database_postgres')

exports.criarAlunos = async (req, res, next) => {
    const { nome, matricula, diagnostico } = req.body;

    try {
        const aluno = await db.alunos.create({ nome, matricula, diagnostico });

        return res.status(201).json({ conteudo: aluno });
    } catch (e) {
        res.status(500).json({ error: 'Erro ao criar aluno: ' + e.message})
    }
}