import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { AddButton } from '../AddButton'
import { Input } from '../Input'
import { TaskCardMemoized } from '../TaskCard'

import { MAX_TASK_TITLE_LENGTH, TaskProps } from '../../dto/taskDTO'

import { taskCreate } from '../../storage/tasks/tasksCreate'
import { tasksGetAll } from '../../storage/tasks/tasksGetAll'
import { tasksDelete, tasksDeleteAll } from '../../storage/tasks/tasksDelete'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import {
  taskCheck,
  checkAllTasks,
  uncheckAllTasks,
} from '../../storage/tasks/tasksCheck'
import { List, ListChecks, Trash } from '@phosphor-icons/react'
import { ButtonWithTooltip } from '../ButtonWithTooltip'

import { EmptyList } from '../EmptyList'
import styles from './styles.module.css'

export function Main() {
  const [task, setTask] = useState('')
  const [parent] = useAutoAnimate()
  const [tasksList, setTasksList] = useState<TaskProps[]>([])
  const [isDeleteAllTasksModalOpen, setIsDeleteAllTasksModalOpen] =
    useState(false)

  const taskCharactersQuantity = task.length
  const tasksListQuantity = tasksList.length
  const tasksListCheckedQuantity = tasksList.filter(
    (task) => task.isChecked,
  ).length
  const isAllTasksButtonsActivated =
    tasksListCheckedQuantity === tasksListQuantity
  const isDisableCheckAllTaskButton = tasksListQuantity === 0
  const isUncheckedAllTasksButtonsActivated = tasksListCheckedQuantity === 0

  const isDisableDeleteAllTaskButton =
    isDisableCheckAllTaskButton || !isAllTasksButtonsActivated

  function handleChangeTask(event: ChangeEvent<HTMLTextAreaElement>) {
    setTask(event.target.value)
  }

  function onSortByDateDescending(list: TaskProps[]) {
    return list.sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    })
  }

  function onSortByChecked(list: TaskProps[]) {
    return list.sort((a, b) => {
      return Number(b.isChecked) - Number(a.isChecked)
    })
  }

  function updateTasksList() {
    const tasksListUpdated = tasksGetAll()
    const tasksListSortedByDateDescending =
      onSortByDateDescending(tasksListUpdated)
    const tasksListSortedByChecked = onSortByChecked(
      tasksListSortedByDateDescending,
    )

    setTasksList(tasksListSortedByChecked)
  }

  function handleAddTask(event: FormEvent) {
    event?.preventDefault()

    if (task.trim() === '') {
      return
    }

    const isAlreadyTaskExists = tasksList.some((item) => item.title === task)
    if (isAlreadyTaskExists) {
      return
    }

    const taskFormatted =
      task.length > MAX_TASK_TITLE_LENGTH
        ? task.substring(0, MAX_TASK_TITLE_LENGTH)
        : task

    const newTask: TaskProps = {
      id: crypto.randomUUID(),
      title: taskFormatted,
      isChecked: false,
      createdAt: new Date(),
    }

    taskCreate(newTask)
    updateTasksList()
    setTask('')
  }

  function handleCheckTask(id: string) {
    taskCheck({ id })
    updateTasksList()
  }

  function handleDeleteTask(id: string) {
    tasksDelete({ id })
    updateTasksList()
  }

  function handleCheckAllTasks() {
    checkAllTasks()
    updateTasksList()
  }
  function handleUncheckAllTasks() {
    uncheckAllTasks()
    updateTasksList()
  }

  function handleOpenDeleteAllTasksModal() {
    setIsDeleteAllTasksModalOpen(true)
  }

  function handleCloseDeleteAllTasksModal() {
    setIsDeleteAllTasksModalOpen(false)
  }

  function handleDeleteAllTasks() {
    tasksDeleteAll()
    updateTasksList()
    handleCloseDeleteAllTasksModal()
  }

  const tasksCardsList = tasksList.map((task) => (
    <TaskCardMemoized
      key={task.id}
      id={task.id}
      title={task.title}
      isChecked={task.isChecked}
      createdAt={task.createdAt}
      handleCheckTask={() => handleCheckTask(task.id)}
      handleDeleteTask={() => handleDeleteTask(task.id)}
    />
  ))

  useEffect(() => {
    updateTasksList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className={styles.main}>
      <header>
        <form onSubmit={handleAddTask}>
          <Input task={task} onChange={handleChangeTask} />
          <AddButton />
        </form>
        {taskCharactersQuantity > 0 && (
          <span className={styles.taskCharactersQuantity}>
            {taskCharactersQuantity} /{' '}
            <span className={styles.taskCharacterLimit}>
              {MAX_TASK_TITLE_LENGTH}
            </span>
          </span>
        )}
      </header>

      <section className={styles.tasksList}>
        <section className={styles.headerTasksList}>
          <strong>
            Tarefas Criadas <span>{tasksListQuantity}</span>
          </strong>

          <div className={styles.checkAllContainer}>
            <ButtonWithTooltip
              icon={List}
              isActive={isUncheckedAllTasksButtonsActivated}
              onPress={handleUncheckAllTasks}
              label="Desmarcar todas tarefas"
              isDisabled={isDisableCheckAllTaskButton}
            />
            <ButtonWithTooltip
              icon={ListChecks}
              isActive={isAllTasksButtonsActivated}
              onPress={handleCheckAllTasks}
              label="Marcar todas tarefas"
              isDisabled={isDisableCheckAllTaskButton}
            />
            <ButtonWithTooltip
              icon={Trash}
              isActive={isAllTasksButtonsActivated}
              label="Excluir todas tarefas"
              onPress={handleOpenDeleteAllTasksModal}
              isDisabled={isDisableDeleteAllTaskButton}
            />
          </div>
          <strong>
            Concluídas
            <span>
              {tasksListCheckedQuantity} de {tasksListQuantity}
            </span>
          </strong>
        </section>

        <section ref={parent} className={styles.tasksCardsList}>
          {tasksListQuantity === 0 ? <EmptyList /> : tasksCardsList}
        </section>
      </section>

      <Dialog.Root open={isDeleteAllTasksModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content className={styles.modal}>
            <header>
              <Dialog.Title>Atenção</Dialog.Title>
            </header>
            <Dialog.Description>
              Tem certeza que deseja <strong>excluir todas</strong> as tarefas?
            </Dialog.Description>
            <footer className={styles.footerModal}>
              <Dialog.Close
                onClick={handleCloseDeleteAllTasksModal}
                aria-label="Fechar"
              >
                Não
              </Dialog.Close>
              <Dialog.Close onClick={handleDeleteAllTasks} aria-label="Fechar">
                Sim
              </Dialog.Close>
            </footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  )
}
