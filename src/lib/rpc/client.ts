import { hc } from 'hono/client'
// import { FeedsRouteType } from '../../app/api/rpc/routes/feeds'
import { AppType } from '../../app/api/rpc/routes/app'

export const honoClient = hc<AppType>('')
