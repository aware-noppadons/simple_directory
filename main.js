const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, Record } = require('./db');

const app = express();
app.use(bodyParser.json());


app.get('/:tableName/:recordId', async (req, res) => {
    const { tableName, recordId } = req.params;
    const model = sequelize.models[tableName];
    if (!model) {
        return res.status(404).send('Table not found');
    }
    const record = await model.findByPk(recordId);
    if (!record) {
        return res.status(404).send('Record not found');
    }
    res.json(record);
});

app.post('/:tableName', async (req, res) => {
    const { tableName } = req.params;
    const model = sequelize.models[tableName];
    if (!model) {
        return res.status(404).send('Table not found');
    }
    const newRecord = await model.create(req.body);
    res.status(201).json(newRecord);
});

sequelize.sync({ force: true }).then(async () => {
    await Record.create({
        recordId: '1234567890123456',
        note: 'This is note 1',
        data1: 'data1',
        data2: 'data2',
        data3: 'data3',
        data4: 'data4',
        data5: 'data5'
    });
    await Record.create({
        recordId: '6543210987654321',
        note: 'This is note 2',
        data1: 'data1',
        data2: 'data2',
        data3: 'data3',
        data4: 'data4',
        data5: 'data5'
    });

    app.listen(3000, () => {
        console.log('App is running on http://localhost:3000');
    });
});