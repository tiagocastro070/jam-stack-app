const bcrypt = require('bcrypt')
const saltRounds = 10


exports.seed = async function(knex) {
  const hashedSuperAdmin = await new Promise((resolve, reject) => {
    bcrypt.hash('superadmin', saltRounds, function(err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })

  const hashedAdmin = await new Promise((resolve, reject) => {
    bcrypt.hash('admin', saltRounds, function(err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })

  return knex('users')
    .del() // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {roleid: 1, email: 'tiago.070@gmail.com', username: 'tiagocastro', password: hashedSuperAdmin, fullname: 'Tiago Castro'},
        {roleid: 2, email: 'tiago_castro070@hotmail.com', username: 'tiago', password: hashedAdmin, fullname: 'Tiago Castro'},
      ])
    })
}
