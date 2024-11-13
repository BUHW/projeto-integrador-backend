const db = require('../../../utils/database/database_postgres')

exports.criarFuncionarios = async (req, res, next) => {
    const { nome, email, senha } = req.body;

    try {
        const funcionario = await db.funcionarios.create({ nome, email, senha });

        return res.status(201).json({ conteudo: funcionario });
    } catch (e) {
        res.status(500).json({ error: 'Erro ao criar funcionário: ' + e.message})
    }
}