import { build } from '../helper'
import Fastify from 'fastify'

let app: Fastify.FastifyInstance

beforeEach(() => {
  app = build()
})
afterEach(() => {
  app.close()
})

test('default root route', async () => {
  const res = await app.inject({
    url: '/',
  })

  expect(JSON.parse(res.payload)).toStrictEqual({ root: true })
})

// If you prefer async/await, use the following
//
// test('default root route', async (t) => {
//   const app = build(t)
//
//   const res = await app.inject({
//     url: '/'
//   })
//   t.deepEqual(JSON.parse(res.payload), { root: true })
// })
