const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const Record = sequelize.define('record', {
    recordId: {
        type: Sequelize.STRING(16),
        primaryKey: true
    },
    note: {
        type: Sequelize.STRING
    },
    data1: {
        type: Sequelize.STRING
    },
    data2: {
        type: Sequelize.STRING
    },
    data3: {
        type: Sequelize.STRING
    },
    data4: {
        type: Sequelize.STRING
    },
    data5: {
        type: Sequelize.STRING
    }
});

module.exports = { sequelize, Record };