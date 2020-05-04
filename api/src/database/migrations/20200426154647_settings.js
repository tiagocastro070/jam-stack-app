
exports.up = function(knex) {
  return knex.schema.createTable('settings', table => {
    table.increments('id')
    table.string('name', 255).notNullable().unique()
    table.string('title', 255).notNullable()
    table.string('description', 255)
    table.string('type', 255).notNullable()
    table.string('value', 255)
    table.string('category', 255).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('settings')
};
