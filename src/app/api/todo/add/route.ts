export async function POST(req: Request) {
  const body = await req.json();
  const res = await fetch('http://localhost:5088/api/todoitems', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  return Response.json(res);
}
