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

const app = new Hono()

// RPCメソッドの型定義
type RPCMethods = {
  getFeeds: Feed[]
}

const route = app.post('/rpc', async (c) => {
  const { method } = await c.req.json()

  if (method === 'getFeeds') {
    const feeds = await loadAllForSSR()
    const validated = z.array(feedSchema).parse(feeds)
    return c.json({
      result: validated
    })
  }

  return c.json({
    error: {
      message: 'Method not found'
    }
  }, 404)
})

export type AppType = typeof route
export type { RPCMethods }
export const GET = handle(app)
export const POST = handle(app)

