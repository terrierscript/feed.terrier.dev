import useSWR from 'swr'
import { honoClient } from '../rpc/client'


export const useFeedAll = () => {
  console.log("useFeedAll")
  const { data, error, isLoading } = useSWR('honoClient.rpc.$get_getFeeds', async () => {
    console.log("YYYYYY")
    const data = await honoClient.api.feeds.$get('getFeeds')
    console.log("XXXXXXXX", data)
    const json = await data.json()
    return json.result
  })

  return {
    feeds: data ?? [],
    error,
    isLoading
  }
}
