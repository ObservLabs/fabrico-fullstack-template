import { OpenAPIHono } from '@hono/zod-openapi'
import { createFabricoAuthHandler } from '@fabrico/sdk/server'
import { getFabrico } from '../lib/fabrico'


const routes = new OpenAPIHono<{ Bindings: Env }>()

routes.route('/auth', createFabricoAuthHandler((c) => getFabrico(c.env)))


export { routes }