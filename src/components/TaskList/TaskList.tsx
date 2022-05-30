import React from "react"
import "./styles.css"
import { Task } from "../Task"
import OneTask from "../OneTask/OneTask";
import { Droppable } from "react-beautiful-dnd";

interface Props {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    completedTask: Task[];
    setCompletedTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<Props> = ({ tasks, setTasks, completedTask, setCompletedTask }) => {
    return (
        <div className="container">
            <Droppable droppableId="1">
                {
                    (provided) => (
                        <div className="tasks" ref={provided.innerRef}{...provided.droppableProps}>
                            <span className="tasks__heading">In progress</span>
                            {tasks.map((task, index) => (
                                <OneTask task={task} index={index} key={task.id} tasks={tasks} setTasks={setTasks} />
                            ))}
                            {provided.placeholder}
                        </div>

                    )
                }
            </Droppable>
            <Droppable droppableId="2">
                {
                    (provided) => (
                        <div className="tasks completed" ref={provided.innerRef}{...provided.droppableProps}>
                            <span className="tasks__heading">"Completed"</span>
                            {completedTask.map((task, index) => (
                                <OneTask task={task} index={index} key={task.id} tasks={completedTask} setTasks={setCompletedTask} />
                            ))}
                            {provided.placeholder}
                        </div>

                    )
                }
            </Droppable>
        </div>
    )
}

export default TaskList
