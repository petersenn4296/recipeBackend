const knex = require('../knex.js')

function getAll() {
    return knex('recipe')
}

function getOne(id) {
    return knex('recipe').where('id', id)
}

module.exports = {
    getAll,
    getOne
}