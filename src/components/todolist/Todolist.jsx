import React from "react";
import Todo from "../todo/Todo";

const Todolist = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos.length === 0 && <h2>no todos</h2>}
      {todos.map((item, index) => (
        <Todo key={index} index={index} todo={item} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};

export default Todolist;