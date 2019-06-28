const exprpess = require('express');
const router = exprpess.Router();
const model = require('../../models').room;
const config = require('../../config');

router.get('/', (req, res) => {
    let page = (req.query.page == undefined) ? 1 : req.query.page;
    model.paginate({}, { page: page, limit: config.LIMIT })
        .then((data) => {
            return res.json(data).status(200);
        })
        .catch((err) => {
            return res.json(err).status(520);
        });
});

router.get('/room/:id', (req, res) => {
    if (req.params.id == undefined) {
        return res.json().status(404);
    } else {
        model.findOne({ _id: req.params.id })
            .then((data) => {
                if (data == undefined) {
                    return res.json({
                        message: 'room does not exist'
                    }).status(404);
                } else {
                    return res.json(data).status(200);
                }
            })
            .catch((err) => {
                return res.json(err).status(520);
            });
    }
});

router.post('/', (req, res) => {
    // TODO verify data 
    const obj = {};
    obj.roomName = req.body.roomName;
    obj.creatorId = req.body.creatorId;
    console.log(obj);
    model.create(obj)
        .then((data) => {
            return res.json({
                data: data,
                message: 'created'
            }).status(201)
        })
        .catch((err) => {
            return res.json(err).status(520);
        });
});

router.put('/:id', (req, res) => {
    // TODO verify data
    let obj = req.body;
    model.findOneAndUpdate({ _id: req.params.id}, obj)
        .then((data) => {
            if(data == undefined) {
                return res.json({
                    message: 'room does not exist'
                }).status(404);
            } else {
                return res.json(data).status(200);
            }
        })
        .catch((err) => {
            return res.json(err).status(520);
        });
});

router.delete('/:id', (req, res) => {
    // TODO verify token
    model.findOneAndDelete({ _id: req.params.id })
        .then((data) => {
            return res.json({
                data: data,
                message: 'deleted'
            }).status(200);
        })
        .catch((err) => {
            return res.json(err).status(520);
        });
});

module.exports.router = router;