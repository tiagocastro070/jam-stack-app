const connection = require('../database/connection')

module.exports = {

  async list(request, response) {
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
  },


  async create(request, response) {
    const data = request.body
    data.name = data.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(' ').join('-')
    data.category = 'custom'

    const result = await connection('settings')
      .insert(data)

    return response.json({result})
  },


  async view(request, response) {
    const { id } = request.params
    const result = await connection('settings')
      .select('*')
      .where({ id: id })
      .first()
    
    return response.json(result)
  },


  async update(request, response) {
    const { data } = request.body
    const condition = typeof data[0][Object.keys(data[0])[0]] === 'number' ? 'id' : 'name'

    const result = await connection.transaction(trx => {
      const queries = [];
      data.forEach(setting => {
        const toMatch = condition === 'id' ? setting.id : setting.name
        const query = connection('settings')
          .where(condition, toMatch)
          .update({
            value: setting.value,
          })
          .transacting(trx); // This makes every update be in the same transaction
        queries.push(query);
      });
  
      Promise.all(queries) // Once every query is written
        .then(trx.commit) // We try to execute all of them
        .catch(trx.rollback); // And rollback in case any of them goes wrong
    });

    return response.status(200).send()
  },
  
  
  async delete(request, response) {
    const { id } = request.params
    const result = await connection('settings')
      .where({ id: id, category: 'custom' }).del()
  
    return response.status(204).send()
  }
  
}