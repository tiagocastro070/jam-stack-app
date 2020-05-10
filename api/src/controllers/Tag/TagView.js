const connection = require('../../database/connection')

/**
* @api {get} /tags/:id View Tag
* @apiName GetSingleTag
* @apiGroup Tags
*
* @apiSuccess {Number} id
* @apiSuccess {String} name
*/

module.exports = async function (request, response) {
  const { id } = request.params
  const result = await connection('tags')
    .select('*')
    .where({ 'id': id })
    .first()

  return response.json(result)
}