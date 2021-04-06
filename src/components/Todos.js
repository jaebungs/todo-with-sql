import React, { useState } from 'react';
import { deleteTodo } from '../actions/todo';

const Todos = ({ todos, setTodos }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [editedTodo, setEditedTodo] = useState('');

    const handleDeleteTodo = (id) => {
        deleteTodo(id); // Delete http request.
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleInputChange = (e) => {
        setEditedTodo({
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="todos-container">
            {todos && todos?.map((todo, index)=>{
                return (
                <div className="todo" key={index}>
                    <div className="todo__title">
                        {isEdit ? <input name="title" onChange={handleInputChange} value={editedTodo.title} /> : `Todo: ${todo.title}`}
                    </div>
                    <div className="todo__description">
                        {isEdit ? <input name="description" onChange={handleInputChange} value={editedTodo.description} /> : `Description: ${todo.description}`}
                    </div>
                    <div className="btn-container">
                        <button onClick={()=>handleDeleteTodo(todo.id)} className="btn">Delete</button>
                        <button onClick={()=>setIsEdit(true)} className="btn">Edit</button>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default Todos
