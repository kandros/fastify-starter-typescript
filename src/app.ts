import path from 'path'
import AutoLoad from 'fastify-autoload'
import fp from 'fastify-plugin'

export default fp(function(fastify, opts, next) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
    includeTypeScript: process.env.NODE_ENV === 'test',
  })

  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services'),
    options: Object.assign({}, opts),
    includeTypeScript: process.env.NODE_ENV === 'test',
  })

  // Make sure to call next when done
  next()
})
