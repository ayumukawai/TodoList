'use client';
import { Todo } from '@/types/Todo';
import { GetRequest, PutRequest } from '@/utils/api';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

const Todo = ({ data }: { data: Todo }) => {
  const { trigger } = useSWRMutation(`/api/todo/${data.id}`, PutRequest);
  const [name, setName] = useState(data.name);
  const [isComplete, setIsComplete] = useState(data.isComplete);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>
        <input
          type="radio"
          value="true"
          checked={isComplete === true}
          onChange={(e) => setIsComplete(true)}
        />
        済
      </label>
      <label>
        <input
          type="radio"
          value="false"
          checked={isComplete === false}
          onChange={(e) => setIsComplete(false)}
        />
        未
      </label>
      <button
        onClick={() => {
          trigger({ id: data.id, name, isComplete });
        }}
      >
        Put Data
      </button>
    </>
  );
};

const TodoEditPage = () => {
  const params = useParams<{ id: string }>();
  const { data, error } = useSWR(`/api/todo/${params.id}`, GetRequest);

  if (error) return <div>Error!</div>;

  if (!data) return <div>Loading...</div>;

  return <Todo data={data} />;
};

export default TodoEditPage;
