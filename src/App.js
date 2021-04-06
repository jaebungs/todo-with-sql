import React, { useState, useEffect } from 'react';
import Todos from './components/Todos';
import Input from './components/Input';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState();

  useEffect(()=>{
     fetch('http://localhost:4000/')
      .then((res)=>res.json())
      .then((data)=>{
        setTodos(data);
      })
    }, [])

  const addTodoState = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <div className="app">
      <Input addTodoState={addTodoState} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
