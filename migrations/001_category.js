exports.up = function(knex, Promise) {
    return knex.schema.createTable('category', function(table) {
        table.increments().notNullable()
        table.string('name').defaultTo('')
        table.timestamps(true, true)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('category').onDelete('CASCADE')
};