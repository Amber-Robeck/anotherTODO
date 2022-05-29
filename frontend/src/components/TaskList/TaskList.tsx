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
        <div className="container">
            <div className="tasks">
                <span className="tasks__heading">In progress</span>
                {tasks.map(task => (
                    <OneTask task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
                ))}
            </div>
            <div className="tasks completed">
                <span className="tasks__heading">"Completed"</span>
            </div>
        </div>
    )
}

export default TaskList
