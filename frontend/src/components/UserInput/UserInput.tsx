import React from 'react'
import "./styles.css"

const UserInput = () => {
    return (
        <form className='userInput'>
            <input type="input" placeholder="What are you going to create?" className="userInput__input" />
            <button className="input__submit" type="submit">Get coding</button>
        </form>
    )
}

export default UserInput
