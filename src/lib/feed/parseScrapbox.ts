
import axios from "axios"

export const parseFromScrapbox = (url: string) => {
  // @ts-ignore
  return axios.get(url).then(({ data }) => {
    return data.pages.map(({ title, created, ...p }: any) => {
      return {
        title: title,
        date: new Date(created * 1000),
        link: `https://scrapbox.io/terrierscript/${encodeURIComponent(title)}`
      }
    })
  })
}
