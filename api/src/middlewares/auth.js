const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const { secret } = require('../configs/auth-config')

module.exports = async (request, response, next) => {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json({ message: 'user not authenticated' })
  }
  
  const [, token] = authHeader.split(' ')
  
  try {
    const decoded = await promisify(jwt.verify)(token, secret)
    return next()
  } catch(err) {
    return response.status(401).json({ token: 0, message: 'invalid token' })
  }
}