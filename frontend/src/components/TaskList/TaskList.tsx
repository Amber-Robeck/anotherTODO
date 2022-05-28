import React from "react"
import "./styles.css"
import { Task } from "../Task"
import OneTask from "../OneTask/OneTask";

interface Props {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
    return (
        <div className="tasks">
            {tasks.map(task => (
                <OneTask task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
            ))}
        </div>
    )
}

export default TaskList
