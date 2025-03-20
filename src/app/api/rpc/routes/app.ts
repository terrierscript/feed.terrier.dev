import { Hono } from 'hono'
import { feedRoute } from './feeds'

export const app = new Hono().basePath("/api/rpc")
const route = app.route('/feeds', feedRoute)

export type AppType = typeof route
