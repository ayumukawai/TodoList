import { Todo } from '@/types/Todo';

export async function GetRequest(url: string) {
  return fetch(url).then((res) => res.json());
}

export async function PostRequest(url: string, { arg }: { arg: Todo }) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

export async function PutRequest(url: string, { arg }: { arg: Todo }) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  }).then((res) => {
    if (res.status === 204) return;
  });
}

export async function DeleteRequest(url: string) {
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.status === 204) return;
  });
}
