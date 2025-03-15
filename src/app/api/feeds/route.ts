import { NextResponse } from "next/server"
import { loadAllForSSR } from "../../../lib/feed/loadAll"

export async function GET() {
  const feeds = await loadAllForSSR()
  return NextResponse.json(feeds)
}
