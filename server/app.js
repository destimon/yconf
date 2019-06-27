const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./routes/api');
const config = require('./config');
const mongoose = require('mongoose');
const server = require('http').createServer(app)
const io = require('socket.io')(server);

const PORT = config.PORT || 3000;

const publicPath = path.resolve(__dirname, '../../dist');

app.use(bodyParser.json());
app.use('/api', api);

app.use(express.static(publicPath));

mongoose.connect(config.DATABASE, { useNewUrlParser: true })
    .then(() => { 
        console.log('Mongoose connected');
        server.listen(PORT, () => console.log(`App running on port ${PORT}!`));
    }).catch((err)  => {
        console.log(err);
    });


io.on('connection', (client) => {
    client.on('test_event', (data) => {
        console.log(data);
        client.emit('test_event', {
            message: 'hi from server'
        });
    })
})


