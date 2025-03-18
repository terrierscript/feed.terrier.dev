import useSWR from 'swr'
import { callRPC } from '../rpc/client'

export const useFeedAll = () => {
  const { data, error, isLoading } = useSWR(
    'getFeeds',
    () => callRPC('getFeeds')
  )

  return {
    feeds: data ?? [],
    error,
    isLoading
  }
}
