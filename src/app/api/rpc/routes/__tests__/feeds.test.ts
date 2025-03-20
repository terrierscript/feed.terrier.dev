import { describe, expect, it } from 'vitest'
import { feedRoute } from '../feeds'

describe('feeds routes', () => {
  it('should return all feeds for root path', async () => {
    const res = await feedRoute.request('/')
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data).toEqual({
      result: expect.any(Array)
    })
  })
})