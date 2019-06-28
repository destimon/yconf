/* eslint-disable no-console */
const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', (req, res) => {
    res.send('Birds home page');
});
// define the about route
router.get('/about', (req, res) => {
    res.json({});
});

router.get('/api/test', (req, res) => {
    res.json({});
});


router.use('/rooms', require('./room').router);
router.use('/users', require('./user').router);

module.exports = router;
