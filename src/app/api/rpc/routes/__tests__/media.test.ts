import { describe, expect, it } from 'vitest'
import media from '../media'

describe('media routes', () => {
  it('should return feed data for valid media', async () => {
    const res = await media.request('/zenn')
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data).toEqual({
      result: expect.any(Array)
    })
  })

  it('should return 400 for invalid media', async () => {
    const res = await media.request('/invalid-media')
    expect(res.status).toBe(400)
    const data = await res.json()
    expect(data).toEqual({
      result: null,
      error: {
        message: "Invalid media",
        code: "INVALID_MEDIA"
      }
    })
  })
})