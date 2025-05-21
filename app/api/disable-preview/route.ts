import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: Request) {
  const cookieStore = cookies()

  // Remove preview mode cookie
  cookieStore.delete("preview-mode")

  return NextResponse.redirect(new URL("/", request.url))
}
