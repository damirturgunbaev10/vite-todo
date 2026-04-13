import React from "react";

const Todolist = ({ todos }) => {
  return (
    <ul>
      {todos.map((item, index) => (
        <li className="todoLi" key={index}>{item} <button>edit</button></li>
      ))}
    </ul>
  );
};

export default Todolist;