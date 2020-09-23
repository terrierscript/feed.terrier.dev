import { FeedItem } from "../Item"
import { graphql } from "@octokit/graphql"
import grayMatter from "gray-matter"

// console.log("TOKEN:", process.env.GITHUB_TOKEN?.slice(0, 4))

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
})
// https://developer.github.com/v4/explorer/
const query = `
{
  repository(name: "zenn", owner: "terrierscript") {
    object(expression: "master:articles") {
      ... on Tree {
        entries {
          name,
          object {
            ... on Blob {
              text,
              isTruncated
            }
          }
        }
      }
    }
  }
}
`

const parseMatter = (file: string) => {
  return grayMatter(file)
}

export const parseZennFromGit = async (url: string): Promise<FeedItem[]> => {
  try {
    const content: any = await graphqlWithAuth(query)
    const items: any[] = content?.repository?.object?.entries
    // @ts-ignore
    const feeds: FeedItem[] = items.map((item): FeedItem | null => {
      const { data: { title, emoji, published }, content } = parseMatter(item?.object?.text)
      if (!published) {
        return null
      }
      const slug = item.name.replace(".md")
      const date = slug.split("-")
      return {
        title,
        link: `https://zenn.dev/terrierscript/articles/${slug}`,
        date: new Date(date[0], date[1] - 1, date[2]),
        // description: content
      }
    }).filter(r => r !== null)
    return feeds
  } catch (e) {
    console.warn("XXXXXXXxx")
    console.log("TOKEN:", process.env.GITHUB_TOKEN)
    return []
  }

}
