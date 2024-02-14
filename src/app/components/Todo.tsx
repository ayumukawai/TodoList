import styles from '@/styles/Todo.module.scss';
import { Todo } from '@/types/Todo';
import { DeleteRequest } from '@/utils/api';
import Link from 'next/link';
import useSWRMutation from 'swr/mutation';

function Todo({ todo, url }: { todo: Todo; url: string }) {
  const { trigger } = useSWRMutation(`/api/todo/${todo.id}`, DeleteRequest);
  return (
    <div className={styles.row}>
      <div className={styles.todo}>
        <div>Todo名:{todo.name}</div>
        <div>終わったかどうか:{todo.isComplete ? '済' : '未'}</div>
      </div>
      <div className={styles.buttons}>
        <Link href={url}>
          <button className={`${styles.edit_button} button`}>編集</button>
        </Link>
        <button
          className={`${styles.delete_button} button`}
          onClick={() => trigger()}
        >
          削除
        </button>
      </div>
    </div>
  );
}

export default Todo;
