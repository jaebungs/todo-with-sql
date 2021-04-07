import React from 'react'

const Todo = ({ todos, handleDeleteTodo, handleEditTodoState }) => {

    return (
        <div>
            {todos && todos?.map((todo, index)=>{
                return (
                <div className="todo" id={todo.id} key={`todo${index}`}>
                    <div className="todo__title">
                        Todo: {todo.title}
                    </div>
                    <div className="todo__description">
                        Description: {todo.description}
                    </div>
                    <div className="btn-container">
                        <button onClick={()=>handleDeleteTodo(todo.id)} className="btn">Delete</button>
                        <button onClick={()=>handleEditTodoState(todo)} className="btn">Edit</button>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default Todo
