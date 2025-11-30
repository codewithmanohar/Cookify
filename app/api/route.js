export async function GET() {
  return Response.json({ message: "This is a GET request" });
}

export async function POST(request) {
  const body = await request.json();

  return Response.json({
    message: "This is a POST request",
    receivedData: body
  });
}
  