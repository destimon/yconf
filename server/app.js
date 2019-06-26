const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./routes/api');

const PORT = 3000;

const publicPath = path.resolve(__dirname, '../../dist');

app.use(bodyParser.json());
app.use('/api', api);

app.use(express.static(publicPath));

app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
