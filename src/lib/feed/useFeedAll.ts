import useSWR from 'swr'
import { honoClient } from '../rpc/client'

export const useFeedAll = () => {
  const { data, error, isLoading } = useSWR('honoClient.rpc.feeds', async () => {
    console.log("START")
    const data = await honoClient.api.rpc.feeds.$get()
    const json = await data.json()
    console.log(json)
    return json.result
  })

  return {
    feeds: data ?? [],
    error,
    isLoading
  }
}
