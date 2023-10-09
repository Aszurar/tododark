import { TaskProps } from "../../dto/taskDTO";
import { TASK_COLLECTION } from "../storageConfig";
import { tasksGetAll } from "./tasksGetAll";

type TaskDeleteProps = Pick<TaskProps, 'id'>

export function tasksDelete({ id }: TaskDeleteProps) {
    try {
        const storage = tasksGetAll();
        const storageFiltered = storage.filter((task) => task.id !== id);
        const storageFilteredFormatted = JSON.stringify(storageFiltered);

        localStorage.setItem(TASK_COLLECTION, storageFilteredFormatted);
    } catch (error) {
        throw error;
    }
}