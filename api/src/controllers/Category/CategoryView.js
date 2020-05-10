const connection = require('../../database/connection')

/**
* @api {get} /categories/:id View Category
* @apiName GetSingleCategory
* @apiGroup Categories
*
* @apiSuccess {Number} id
* @apiSuccess {String} name
*/

module.exports = async function (request, response) {
  const { id } = request.params
  const result = await connection('categories')
    .select('*')
    .where({ 'id': id })
    .first()

  return response.json(result)
}