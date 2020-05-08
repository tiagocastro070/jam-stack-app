const connection = require('../../database/connection')

/**
* @api {get} /users List all Users
* @apiName GetAllUsers
* @apiGroup Users
*
* @apiSuccess {Object[]} users Users list.
*/
module.exports = async function (request, response) {
 const result = await connection('users as u')
   .select('u.id', 'u.email', 'u.username', 'u.password', 'u.photo', 'u.fullname', 'r.name')
   .leftJoin('roles as r', 'u.roleid', '=', 'r.id')
   // .where('r.id', '>=', Number(request.headers.authorization))

 return response.json(result)
}