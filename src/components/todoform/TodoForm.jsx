import React, { useState } from "react";
import styles from "./TodoForm.module.css";

const TodoForm = ({ todos }) => {
  const [todo, setTodo] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(todo);

    if (todo.trim()) {
      todos(todo);
      setTodo("");
    }
  };

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <form className={styles.todoForm} onSubmit={handleFormSubmit}>
      <input
        value={todo}
        className={styles.todoInput}
        type="text"
        placeholder="Enter todo..."
        onChange={(e) => handleInputChange(e)}
      />

      <button className={styles.todoBtn}>Enter</button>
    </form>
  );
};

export default TodoForm;
