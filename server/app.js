const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./routes/api');
const db = require('./config/db');
const mongoose = require('mongoose');
const server = require('http').createServer(app)
const io = require('socket.io')(server);

const PORT = 3000;

const publicPath = path.resolve(__dirname, '../../dist');

app.use(bodyParser.json());
app.use('/api', api);

app.use(express.static(publicPath));

mongoose.connect(db.url, { useNewUrlParser: true }).then(
    () => { console.log('Mongoose connected') },
    (err) => { console.log('Mongoose error') }
);

io.on('connection', (client) => {
    client.on('test_event', (data) => {
        console.log(data);
        client.emit('test_event', {
            message: 'hi from server'
        })
    })
})

server.listen(PORT, () => console.log(`App running on port ${PORT}!`));
