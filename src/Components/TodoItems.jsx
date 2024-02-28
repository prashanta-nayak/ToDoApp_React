import React from "react";
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css'

const TodoItems = ({ todoItems,clickDelete }) => {
  return (
    <div classNameName={styles.itemsContainer}>
      {todoItems.map((items,i) => (
        <TodoItem key={i} todoDate={items.date} todoName={items.name} clickDelete={clickDelete}/>
      ))}
    </div>
  );
};

export default TodoItems;
