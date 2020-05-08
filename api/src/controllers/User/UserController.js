const view = require('./UserView')
const list = require('./UserList')
const create = require('./UserCreate')
const update = require('./UserUpdate')
const del = require('./UserDelete')

module.exports = {
  list,
  create,
  view,
  update,
  del
}
