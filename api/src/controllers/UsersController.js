const connection = require('../database/connection')
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {

  async list(request, response) {
    const result = await connection('users as u')
      .select('u.id', 'u.email', 'u.username', 'u.password', 'u.photo', 'u.fullname', 'r.name')
      .leftJoin('roles as r', 'u.roleid', '=', 'r.id')
      // .where('r.id', '>=', Number(request.headers.authorization))

    return response.json(result)
  },


  async create(request, response) {
    const { roleid, email, username, userpassword, photo, fullname } = request.body

    let password = null;
    await bcrypt.hash(userpassword, saltRounds).then(hash => password = hash)

    const result = await connection('users').insert({
      roleid,
      email,
      username,
      password,
      photo,
      fullname
    })

    return response.json({result})
  },


  async view(request, response) {
    const { id } = request.params
    const result = await connection('users as u')
      .select('u.email', 'u.username', 'u.photo', 'u.fullname', 'r.name')
      .leftJoin('roles as r', 'u.roleid', '=', 'r.id')
      .where({ 'u.id': id })
      .first()
    
    return response.json(result)
  },


  async update(request, response) {
    const data = request.body
    const { id } = request.params

    if ('password' in request.body) {
      const userpassword = request.body.password
      await bcrypt.hash(userpassword, saltRounds).then(hash => data.password = hash)
    }

    data.updated_at = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ')
    const result = await connection('users').update(data).where({ id: id })

    return response.json({ message: result === 1 ? 'User updated successfully!' : 'User could not be updated. Please try again.' })
  },

  async delete(request, response) {
    const { id } = request.params
    const result = await connection('users').where({ id: id }).del()
  
    return response.status(204).send()
  }

}