const connection = require('../../database/connection')

/**
 * @api {post} /categories Create Category
 * @apiName CreateCategory
 * @apiGroup Categories
 * 
 * @apiParam {String} name Category name
 * 
 * @apiSuccess {Number} id Return the id of created category
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 201 OK
 * 
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 400 Bad Request
 *    {
 *      "error": "The category was not created"
 *    }
 */

module.exports = async function (request, response) {
  const { name } = request.body

  const result = await connection('categories').insert({ name })

  if (!result) {
    return response.status(400).json({ error: 'The category was not created' })
  }

  return response.status(201).json({ result })
}
