const db = require('../../../utils/database/database_postgres')

exports.criarResponsaveis = async (req, res, next) => {
    const { nome, contato, endereco } = req.body;

    try {
        const responsavel = await db.responsaveis.create({ nome, contato, endereco });

        return res.status(201).json({ conteudo: responsavel });
    } catch (e) {
        res.status(500).json({ error: 'Erro ao criar responsável: ' + e.message})
    }
}