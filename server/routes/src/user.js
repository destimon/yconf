const express = require('express');
const router = express.Router();
const userModel = require('../../models').user;
const userRoomsModel = require('../../models').userRoom;
const config = require('../../config');

router.get('/', (req, res) => {
    const page = req.query.page == undefined ? 1 : req.query.page;
    const limit = req.query.limit == undefined ? config.LIMIT : req.query.limit;
    userModel
        .paginate({}, { page, limit })
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(error => {
            return res.status(520).json(error);
        });
});

router.get('/:id', (req, res) => {
    userModel
        .findById(req.params.id)
        .then(data => {
            if (data == undefined) {
                return res.status(404).json({
                    error: 'User not found'
                });
            } else {
                return res.status(200).json(data);
            }
        })
        .catch(error => {
            return res.status(520).json(error);
        });
});

router.post('/', (req, res) => {
    // TODO verify data
    const obj = {
        googleId: req.body.googleId,
        displayName: req.body.displayName
    };
    userModel
        .create(obj)
        .then(data => {
            return res.status(201).json({
                data: data,
                message: 'created'
            });
        })
        .catch(error => {
            return res.status(520).json(error);
        });
});

router.put('/:id', (req, res) => {
    // TODO verify data
    const obj = req.body;
    userModel
        .findByIdAndUpdate(req.params.id, obj)
        .then(data => {
            if (data == undefined) {
                return res.status(404).json({
                    message: 'User not found'
                });
            } else {
                return res.status(200).json(data);
            }
        })
        .catch(err => {
            return res.status(520).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // TODO verify token
    userModel
        .findByIdAndDelete(req.params.id)
        .then(data => {
            return res.status(200).json({
                data: data,
                message: 'deleted'
            });
        })
        .catch(err => {
            return res.status(520).json(err);
        });
});

router.get('/rooms', (req, res) => {
    /**
     * @TODO
     * Get id from verified token
     * Paginate data
     */
    const userId = req.headers.id;
    userRoomsModel
        .find({ user: userId })
        .populate([
            {
                path: 'room',
                model: 'Room'
            },
            {
                path: 'user',
                model: 'User'
            }
        ])
        .exec()
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(error => {
            res.status(520).json(error);
        });
});

router.post('/rooms', (req, res) => {
    // TODO verify data
    const obj = {
        user: req.body.userId,
        room: req.body.roomId
    };
    userRoomsModel
        .create(obj)
        .then(data => {
            return res.status(201).json({
                data: data,
                message: 'created'
            });
        })
        .catch(error => {
            return res.status(520).json(error);
        });
});

module.exports.router = router;
