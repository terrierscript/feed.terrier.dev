import useSWR from 'swr'
import { honoClient } from '../rpc/client'

export const useFeedAll = () => {
  const { data, error, isLoading } = useSWR('honoClient.rpc.feeds', async () => {

    const data = await honoClient.api.rpc.feeds.$get()
    const json = await data.json()
    return json.result
  })

  return {
    feeds: data ?? [],
    error,
    isLoading
  }
}
