const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const connection = require('../database/connection')
const { secret, expiresIn } = require('../configs/auth-config')

module.exports = {
  async create(request, response) {
    const { email, password } = request.body
    const doesUserExist = await connection('users').select('id', 'email', 'username', 'password').where({ email: email }).first()

    if (!doesUserExist) {
      return response.status(401).json({ error: 'user does not exist'})
    }

    const { id, username } = doesUserExist

    const comparePasswords = await bcrypt.compare(password, doesUserExist.password, function(err, result) {
      if (!result) {
        return response.status(401).json({ error: 'wrong password'})
      }
      return response.status(201).json({
        user: {
          id,
          email,
          username
        },
        token: jwt.sign({ id }, secret, {
          expiresIn
        })
      })
    })

  }
}