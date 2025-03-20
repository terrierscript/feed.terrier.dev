import { describe, expect, it } from 'vitest'
import feeds from '../feeds'

describe('feeds routes', () => {
  it('should return all feeds for root path', async () => {
    const res = await feeds.request('/')
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data).toEqual({
      result: expect.any(Array)
    })
  })
})