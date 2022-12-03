import styles from "./TaskList.module.css";
import emptyImage from "../../assets/clipboard.svg";
import { TaskCard } from "../TaskCard/TaskCard";
import { Task } from "../../types";
import { useMemo } from "react";

export interface TaskListProps {
    tasks: Task[];
    onChange: (tasks: Task) => void;
    onDelete: (tasks: Task) => void;
}

export function TaskList({ tasks, onChange, onDelete }: TaskListProps) {
    const totalCreated = useMemo(() => {
        return tasks.length;
    }, [tasks]);

    const totalCompleted = useMemo(() => {
        return tasks.filter((t) => t.completed).length;
    }, [tasks]);

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.totalIndicator}>
                    <div className={styles.createdText}>Tarefas criadas</div>
                    <span className={styles.count}>{totalCreated}</span>
                </div>
                <div className={styles.totalIndicator}>
                    <div className={styles.completedText}>Concluídas</div>
                    <span className={styles.count}>
                        {totalCompleted > 0
                            ? `${totalCompleted} de ${totalCreated}`
                            : 0}
                    </span>
                </div>
            </header>
            {tasks && tasks.length === 0 && (
                <div className={styles.listEmpty}>
                    <img src={emptyImage} />

                    <div>
                        <h2>Você ainda não tem tarefas cadastradas</h2>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
            )}
            {tasks.map((task) => {
                return (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onChange={onChange}
                        onDelete={onDelete}
                    />
                );
            })}
        </div>
    );
}
