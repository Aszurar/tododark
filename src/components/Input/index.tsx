import { ChangeEvent } from 'react'
import styles from './styles.module.css'
import { MAX_TASK_TITLE_LENGTH } from '../../dto/taskDTO'

type InputProps = {
  task: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export function Input({ task, onChange }: InputProps) {
  return (
    <textarea
      value={task}
      maxLength={MAX_TASK_TITLE_LENGTH}
      onChange={onChange}
      className={styles.input}
      placeholder="Adicione uma nova tarefa"
    />
  )
}
