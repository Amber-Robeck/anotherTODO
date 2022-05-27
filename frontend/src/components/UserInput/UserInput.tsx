import React from 'react'
import "./styles.css"

interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
}

const UserInput: React.FC<Props> = ({ task, setTask }) => {
    return (
        <form className='userInput'>
            <input type="input" value={task} onChange={(e) => setTask(e.target.value)} placeholder="What are you going to create?" className="userInput__input" />
            <button className="input__submit" type="submit">Get coding</button>
        </form>
    )
}

export default UserInput
