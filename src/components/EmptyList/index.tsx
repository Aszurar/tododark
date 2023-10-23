import { Clipboard } from '../../assets/Clipboard'
import styles from './styles.module.css'

export function EmptyList() {
  return (
    <div className={styles.container}>
      <Clipboard />
      <div className={styles.text}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}
