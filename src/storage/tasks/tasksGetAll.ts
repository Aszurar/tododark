import { TaskProps } from '../../dto/taskDTO'
import { TASK_COLLECTION } from '../storageConfig'

export function tasksGetAll() {
  const tasks = localStorage.getItem(TASK_COLLECTION)
  const tasksFormatted: TaskProps[] = tasks ? JSON.parse(tasks) : []

  return tasksFormatted
}
