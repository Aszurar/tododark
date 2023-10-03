import { ChangeEvent } from 'react';
import styles from './styles.module.css';

type InputProps = {
  task: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ task, onChange }: InputProps) {
  return (
    <input
      type="text"
      value={task}
      onChange={onChange}
      className={styles.input}
      placeholder="Adicione uma nova tarefa"
    />
  )
}