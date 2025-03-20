import { hc } from 'hono/client'
import type { AppType } from '../../app/api/rpc/[...route]/route'

export const honoClient = hc<AppType>('/api/rpc')
