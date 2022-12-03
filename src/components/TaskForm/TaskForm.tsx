import styles from "./TaskForm.module.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { Task } from "../../types";
import { v4 as uuidv4 } from "uuid";

interface TaskFormProps {
    onCreate: (task: Task) => void;
}

export function TaskForm({ onCreate }: TaskFormProps) {
    const [description, setDescription] = useState("");

    function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onCreate({
            id: uuidv4(),
            description: description,
            completed: false,
        });

        setDescription("");
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                name="name"
                type="text"
                placeholder="Adicione uma tarefa"
                value={description}
                onChange={handleNameChange}
                className={styles.input}
            />
            <button
                className={styles.button}
                disabled={description.trim().length === 0}
            >
                Criar
                <PlusCircle size={18} />
            </button>
        </form>
    );
}
