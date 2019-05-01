
exports.seed = function(knex, Promise) {
  return knex('category').del()
    .then(function () {
      return knex('category').insert([
        {name: 'Breakfast'},
        {name: 'Dinner'},
        {name: 'Drinks'}
      ]).then(() => {
        return knex.raw("SELECT setval('category_id_seq', (SELECT MAX(id) FROM category))")
      });
    });
};
