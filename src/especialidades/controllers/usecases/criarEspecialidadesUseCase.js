const db = require('../../../utils/database/database_postgres')

exports.criarEspecialidades = async (req, res, next) => {
    const { nome_especialidade } = req.body;

    try {
        const especialidade = await db.especialidades.create({ nome_especialidade });

        return res.status(201).json({ conteudo: especialidade });
    } catch (e) {
        res.status(500).json({ error: 'Erro ao criar especialidade: ' + e.message})
    }
}