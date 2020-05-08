const connection = require('../../database/connection')

module.exports = async function (request, response) {
  const { cat } = request.query
  if (cat) {
    const result = await connection('settings')
      .select('*')
      .where('category', '=', cat)
    return response.json(result)
  } else {
    const result = await connection('settings')
      .select('*')
    return response.json(result)
  }
}
