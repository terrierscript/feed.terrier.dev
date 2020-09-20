import { useFeed } from "../lib/feed/loader"


const useFeeds = () => {
  const s = useFeed()
  console.log(s)
}

export const Feeds = () => {
  useFeeds()
  return <div>

  </div>
}