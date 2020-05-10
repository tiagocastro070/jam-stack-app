const connection = require('../../database/connection')

/**
 * @api {delete} /settings/:id Delete Setting
 * @apiName DeleteSetting
 * @apiGroup Setting
 *
 * @apiParam {Number} id Setting id
 *
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 *
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 404 Not Found
 *    {
 *      "error": "Custom Setting does not exists"
 *    }
 */

module.exports = async function(request, response) {
  const { id } = request.params
  const result = await connection('settings')
    .where({ id: id, category: 'custom' }).del()

  return response.status(204).send()
}
