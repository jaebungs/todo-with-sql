import React, { useState } from 'react';
import Todo from './Todo';
import { deleteTodo, updateTodo } from '../actions/todo';

const Todos = ({ todos, setTodos }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [editedTodo, setEditedTodo] = useState('');

    const handleDeleteTodo = (id) => {
        deleteTodo(id); // HTTP DELETE request.

        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateTodo(editedTodo); //HTTP PATCH request.
        
        setEditedTodo('');
        setIsEdit(false);
    }

    const handleEditTodoState = (todo) => {
        setIsEdit(true);
        setEditedTodo({
            id: todo.id,
            title: todo.title,
            description: todo.description
        });
    }

    const handleInputChange = (e) => {
        setEditedTodo({
            ...editedTodo,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="todos-container">
            {isEdit && <div>
                <form onSubmit={handleEditSubmit} >
                    <label>
                        Title:
                        <input name="title" onChange={handleInputChange} value={editedTodo.title} />
                    </label>
                    <label>
                        Discription:
                        <input name="description" onChange={handleInputChange} value={editedTodo.description} />
                    </label>
                    <button type="submit" className="btn">Edit Done</button> 
                </form>
            </div>}

            <Todo todos={todos}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            handleEditTodoState={handleEditTodoState}
            handleDeleteTodo={handleDeleteTodo} />
        </div>
    )
}

export default Todos
