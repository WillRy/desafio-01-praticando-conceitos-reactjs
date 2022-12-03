import styles from "./TaskCard.module.css";
import { Task } from "../../types";
import { Trash } from "phosphor-react";
import { Checkbox } from "../Checkbox/Checkbox";
import classNames from "classnames";
import { FocusEvent } from "react";

interface TaskCardProps {
    task: Task;
    onChange: (task: Task) => void;
    onDelete: (task: Task) => void;
}

export function TaskCard({ task, onChange, onDelete }: TaskCardProps) {
    function handleStatusChange(value: boolean) {
        onChange({
            ...task,
            completed: value,
        });
    }

    function handleDelete() {
        onDelete(task);
    }

    function handleNameChange(event: FocusEvent<HTMLDivElement>) {
        onChange({
            ...task,
            description: event.target.innerText,
        });
    }

    return (
        <div
            className={classNames(styles.card, {
                [styles.completed]: task.completed,
            })}
        >
            <div className={styles.iconBox}>
                <Checkbox
                    value={task.completed}
                    onChange={handleStatusChange}
                />
            </div>
            <div
                className={styles.textBox}
                onBlur={handleNameChange}
                contentEditable
                suppressContentEditableWarning={true}
            >
                {task.description}
            </div>
            <div className={styles.iconBox}>
                <button onClick={handleDelete}>
                    <Trash size={18} />
                </button>
            </div>
        </div>
    );
}
