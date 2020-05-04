
exports.seed = function(knex) {
  return knex('roles')
    .del() // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {id: 1, name: 'superadmin'},
        {id: 2, name: 'admin'},
        {id: 3, name: 'editor'},
        {id: 4, name: 'registered'}
      ])
    })
}
