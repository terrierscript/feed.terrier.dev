
export type Config = {
  id: string,
  media: string,
  origin: string
  bgColor: string
  color?: string
}
export const rssConfig: Config[] = [
  {
    id: "qiita",
    media: "Qiita",
    origin: "https://qiita.com/terrierscript/feed.atom",
    bgColor: "#55c500"
  },
  {
    id: "devto",
    media: "dev.to",
  // proxy: "/feed/devto",
    origin: "https://dev.to/feed/terrierscript",
    bgColor: "#000"
  },
  {
    id: "mediun",
    media: "Medium",
    origin: "https://medium.com/feed/@terrierscript",
    color: "#fff",
    bgColor: "#000"
  },
  {
    id: "scrapbox",
    media: "Scrapbox",
    origin: "https://scrapbox.io/api/pages/terrierscript?limit=1000",
    bgColor: "#29a972",
    color: "#fff"
  },
  {
    id: "note",
    media: "note",
    origin: "https://note.mu/terrierscript/rss",
    bgColor: "#2cb696",
    color: "#fff"
  },
  {
    id: "zenn",
    media: "zenn",
    origin: "https://zenn.dev/terrierscript",
    bgColor: "#3ea8ff",
    color: "white"
  }
]

export const getConfigByMedia = (media: string) => {
  return rssConfig.find(r => {
    return r.media === media || r.id === media
  })
}