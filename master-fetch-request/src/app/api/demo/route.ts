export async function GET() {
  await new Promise((r) => setTimeout(r, 5000))

  return Response.json({ message: "long time request" })
}