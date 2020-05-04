const { Router } = require('express')
var cors = require('cors')

const routes = new Router()

const AuthMiddleware = require('./middlewares/auth')
const SessionController = require('./controllers/SessionController')
const UsersController = require('./controllers/UsersController')
const SettingsController = require('./controllers/SettingsController')

routes.use(cors({origin: 'http://localhost:3000'}))

// Session
routes.post('/sessions', SessionController.create)

// Auth middleware
routes.use(AuthMiddleware)

// Users
routes.get('/users', UsersController.list)
routes.post('/users', UsersController.create)
routes.get('/users/:id', UsersController.view)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.delete)

// Settings
routes.get('/settings', SettingsController.list)
routes.post('/settings', SettingsController.create)
routes.get('/settings/:id', SettingsController.view)
routes.put('/settings', SettingsController.update)
routes.delete('/settings/:id', SettingsController.delete)

module.exports = routes