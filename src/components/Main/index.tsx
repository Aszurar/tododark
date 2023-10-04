import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { AddButton } from "../AddButton";
import { Input } from "../Input";
import { TaskCard } from "../TaskCard";

import { MAX_TASK_TITLE_LENGTH, TASKS_LIST_DEFAULT, TaskProps } from "../../dto/taskDTO";

import styles from './styles.module.css';

export function Main() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState<TaskProps[]>(TASKS_LIST_DEFAULT);

  const tasksListQuantity = tasksList.length;
  const tasksListCheckedQuantity = tasksList.filter(task => task.isChecked).length;

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
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
      id: uuidv4(),
      title: taskFormatted,
      isChecked: false,
    };

    setTasksList(prevState => [...prevState, newTask]);
    setTask('');
  }

  function handleCheckTask(id: string) {
    const tasksListUpdated = tasksList.map(task => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
      return task;
    })

    setTasksList(tasksListUpdated);
  }

  function handleDeleteTask(id: string) {
    const newtasksListUpdated = tasksList.filter(task => task.id !== id);
    setTasksList(newtasksListUpdated);
  }

  const tasksCardsList = tasksList.map((task) =>
    <TaskCard
      key={task.id}
      id={task.id}
      title={task.title}
      isChecked={task.isChecked}
      handleCheckTask={() => handleCheckTask(task.id)}
      handleDeleteTask={() => handleDeleteTask(task.id)}
    />

  );

  useEffect(() => {
    console.log(tasksList);
  }, [tasksList]);

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