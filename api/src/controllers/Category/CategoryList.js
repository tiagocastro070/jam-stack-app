const connection = require('../../database/connection')

/**
* @api {get} /users List all Users
* @apiName GetAllUsers
* @apiGroup Users
*
* @apiSuccess {Object[]} users Users list.
*/
module.exports = async function (request, response) {
 const result = await connection('categories').select('*')

 return response.json(result)
}