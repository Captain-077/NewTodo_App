import React, { useState } from 'react'

export default function Todo() {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([])


    const handlechange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (task.includes(inputValue)){
            setInputValue("");
            return;
        }

        if (inputValue !== "") {
            setTask((prev) => [...prev,inputValue]);
        }

        setInputValue("");
    }


    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div><input className='todo-input' autoComplete='off' type="text" value={inputValue} onChange={(event) => { handlechange(event.target.value) }} /></div>
                    <button type='submit' className='todo-btn'> Add task</button>
                </form>
            </section>
        </section>
    )
}
