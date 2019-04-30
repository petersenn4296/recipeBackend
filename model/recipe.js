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

function createRecipe(url, name, category, ingredients, instructions) {
    return knex('recipe')
            .insert({
                "url": url,
                "name": name,
                "category": category,
                "ingredients": ingredients,
                "instructions": instructions
            })
            .returning('*')
}

module.exports = {
    getAll,
    getOne,
    getByCategory,
    createRecipe
}
