require('dotenv').config();
const { Sequelize } = require('sequelize');

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

module.exports = db = {};

initialize();

async function initialize() {
    
    const sequelize = new Sequelize({
        database: process.env.DATABASE,
        username: process.env.USER,
        password: process.env.PASS,
        host: process.env.HOST,
        dialect: 'postgres',
        timezone: '-03:00',
        dialectOptions: {
            options: {
                timezone: '+00:00',
                encrypt: false,
                useUTC: true,
            },
        },
    })

    db.usuarios = require('../../auth/model/usuarios')(sequelize);
    db.permissoes = require('../../auth/model/permissoes')(sequelize);

    await sequelize.sync({ alter: false });
}