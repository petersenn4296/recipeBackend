const knex = require('../knex.js')

function getAll() {
    return knex('category')
}

function createCategory(name) {
    return knex('category')
            .insert({
                "name": name,
            })
            .returning('*')
}

module.exports = {
    getAll,
    createCategory
}