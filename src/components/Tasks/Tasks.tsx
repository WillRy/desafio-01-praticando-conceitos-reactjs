import styles from "./Tasks.module.css";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../../types";

export function Tasks() {
    const [tasks, setTasks] = useState(() => {
        const tasks = window.localStorage.getItem("tasks");

        if (tasks) {
            return JSON.parse(tasks);
        }

        return [
            {
                id: uuidv4(),
                description: "Comprar pão",
                completed: false,
            },
        ];
    });

    useEffect(() => {
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function handleChange(task: Task) {
        let taskFind = tasks.find((t: Task) => t.id === task.id);
        if (!taskFind) return;
        Object.assign(taskFind, task);
        setTasks([...tasks]);
    }

    function handleDelete(task: Task) {
        let taskFind = tasks.findIndex((t: Task) => t.id === task.id);
        if (taskFind < 0) return;
        tasks.splice(taskFind, 1);
        setTasks([...tasks]);
    }

    function handleOnCreate(task: Task) {
        setTasks([...tasks, task]);
    }

    return (
        <div className={styles.tasks}>
            <TaskForm onCreate={handleOnCreate} />
            <div className={styles.listContainer}>
                <TaskList
                    tasks={tasks}
                    onChange={handleChange}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    );
}
