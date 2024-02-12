'use client';
import { sendRequest } from '@/utils/api';
import useSWRMutation from 'swr/mutation';

const TodoAddPage = () => {
  const { trigger } = useSWRMutation('/api/todo/add', sendRequest);

  return (
    <button
      onClick={() => {
        trigger({ id: 0, name: 'hogehoge', isComplete: false });
      }}
    >
      Add Data
    </button>
  );
};

export default TodoAddPage;
