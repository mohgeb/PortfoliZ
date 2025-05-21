import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Here you would typically send an email or save to a database
  // For this example, we'll just log the data and return a success response
  console.log("Contact form submission:", { name, email, subject, message })

  // Return a JSON response
  return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
}
