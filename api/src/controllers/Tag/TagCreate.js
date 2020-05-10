const connection = require('../../database/connection')

/**
 * @api {post} /tags Create Tag
 * @apiName CreateTag
 * @apiGroup Tags
 * 
 * @apiParam {String} name Tag name
 * 
 * @apiSuccess {Number} id Return the id of created tag
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 201 OK
 * 
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 400 Bad Request
 *    {
 *      "error": "The tag was not created"
 *    }
 */

module.exports = async function (request, response) {
  const { name } = request.body

  const result = await connection('tags').insert({ name })

  if (!result) {
    return response.status(400).json({ error: 'The tag was not created' })
  }

  return response.status(201).json({ result })
}
