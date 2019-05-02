const knex = require('../knex.js')

function getAll() {
    return knex('recipe')
}

function getOne(id) {
    return knex('recipe').where('id', id)
}

function getByCategory(category_id) {
  return knex('recipe').select('*').where('category_id', category_id)
}

function createRecipe(url, name, category_id, ingredients, instructions) {
    return knex('recipe')
            .insert({
                "url": url,
                "name": name,
                "category_id": category_id,
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
