import React from "react"
import "./styles.css"
import { Task } from "../Task";
import { GrTrash, GrCheckmark, GrEdit } from "react-icons/gr"

interface Props {
    task: Task;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const OneTask: React.FC<Props> = ({ task, tasks, setTasks }) => {
    return (
        <form className="task__single ">
            <span className="task__single--text">{task.task}</span>

            <div>
                <span className="icon"><GrEdit /></span>
                <span className="icon"><GrCheckmark /></span>
                <span className="icon"><GrTrash /></span>
            </div>
        </form>
    )
}

export default OneTask

