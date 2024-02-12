import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const res = await fetch('http://localhost:5088/api/todoitems', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  }).then((res) => res.json());
  return Response.json(res);
}
