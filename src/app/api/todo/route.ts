import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const url = 'http://localhost:5088/api/todoitems';
  const res = await fetch(url).then((res) => res.json());
  return Response.json(res);
}
