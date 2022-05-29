import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { Task } from "../Task";
import { GrTrash, GrCheckmark, GrEdit } from "react-icons/gr";

interface Props {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const OneTask: React.FC<Props> = ({ task, tasks, setTasks }) => {
    const [editTask, setEditTask] = useState<boolean>(false);
    const [editedTask, setEditedTask] = useState<string>(task.task);

    const handleCompleted = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };

    const handleDelete = (id: number) => {
        setTasks(
            tasks.filter((task) =>
                task.id !== id
            )
        );
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, task: editedTask } : task
            )
        );
        setEditTask(false);
    };

    //for adding autofocus on edit input
    const editRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        editRef.current?.focus();
    }, [editTask])

    return (
        <form className="task__single" onSubmit={(e) => handleEdit(e, task.id)}>
            {
                editTask ? (
                    <input className="task__single--text input" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} ref={editRef} />
                ) : (

                    task.isCompleted ? (
                        <s className="task__single--text">{task.task}</s>

                    ) : (

                        <span className="task__single--text">{task.task}</span>
                    )

                )
            }



            <div>
                <span className="icon" onClick={() => {
                    if (!editTask) {
                        setEditTask(!editTask);
                    }
                }}><GrEdit /></span>
                <span className="icon" onClick={() => handleCompleted(task.id)}><GrCheckmark /></span>
                <span className="icon" onClick={() => handleDelete(task.id)} ><GrTrash /></span>
            </div>
        </form>
    )
};

export default OneTask

