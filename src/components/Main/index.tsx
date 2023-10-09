import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { AddButton } from "../AddButton";
import { Input } from "../Input";
import { TaskCard, TaskCardMemoized } from "../TaskCard";

import { MAX_TASK_TITLE_LENGTH, TASKS_LIST_DEFAULT, TaskProps } from "../../dto/taskDTO";

import styles from './styles.module.css';
import { taskCreate } from "../../storage/tasks/tasksCreate";
import { tasksGetAll } from "../../storage/tasks/tasksGetAll";
import { tasksDelete } from "../../storage/tasks/tasksDelete";
import { taskCheck } from "../../storage/tasks/tasksCheck";

export function Main() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState<TaskProps[]>([]);

  const tasksListQuantity = tasksList.length;
  const tasksListCheckedQuantity = tasksList.filter(task => task.isChecked).length;

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function updateTasksList() {
    const tasksListUpdated = tasksGetAll();
    setTasksList(tasksListUpdated);
  }

  function handleAddTask(event: FormEvent) {
    event?.preventDefault();

    if (task.trim() === '') {
      return;
    }

    const isAlreadyTaskExists = tasksList.some(item => item.title === task);

    if (isAlreadyTaskExists) {
      return;
    }

    const taskFormatted =
      task.length > MAX_TASK_TITLE_LENGTH
        ? task.substring(0, MAX_TASK_TITLE_LENGTH)
        : task;

    const newTask: TaskProps = {
      id: crypto.randomUUID(),
      title: taskFormatted,
      isChecked: false,
      createdAt: new Date()
    };

    taskCreate(newTask);
    updateTasksList();
    setTask('');

  }

  function handleCheckTask(id: string) {
    taskCheck({ id })
    updateTasksList();
  }

  function handleDeleteTask(id: string) {
    tasksDelete({ id });
    updateTasksList();
  }

  const tasksCardsList = tasksList.map((task) =>
    <TaskCard
      key={task.id}
      id={task.id}
      title={task.title}
      isChecked={task.isChecked}
      createdAt={task.createdAt}
      handleCheckTask={() => handleCheckTask(task.id)}
      handleDeleteTask={() => handleDeleteTask(task.id)}
    />
  );

  useEffect(() => {
    console.log(tasksList);
    console.log("testeando:",)
  }, [tasksList]);

  useEffect(() => {
    updateTasksList();
  }, [])

  return (
    <main className={styles.main}>
      <header>
        <form onSubmit={handleAddTask} >
          <Input
            task={task}
            onChange={handleChangeTask}
          />
          <AddButton />
        </form>
      </header>

      <section className={styles.tasksList}>
        <section className={styles.headerTasksList}>
          <strong>Tarefas Criadas <span>{tasksListQuantity}</span></strong>
          <strong>Concluídas <span>{tasksListCheckedQuantity} de {tasksListQuantity}</span></strong>
        </section>

        <section className={styles.tasksCardsList}>
          {tasksCardsList}
        </section>
      </section>
    </main>
  )
}