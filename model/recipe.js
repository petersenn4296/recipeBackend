const knex = require('../knex.js')

function getAll() {
    return knex('recipe')
}

function getOne(id) {
    return knex('recipe').where('id', id)
}

function getByCategory(category) {
  return knex('recipe').select('*').where('category', category)
}

module.exports = {
    getAll,
    getOne,
    getByCategory
}
