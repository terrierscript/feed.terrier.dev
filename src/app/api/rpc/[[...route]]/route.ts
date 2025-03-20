import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { feedRoute } from '../routes/feeds'

const app = new Hono().basePath("/api/rpc")
const route = app.route('/feeds', feedRoute)

export type AppType = typeof route
export const GET = handle(app)