const connection = require('../../database/connection')

/**
 * @api {delete} /categories/:id Delete Category
 * @apiName DeleteCategory
 * @apiGroup Categories
 *
 * @apiParam {Number} id Category id
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 404 Not Found
 *    {
 *      "error": "Category does not exists"
 *    }
 */

module.exports = async function (request, response) {
  const { id } = request.params
  const result = await connection('categories').where({ id }).del()

  if (result === 0) {
    return response.status(404).json({ error: 'Category does not exists.' }).send()
  }

  return response.status(204).send()
}
