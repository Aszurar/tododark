import { TaskProps } from "../../dto/taskDTO";
import { TASK_COLLECTION } from "../storageConfig";
import { tasksGetAll } from "./tasksGetAll";

type TaskCheckProps = Pick<TaskProps, 'id'>

export function taskCheck({ id }: TaskCheckProps) {
    try {

        const storage = tasksGetAll();
        const storageUpdated = storage.map(task => {
            if (task.id === id) {
                task.isChecked = !task.isChecked;
            }
            return task;
        })
        const storageFormatted = JSON.stringify(storageUpdated);

        localStorage.setItem(TASK_COLLECTION, storageFormatted);

    } catch (error) {
        throw error;
    }
}
