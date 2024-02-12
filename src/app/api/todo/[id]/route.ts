import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const url = `http://localhost:5088/api/todoitems/${id}`;
  const res = await fetch(url).then((res) => res.json());
  return Response.json(res);
}

export async function PUT(req: NextRequest) {}
