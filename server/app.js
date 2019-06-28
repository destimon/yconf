const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const api = require('./routes').api;
const config = require('./config');

const PORT = config.PORT;

const publicPath = path.resolve(__dirname, '../../dist');

app.use(morgan('dev')); // logs of API requests
app.use(cors()); // allow us made api requests from a different domain
/**
 * @TODO
 * Add passport.use() for GoogleStrategy
 * Add passport.serializeUser(someFunc) and passport.deserializeUser(someFunc)
 */
app.use(passport.initialize());

app.use(bodyParser.json());
app.use('/api', api);

app.use(express.static(publicPath));

mongoose
    .connect(config.DATABASE, { useNewUrlParser: true })
    .then(() => {
        console.log('Mongoose connected');
        server.listen(PORT, () => console.log(`App running on port ${PORT}!`));
    })
    .catch(err => {
        console.log(err);
    });

io.on('connection', client => {
    client.on('test_event', data => {
        console.log(data);
        client.emit('test_event', {
            message: 'hi from server'
        });
    });
});
