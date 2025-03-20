import { hc } from 'hono/client'
// import { FeedsRouteType } from '../../app/api/rpc/routes/feeds'
import { AppType } from '../../app/api/rpc/[[...route]]/route'

export const honoClient = hc<AppType>('/api/rpc')
