import { Trash } from '@phosphor-icons/react';
import styles from './styles.module.css';
import { CheckBox } from '../CheckBox';
import { TaskProps } from '../../dto/taskDTO';

type TaskCardProps = TaskProps & {
  handleCheckTask: () => void;
  handleDeleteTask: () => void;
}

export function TaskCard({
  id,
  title,
  isChecked,
  handleCheckTask,
  handleDeleteTask
}: TaskCardProps) {

  return (
    <article className={styles.card}>
      <CheckBox
        id={id}
        isChecked={isChecked}
        title={title}
        handleCheckTask={handleCheckTask} />

      <button
        type='button'
        className={styles.deleteButton}
        aria-label="Excluir tarefa"
        onClick={handleDeleteTask}>
        <Trash size={20} weight='bold' />
      </button>
    </article>
  );
}