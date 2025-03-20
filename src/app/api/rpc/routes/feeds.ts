import { Hono } from 'hono'
import { loadAllForSSR } from '../../../../lib/feed/loadAll'
import { mediaRoute } from './media'

const feeds = new Hono()

export const feedRoute = feeds
  .get('/', async (c) => {
    const feeds = await loadAllForSSR()
    return c.json({
      result: feeds
    })
  })
  .route('/', mediaRoute)
