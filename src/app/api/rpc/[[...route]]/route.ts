import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { loadAllForSSR } from "../../../../lib/feed/loadAll"
import { parseMedia } from "../../../../lib/feed/parser/parseMedia"
import { getConfigByMedia } from "../../../../lib/feed/rssConfig"

const app = new Hono().basePath("/api/rpc")

// ルートパスのハンドラー
app.get('/feeds', async (c) => {
  const feeds = await loadAllForSSR()
  return c.json({
    result: feeds
  })
})

// メディア別のハンドラー
app.get('/feeds/:media', async (c) => {
  const media = c.req.param('media')
  if (!media) {
    return c.json({
      result: null,
      error: {
        message: "Media parameter is required",
        code: "INVALID_MEDIA"
      }
    }, 400)
  }

  const config = getConfigByMedia(media)
  if (!config) {
    return c.json({
      result: null,
      error: {
        message: "Invalid media",
        code: "INVALID_MEDIA"
      }
    }, 400)
  }

  try {
    const data = await parseMedia(config)
    return c.json({
      result: data
    })
  } catch (error) {
    return c.json({
      result: null,
      error: {
        message: "Failed to fetch media",
        code: "FETCH_ERROR"
      }
    }, 500)
  }
})

export type AppType = typeof app
export const GET = handle(app)