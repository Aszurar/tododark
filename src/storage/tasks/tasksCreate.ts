import { TaskProps } from "../../dto/taskDTO";
import { TASK_COLLECTION } from "../storageConfig";
import { tasksGetAll } from "./tasksGetAll";

export function taskCreate(newTask: TaskProps) {
    try {
        const task = {
            id: newTask.id,
            title: newTask.title,
            isChecked: newTask.isChecked,
            createdAt: new Date(),
        } as TaskProps;

        const storage = tasksGetAll();
        const storageFormatted = JSON.stringify([...storage, task]);

        localStorage.setItem(TASK_COLLECTION, storageFormatted);

    } catch (error) {
        throw error;
    }
}
