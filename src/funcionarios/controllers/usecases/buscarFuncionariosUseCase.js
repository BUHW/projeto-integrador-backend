const db = require('../../../utils/database/database_postgres')

exports.buscarFuncionarios = async (req, res, next) => {

    try {
        const funcionarios = await db.funcionarios.findAll({
            where: {
                cancelado: false
            }
        });
    
        if (!funcionarios || funcionarios.length === 0) {
            return res.status(404).json({ message: 'Nenhum funcionário encontrado' });
        }
    
        return res.status(200).json({ conteudo: funcionarios });
    } catch (e) {
        res.status(500).json({ error: 'Funcionários não encontrados' + e.message})
    }
}