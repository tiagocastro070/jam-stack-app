const connection = require('../../database/connection')

/**
 * @api {put} /categories/:id Update Category
 * @apiName UpdateCategory
 * @apiGroup Categories
 *
 * @apiParam {Number} id
 * @apiParam {String} name
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *    {
 *      "message": "Category updated successfully!"
 *    }
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 404 Not Found
 *    {
 *      "error": "Category does not exists"
 *    }
 */

module.exports = async function (request, response) {
  const data = request.body
  const { id } = request.params

  const result = await connection('categories').update(data).where({ id: id })

  if (!result) {
    return response.status(404).json({ error: 'Category does not exists.' })
  }

  return response.status(200).json({ message: 'Category updated successfully!' })
}
