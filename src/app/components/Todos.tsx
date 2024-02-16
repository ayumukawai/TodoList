'use client';
import Todo from '@/app/components/Todo';
import styles from '@/styles/Todos.module.scss';
import { GetRequest } from '@/utils/api';
import Link from 'next/link';
import useSWR from 'swr';

function Todos() {
  const { data: todoData, error } = useSWR<Todo[]>('/api/todo', GetRequest);

  if (error) return <div>{error.message}</div>;

  if (!todoData) return <div>Loading</div>;

  return (
    <div>
      <div className={styles.container}>
        {todoData.map((todo) => (
          <Todo key={todo.id} todo={todo} url={`/todo/${todo.id}`} />
        ))}
      </div>
      <div className={styles.button_row}>
        <Link href="/todo/add" className={styles.link}>
          <button className={`${styles.add_button} button`}>追加</button>
        </Link>
      </div>
    </div>
  );
}

export default Todos;
