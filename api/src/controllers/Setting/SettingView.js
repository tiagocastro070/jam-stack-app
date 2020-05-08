const connection = require('../../database/connection')

module.exports = async function (request, response) {
  const { id } = request.params
  const result = await connection('settings')
    .select('*')
    .where({ id: id })
    .first()
  
  return response.json(result)
}
