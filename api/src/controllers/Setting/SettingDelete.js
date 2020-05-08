const connection = require('../../database/connection')

module.exports = async function(request, response) {
  const { id } = request.params
  const result = await connection('settings')
    .where({ id: id, category: 'custom' }).del()

  return response.status(204).send()
}
