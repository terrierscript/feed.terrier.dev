import { hc } from 'hono/client'
import type { AppType, Feed, RPCMethods } from '../../app/api/feeds/route'

const client = hc<AppType>('/api/feeds')

export const callRPC = async <M extends keyof RPCMethods>(
  method: M
): Promise<RPCMethods[M]> => {
  const response = await client.rpc.$post({
    json: { method }
  })

  const data = await response.json()

  if ('error' in data) {
    throw new Error(`RPC error: ${data.error.message}`)
  }

  return data.result
}
