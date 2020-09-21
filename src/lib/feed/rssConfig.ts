export type Config = {
  id: string,
  origin: string
} & {
    [key in string]: unknown
  }
export const rssConfig: Config[] = [
  {
    id: "qiita",
    media: "Qiita",
    // proxy: "/feed/qiita",
    origin: "https://qiita.com/terrierscript/feed.atom",
    dev: null,
    bgColor: "#55c500"
  },
  {
    id: "devto",
    media: "dev.to",
    // proxy: "/feed/devto",
    dev: "https://dev.to/feed/terrierscript",
    origin: "https://dev.to/feed/terrierscript",
    bgColor: "#000"
  },
  {
    id: "mediun",
    media: "Medium",
    // proxy: "/feed/medium",
    origin: "https://medium.com/feed/@terrierscript",
    dev: null,
    color: "#fff",
    bgColor: "#000"
  },
  {
    id: "scrapbox",
    media: "Scrapbox",
    // proxy: "/feed/scrapbox",
    // origin: "https://scrapbox.io/api/feed/terrierscript/",
    origin: "https://scrapbox.io/api/pages/terrierscript?limit=1000",
    dev: null,
    bgColor: "#29a972",
    color: "#fff"
  },
  {
    id: "note",
    media: "note",
    // proxy: "/feed/note",
    origin: "https://note.mu/terrierscript/rss",
    dev: "https://note.mu/terrierscript/rss",
    // dev: null,
    bgColor: "#2cb696",
    color: "#fff"
  }
]

export const getConfigByMedia = (media: string) => {
  return rssConfig.find(r => {
    return r.media === media || r.id === media
  })
}