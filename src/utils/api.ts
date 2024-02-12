import { Todo } from '@/types/Todo';

export async function fetcher(url: string) {
  return fetch(url).then((res) => res.json());
}

export async function sendRequest(url: string, { arg }: { arg: Todo }) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}
