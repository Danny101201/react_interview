import { NextRequest, NextResponse } from "next/server"

export const GET = async (response: NextRequest) => {
  const searchParams = response.nextUrl.searchParams
  const errorStatus = searchParams.get('status')
  if (Number(errorStatus) === 404) return NextResponse.json({ status: '404' }, { status: 404 })
  if (Number(errorStatus) === 500) return new NextResponse('error', { status: 500 })
  return NextResponse.json({ status: '200' }, { status: 200 })

}

