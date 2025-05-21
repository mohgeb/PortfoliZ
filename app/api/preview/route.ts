import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: Request) {
  const cookieStore = cookies()

  // Set preview mode cookie
  cookieStore.set("preview-mode", "true", {
    path: "/",
    maxAge: 60 * 60, // 1 hour
    sameSite: "strict",
  })

  return NextResponse.redirect(new URL("/preview", request.url))
}
