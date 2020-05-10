const connection = require('../../database/connection')

/**
 * @api {delete} /tags/:id Delete Tag
 * @apiName DeleteTag
 * @apiGroup Tags
 *
 * @apiParam {Number} id Tag id
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 404 Not Found
 *    {
 *      "error": "Tag does not exists"
 *    }
 */

module.exports = async function (request, response) {
  const { id } = request.params
  const result = await connection('tags').where({ id }).del()

  if (result === 0) {
    return response.status(404).json({ error: 'Tag does not exists.' }).send()
  }

  return response.status(204).send()
}
