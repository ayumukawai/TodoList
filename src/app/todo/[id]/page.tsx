'use client';
import { Todo } from '@/types/Todo';
import { fetcher } from '@/utils/api';
import { useParams } from 'next/navigation';
import useSWR from 'swr';

const TodoEditPage = () => {
  const params = useParams<{ id: string }>();
  const { data, error } = useSWR<Todo>(
    `http://localhost:5088/api/todoitems/${params.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;

  if (!data) return <div>Loading</div>;

  return (
    <>
      <div>TodoId:{params.id}</div>
      <div>TodoContent:{data.name}</div>
      <div>TodoContent:{data.isComplete ? '済' : '未'}</div>
    </>
  );
};

export default TodoEditPage;
