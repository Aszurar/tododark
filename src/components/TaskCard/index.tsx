import { Trash } from '@phosphor-icons/react'
import styles from './styles.module.css'
import { CheckBox } from '../CheckBox'
import { TaskProps } from '../../dto/taskDTO'
import { memo } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { utcToZonedTime } from 'date-fns-tz'

type TaskCardProps = TaskProps & {
  handleCheckTask: () => void
  handleDeleteTask: () => void
}

export function TaskCard({
  id,
  title,
  isChecked,
  createdAt,
  handleCheckTask,
  handleDeleteTask,
}: TaskCardProps) {
  const createdAtDate = new Date(createdAt)

  const createdAtDateFormattedRelativeToNow = formatDistanceToNow(
    createdAtDate,
    {
      locale: ptBR,
      addSuffix: true,
    },
  )
  const timeZone = 'America/Sao_Paulo'
  const zonedDate = utcToZonedTime(createdAtDate, timeZone)
  const formattedZonedDate = format(
    zonedDate,
    "dd 'de' MMMM 'de' yyyy, 'às' HH:mm:ss",
    { locale: ptBR },
  )
  const formattedDateUTCISO = format(
    createdAtDate,
    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
    { locale: ptBR },
  )

  return (
    <article className={styles.card}>
      <div className={styles.subContainer}>
        <CheckBox
          id={id}
          isChecked={isChecked}
          title={title}
          handleCheckTask={handleCheckTask}
        />
        <button
          type="button"
          className={styles.deleteButton}
          aria-label="Excluir tarefa"
          onClick={handleDeleteTask}
        >
          <Trash size={20} weight="bold" />
        </button>
      </div>

      <time
        title={formattedZonedDate}
        dateTime={formattedDateUTCISO}
        className={styles.createdAt}
      >
        {createdAtDateFormattedRelativeToNow}
      </time>
    </article>
  )
}

export const TaskCardMemoized = memo(TaskCard, (prevProps, nextProps) => {
  return prevProps.isChecked === nextProps.isChecked
})
