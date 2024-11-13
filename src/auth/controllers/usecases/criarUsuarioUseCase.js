const db = require('../../../utils/database/database_postgres')

exports.criarUsuario = async (req, res, next) => {
    const { nome, email, senha } = req.body;

    try {
        const usuario = await db.usuarios.create({ nome, email, senha });

        return res.status(201).json({ conteudo: usuario });
    } catch (e) {
        res.status(500).json({ error: 'Erro ao criar usuário: ' + e.message})
    }
}