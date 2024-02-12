'use client';
import { Todo } from '@/types/Todo';
import { DeleteRequest, GetRequest } from '@/utils/api';
import Link from 'next/link';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

const DeleteButton = ({ id }: { id: number }) => {
  const { trigger } = useSWRMutation(`/api/todo/${id}`, DeleteRequest);
  return <button onClick={() => trigger()}>削除</button>;
};

function TodoIndexPage() {
  const { data, error } = useSWR<Todo[]>('/api/todo', GetRequest);

  if (error) return <div>{error.message}</div>;

  if (!data) return <div>Loading</div>;

  return (
    <>
      {data.map((x) => (
        <>
          <div key={x.id}>TodoId:{x.id}</div>
          <div key={x.id}>Todo名:{x.name}</div>
          <div key={x.id}>終わったかどうか:{x.isComplete ? '済' : '未'}</div>
          <Link href={`/todo/${x.id}`}>
            <button>編集</button>
          </Link>
          <DeleteButton id={x.id} />
        </>
      ))}
      <Link href="/todo/add">
        <button>追加</button>
      </Link>
    </>
  );
}

export default TodoIndexPage;
