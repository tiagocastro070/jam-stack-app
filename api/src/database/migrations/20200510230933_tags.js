
exports.up = function(knex) {
  return knex.schema.createTable('tags', table => {
    table.increments('id')
    table.string('name', 255).notNullable().unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tags')
};
