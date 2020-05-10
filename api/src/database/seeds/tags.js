
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {id: 1, name: 'javascript'},
        {id: 2, name: 'nodejs'},
        {id: 3, name: 'react'}
      ]);
    });
};
