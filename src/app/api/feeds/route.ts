import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { z } from 'zod'
import { loadAllForSSR } from "../../../lib/feed/loadAll"

// フィードの型定義
export type Feed = {
  id: string
  title: string
  link: string
  items: {
    title: string
    link: string
    pubDate?: string
    content?: string
  }[]
}

const feedSchema = z.object({
  id: z.string(),
  title: z.string(),
  link: z.string(),
  items: z.array(z.object({
    title: z.string(),
    link: z.string(),
    pubDate: z.string().optional(),
    content: z.string().optional()
  }))
})

export type RPCResponse<T> = {
  result: T
  error: null
} | {
  result: null
  error: {
    message: string
    code: string
  }
}

/**
 * @deprecated Use /api/rpc/feeds instead
 */
const app = new Hono().basePath("/api/feeds")


const route = app.get('/', async (c) => {
  // const { method } = await c.req

  const feeds = await loadAllForSSR()
  // const validated = z.array(feedSchema).parse(feeds)
  return c.json({
    result: feeds
  })

})

export type AppType = typeof route
export const GET = handle(app)
// export const POST = handle(app)

