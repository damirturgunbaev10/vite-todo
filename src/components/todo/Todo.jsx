import React from 'react'
import styles from "./Todo.module.css";
import TodoFillIcon from 'remixicon-react/TodoFillIcon';

const Todo = ({todo, index, deleteTodo}) => {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}> 
        <TodoFillIcon 
        size={22} 
        className="my-custom-class" 
      />
        <div className={styles.todoText}>{todo}</div>
    </div>
  )
}

export default Todo