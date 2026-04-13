import React, { useState } from "react";
import "./App.css";
import Todolist from "./components/todolist/Todolist";
import TodoForm from "./components/todoform/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleTodos = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <div className="todo">
        <h1 className="todoTitle">Todo List</h1>

        <TodoForm todos={handleTodos} />

        <Todolist todos={todos} />
      </div>
    </div>
  );
};

export default App;