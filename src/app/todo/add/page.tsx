'use client';
import { PostRequest } from '@/utils/api';
import { useState } from 'react';
import useSWRMutation from 'swr/mutation';

const TodoAddPage = () => {
  const { trigger } = useSWRMutation('/api/todo/add', PostRequest);
  const [name, setName] = useState('');
  const [isComplete, setIsComplete] = useState(false);

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
          trigger({ id: 0, name, isComplete });
        }}
      >
        Add Data
      </button>
    </>
  );
};

export default TodoAddPage;
