import React, { useRef } from 'react'
import "./styles.css"

interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleTask: (e: React.FormEvent) => void;
}

const UserInput: React.FC<Props> = ({ task, setTask, handleTask }) => {
    const submitRef = useRef<HTMLInputElement>(null);
    return (
        <form className='userInput' onSubmit={(e) => { handleTask(e); submitRef.current?.blur(); }}>
            <input ref={submitRef} type="input" value={task} onChange={(e) => setTask(e.target.value)} placeholder="What are you going to create?" className="userInput__input" />
            <button className="input__submit" type="submit">Get coding</button>
        </form>
    )
}

export default UserInput
