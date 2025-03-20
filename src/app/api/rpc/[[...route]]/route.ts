import { handle } from 'hono/vercel'
import { app } from '../routes/app'

export const GET = handle(app)