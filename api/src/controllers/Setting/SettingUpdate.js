const connection = require('../../database/connection')

module.exports = async function (request, response) {
  const { data } = request.body
  const condition = typeof data[0][Object.keys(data[0])[0]] === 'number' ? 'id' : 'name'

  const result = await connection.transaction(trx => {
    const queries = []
    data.forEach(setting => {
      const toMatch = condition === 'id' ? setting.id : setting.name
      const query = connection('settings')
        .where(condition, toMatch)
        .update({
          value: setting.value,
        })
        .transacting(trx) // This makes every update be in the same transaction
      queries.push(query)
    })

    Promise.all(queries) // Once every query is written
      .then(trx.commit) // We try to execute all of them
      .catch(trx.rollback) // And rollback in case any of them goes wrong
  });

  return response.status(200).send()
}
