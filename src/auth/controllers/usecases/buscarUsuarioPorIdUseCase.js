const db = require('../../../utils/database/database_postgres')

exports.buscarUsuarioPorId = async (req, res, next) => {

    try {
        const usuario = await db.usuarios.findOne({ where: { id: req.params.id } });
        
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        return res.status(200).json({ conteudo: usuario });
    } catch (e) {
        res.status(500).json({ error: 'Erro ao enocntrar usuário: ' + e.message})
    }
}