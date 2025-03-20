import { describe, expect, it } from 'vitest'
import { mediaRoute } from '../media'

describe('media routes', () => {
  it('should return 400 for missing media parameter', async () => {
    const res = await mediaRoute.request('', {
      method: 'GET',
      headers: new Headers({ 'content-type': 'application/json' })
    })
    expect(res.status).toBe(400)
    const data = await res.json()
    expect(data).toEqual({
      result: null,
      error: {
        message: "Media parameter is required",
        code: "INVALID_MEDIA"
      }
    })
  })
})