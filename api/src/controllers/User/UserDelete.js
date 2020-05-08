const connection = require('../../database/connection')

/**
 * @api {delete} /users/:id Delete User
 * @apiName DeleteUser
 * @apiGroup Users
 *
 * @apiParam {Number} id User id
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 404 Not Found
 *    {
 *      "error": "User does not exists"
 *    }
 */

module.exports = async function (request, response) {
  const { id } = request.params
  const result = await connection('users').where({ id: id }).del()

  if (result === 0) {
    return response.status(404).json({ error: 'User does not exists.' }).send()
  }

  return response.status(204).send()
}
