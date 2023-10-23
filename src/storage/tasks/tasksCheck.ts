import { TaskProps } from '../../dto/taskDTO'
import { TASK_COLLECTION } from '../storageConfig'
import { tasksGetAll } from './tasksGetAll'

type TaskCheckProps = Pick<TaskProps, 'id'>

export function taskCheck({ id }: TaskCheckProps) {
  const storage = tasksGetAll()
  const storageUpdated = storage.map((task) => {
    if (task.id === id) {
      task.isChecked = !task.isChecked
    }
    return task
  })
  const storageFormatted = JSON.stringify(storageUpdated)

  localStorage.setItem(TASK_COLLECTION, storageFormatted)
}

export function checkAllTasks() {
  const storage = tasksGetAll()
  const storageUpdated = storage.map((task) => {
    task.isChecked = true
    return task
  })
  const storageFormatted = JSON.stringify(storageUpdated)

  localStorage.setItem(TASK_COLLECTION, storageFormatted)
}

export function uncheckAllTasks() {
  const storage = tasksGetAll()
  const storageUpdated = storage.map((task) => {
    task.isChecked = false
    return task
  })
  const storageFormatted = JSON.stringify(storageUpdated)

  localStorage.setItem(TASK_COLLECTION, storageFormatted)
}
