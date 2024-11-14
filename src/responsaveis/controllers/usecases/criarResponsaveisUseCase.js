const db = require('../../../utils/database/database_postgres')

exports.criarResponsaveis = async (req, res, next) => {
    const { nome, email, senha } = req.body;

    try {
        const responsavel = await db.responsaveis.create({ nome, email, senha });

        return res.status(201).json({ conteudo: responsavel });
    } catch (e) {
        res.status(500).json({ error: 'Erro ao criar responsável: ' + e.message})
    }
}