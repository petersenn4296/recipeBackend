const model = require('../model/category.js')

function getAll(req, res, next) {
    model.getAll()
    .then(data => {
        res.json(data)
    })
}

function createCategory(req, res, next) {
    model.createCategory(req.body.name)
    .then(data => {
        res.json(data)
    })
}

module.exports = {
    getAll,
    createCategory
}