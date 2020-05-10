const connection = require('../../database/connection')

/**
 * @api {put} /tags/:id Update Tag
 * @apiName UpdateTag
 * @apiGroup Tags
 *
 * @apiParam {Number} id
 * @apiParam {String} name
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *    {
 *      "message": "Tag updated successfully!"
 *    }
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 404 Not Found
 *    {
 *      "error": "Tag does not exists"
 *    }
 */

module.exports = async function (request, response) {
  const data = request.body
  const { id } = request.params

  const result = await connection('tags').update(data).where({ id: id })

  if (!result) {
    return response.status(404).json({ error: 'Tag does not exists.' })
  }

  return response.status(200).json({ message: 'Tag updated successfully!' })
}
