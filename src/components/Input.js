import React, {useState, useRef} from 'react'
import { addTodo } from '../actions/todo';

// custom hook for focusing.
const useFocus = () => {
    const focusEl = useRef();
    const setFocusEl = () => {focusEl.current && focusEl.current.focus()}
    return [focusEl, setFocusEl]
}

const Input = ({ addTodoState }) => {
    const stateDefault = {title:'', description: ''};

    const [input, setInput] = useState(stateDefault);

    const [focusEl, setFocusEl] = useFocus();
    
    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const addedTodo = await addTodo(input); // HTTP reqeust post new todo
        addTodoState(addedTodo); //Add todo to state
        setFocusEl();
        setInput(stateDefault);
    }

    return (
        <div className="input-container">
            <form onSubmit={handleOnSubmit} >
                <label>
                    Todo:
                    <input ref={focusEl} name="title" type="text" onChange={handleInputChange} value={input.title} placeholder="Todo Title"/>
                </label>
                <label>
                    Description:
                    <input name="description" type="text" onChange={handleInputChange} value={input.description} placeholder="Todo Description"/>
                </label>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default Input;