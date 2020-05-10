const connection = require('../../database/connection')
const bcrypt = require('bcrypt')
const saltRounds = 10

/**
 * @api {post} /users Create User
 * @apiName CreateUser
 * @apiGroup Users
 * 
 * @apiParam {Number} active=1 Sets users to be active or not
 * @apiParam {String} email User email
 * @apiParam {String} username Username
 * @apiParam {String} password Password
 * @apiParam {String} [photo] Photo
 * @apiParam {String} [fullname] Full name
 * 
 * @apiSuccess {Number} userid Return the id of created user
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 201 OK
 * 
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 400 Bad Request
 *    {
 *      "error": "The user was not created"
 *    }
 */

module.exports = async function (request, response) {
  const { roleid, email, username, userpassword, photo, fullname } = request.body

  const active = true
  let password = null
  await bcrypt.hash(userpassword, saltRounds).then(hash => (password = hash))

  const result = await connection('users').insert({
    roleid,
    active,
    email,
    username,
    password,
    photo,
    fullname
  })

  if (!result) {
    return response.status(400).json({ error: 'The user was not created' })
  }

  return response.status(201).json({ result })
}
