const connection = require('../../database/connection')
const bcrypt = require('bcrypt')
const saltRounds = 10

/**
 * @api {put} /users/:id Update User
 * @apiName UpdateUser
 * @apiGroup Users
 *
 * @apiParam {Number} id User id
 * @apiParam {Number} [active]
 * @apiParam {String} [email]
 * @apiParam {String} [username]
 * @apiParam {String} [password]
 * @apiParam {String} [photo]
 * @apiParam {String} [fullname]
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *    {
 *      "message": "User updated successfully!"
 *    }
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 404 Not Found
 *    {
 *      "error": "User does not exists"
 *    }
 */

module.exports = async function (request, response) {
  const data = request.body
  const { id } = request.params

  if ('password' in request.body) {
    const userpassword = request.body.password
    await bcrypt.hash(userpassword, saltRounds).then(hash => (data.password = hash))
  }

  data.updated_at = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ')
  const result = await connection('users').update(data).where({ id: id })

  if (!result) {
    return response.status(404).json({ error: 'User does not exists.' })
  }

  return response.status(200).json({ message: 'User updated successfully!' })
}
