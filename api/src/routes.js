const { Router } = require('express')
var cors = require('cors')

const routes = new Router()

const AuthMiddleware = require('./middlewares/auth')
const SessionController = require('./controllers/SessionController')
const UsersController = require('./controllers/User/UserController')
const SettingsController = require('./controllers/Setting/SettingsController')
const CategoriesController = require('./controllers/Category/CategoryController')
const TagsController = require('./controllers/Tag/TagController')

routes.use(cors({ origin: 'http://localhost:3000' }))

// Session
routes.post('/sessions', SessionController.create)

// Auth middleware
routes.use(AuthMiddleware)

// Users
routes.get('/users', UsersController.list)
routes.post('/users', UsersController.create)
routes.get('/users/:id', UsersController.view)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.del)

// Settings
routes.get('/settings', SettingsController.list)
routes.post('/settings', SettingsController.create)
routes.get('/settings/:id', SettingsController.view)
routes.put('/settings', SettingsController.update)
routes.delete('/settings/:id', SettingsController.del)

// Categories
routes.get('/categories', CategoriesController.list)
routes.post('/categories', CategoriesController.create)
routes.get('/categories/:id', CategoriesController.view)
routes.put('/categories/:id', CategoriesController.update)
routes.delete('/categories/:id', CategoriesController.del)

// Tags
routes.get('/tags', TagsController.list)
routes.post('/tags', TagsController.create)
routes.get('/tags/:id', TagsController.view)
routes.put('/tags/:id', TagsController.update)
routes.delete('/tags/:id', TagsController.del)

module.exports = routes
