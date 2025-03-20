import { Hono } from 'hono'
import { parseMedia } from '../../../../lib/feed/parser/parseMedia'
import { getConfigByMedia } from '../../../../lib/feed/rssConfig'

const media = new Hono()

export const mediaRoute = media.get('', async (c) => {
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

export type MediaRouteType = typeof mediaRoute

