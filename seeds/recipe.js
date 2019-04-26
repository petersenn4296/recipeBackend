
exports.seed = function(knex, Promise) {
  return knex('recipe').del()
    .then(function () {
      return knex('recipe').insert([
        {url: 'url1', name: 'name1', ingredients: ['ingredient1', 'ingredient 2', 'ingredient 3'], instructions: ['step 1', 'step 2', 'step 3']},
        {url: 'url2', name: 'name2', ingredients: ['ingredient1', 'ingredient 2', 'ingredient 3'], instructions: ['step 1', 'step 2', 'step 3']},
        {url: 'url3', name: 'name3', ingredients: ['ingredient1', 'ingredient 2', 'ingredient 3'], instructions: ['step 1', 'step 2', 'step 3']}
      ]).then(() => {
        return knex.raw("SELECT setval('recipe_id_seq', (SELECT MAX(id) FROM recipe))")
      });
    });
};
