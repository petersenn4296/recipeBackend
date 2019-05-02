const model = require('../model/recipe.js')

function getAll(req, res, next) {
    model.getAll()
    .then(data => {
        res.json(data)
    })
}

function getOne(req, res, next) {
    model.getOne(req.params.id)
    .then(data => {
        res.json(data)
    })
}

function getByCategory(req, res, next) {
    model.getByCategory(req.params.category_id)
    .then(data => {
        res.json(data)
    })
}

function createRecipe(req, res, next) {
    model.createRecipe(req.body.url, req.body.name, req.body.category_id, req.body.ingredients, req.body.instructions)
    .then(data => {
        res.json(data)
    })
}

module.exports = {
    getAll,
    getOne,
    getByCategory,
    createRecipe
}
