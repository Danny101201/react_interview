import { NextResponse } from "next/server"

export const GET = async () => {
  await new Promise((r) => setTimeout(r, 5000))
  return NextResponse.json({ message: 'hello world ' }, { status: 200 })
}