const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./routes/api');
const db = require('./config/db');
const mongoose = require('mongoose');

const PORT = 3000;

const publicPath = path.resolve(__dirname, '../../dist');

app.use(bodyParser.json());
app.use('/api', api);

app.use(express.static(publicPath));

mongoose.connect(db.url, { useNewUrlParser: true }).then(
    () => { console.log('Mongoose connected') },
    (err) => { console.log('Mongoose error') }
);

app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
