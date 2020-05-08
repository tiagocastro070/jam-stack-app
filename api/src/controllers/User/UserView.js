const connection = require('../../database/connection')

/**
* @api {get} /users/:id View User
* @apiName GetSingleUser
* @apiGroup Users
*
* @apiSuccess {Number} id
* @apiSuccess {String} email
* @apiSuccess {String} username
* @apiSuccess {String} photo
* @apiSuccess {String} fullname
* @apiSuccess {String} role
*/

module.exports = async function (request, response) {
  const { id } = request.params
  const result = await connection('users as u')
    .select('u.id', 'u.email', 'u.username', 'u.photo', 'u.fullname', 'r.name as role')
    .leftJoin('roles as r', 'u.roleid', '=', 'r.id')
    .where({ 'u.id': id })
    .first()

  return response.json(result)
}