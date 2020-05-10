
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.int('roleid').notNullable()
    table.foreign('roleid').references('roles.id')
    table.boolean('active').notNullable().defaultTo(true)
    table.string('email', 255).notNullable().unique()
    table.string('username', 255).notNullable().unique()
    table.string('password', 255).notNullable()
    table.string('photo', 255)
    table.string('fullname', 255)
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
