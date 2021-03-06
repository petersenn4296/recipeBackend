exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', function(table) {
        table.increments().notNullable()
        table.integer('category_id').unsigned().index().references('id').inTable('category').onDelete('CASCADE')
        table.string('url').defaultTo('')
        table.string('name').defaultTo('')
        table.specificType('ingredients', 'text ARRAY');
        table.specificType('instructions', 'text ARRAY');
        table.timestamps(true, true)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipe').onDelete('CASCADE')
};
