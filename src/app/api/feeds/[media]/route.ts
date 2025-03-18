import { NextRequest, NextResponse } from "next/server"
import { parseMedia } from "../../../../lib/feed/parser/parseMedia"
import { getConfigByMedia } from "../../../../lib/feed/rssConfig"

export const GET = async function (
  request: NextRequest,
  { params }: { params: Promise<{ media: string }> }
) {
  const { media } = await params
  if (!media || typeof media !== "string") {
    return new NextResponse(null, { status: 400 })
  }

  const config = getConfigByMedia(media)
  if (!config) {
    return new NextResponse(null, { status: 400 })
  }

  const data = await parseMedia(config)
  return NextResponse.json(data)
}
