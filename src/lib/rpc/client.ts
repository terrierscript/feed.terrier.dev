import { hc } from 'hono/client'
import type { AppType, Feed, RPCMethods } from '../../app/api/feeds/route'

export const honoClient = hc<AppType>('/api/feeds')
