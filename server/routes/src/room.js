const express = require('express');
const router = express.Router();
const roomModel = require('../../models').room;
const userRoomsModel = require('../../models').userRoom;
const config = require('../../config');

router.get('/', (req, res) => {
    const page = req.query.page == undefined ? 1 : req.query.page;
    const limit = req.query.limit == undefined ? config.LIMIT : req.query.limit;
    roomModel
        .paginate({}, { page, limit })
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(err => {
            return res.status(520).json(err);
        });
});

router.get('/:id', (req, res) => {
    if (req.params.id == undefined) {
        return res.status(404).json({
            message: 'room does not exist'
        });
    } else {
        roomModel
            .findOne({ _id: req.params.id })
            .then(data => {
                if (data == undefined) {
                    return res.status(404).json({
                        message: 'room does not exist'
                    });
                } else {
                    return res.status(200).json(data);
                }
            })
            .catch(err => {
                return res.status(520).json(err);
            });
    }
});

router.post('/', (req, res) => {
    // TODO verify data
    const obj = {};
    obj.roomName = req.body.roomName;
    obj.creator = req.body.creator;
    roomModel
        .create(obj)
        .then(data => {
            return res.status(201).json({
                data: data,
                message: 'created'
            });
        })
        .catch(err => {
            return res.status(520).json(err);
        });
});

router.put('/:id', (req, res) => {
    // TODO verify data
    const obj = req.body;
    roomModel
        .findOneAndUpdate({ _id: req.params.id }, obj)
        .then(data => {
            if (data == undefined) {
                return res.status(404).json({
                    message: 'room does not exist'
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
    roomModel
        .findOneAndDelete({ _id: req.params.id })
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

router.get('/:id/users', (req, res) => {
    // TODO paginate data
    userRoomsModel
        .find({ room: req.params.id })
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

module.exports.router = router;
