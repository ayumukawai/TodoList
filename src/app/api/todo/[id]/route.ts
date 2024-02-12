import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const url = `http://localhost:5088/api/todoitems/${id}`;
  const res = await fetch(url).then((res) => res.json());
  return Response.json(res);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const body = await req.json();
  await fetch(`http://localhost:5088/api/todoitems/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 204) return;
  });
  return new NextResponse(null, { status: 204 });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  await fetch(`http://localhost:5088/api/todoitems/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.status === 204) return;
  });
  return new NextResponse(null, { status: 204 });
}
