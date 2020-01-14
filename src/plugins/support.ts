import fp from 'fastify-plugin'

declare module 'fastify' {
  interface FastifyInstance<HttpServer, HttpRequest, HttpResponse> {
    someSupport(): string
  }
}

export default fp(async function(fastify, opts, next) {
  fastify.decorate('someSupport', function() {
    return 'hugs'
  })
})
