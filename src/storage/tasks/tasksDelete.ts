import { TaskProps } from '../../dto/taskDTO'
import { TASK_COLLECTION } from '../storageConfig'
import { tasksGetAll } from './tasksGetAll'

type TaskDeleteProps = Pick<TaskProps, 'id'>

export function tasksDelete({ id }: TaskDeleteProps) {
  const storage = tasksGetAll()
  const storageFiltered = storage.filter((task) => task.id !== id)
  const storageFilteredFormatted = JSON.stringify(storageFiltered)

  localStorage.setItem(TASK_COLLECTION, storageFilteredFormatted)
}

export function tasksDeleteAll() {
  localStorage.removeItem(TASK_COLLECTION)
}
