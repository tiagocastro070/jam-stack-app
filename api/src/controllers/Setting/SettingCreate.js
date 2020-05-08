const connection = require('../../database/connection')

module.exports = async function (request, response) {
  const data = request.body
  data.name = data.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(' ').join('-')
  data.category = 'custom'

  const result = await connection('settings')
    .insert(data)

  return response.json({result})
}
