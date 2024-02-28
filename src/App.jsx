import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";

import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    // console.log(`New Item Added: ${itemName} Date:${itemDate}`);
    const newItems = [
      ...todoItems,
      {
        name: itemName,
        date: itemDate,
      },
    ];

    setTodoItems(newItems);
  };

  const handleDelete=(items)=>{
    // console.log(`item deleted:${items}`);
    const deletItems = todoItems.filter((todoName)=>todoName.name!==items);
    setTodoItems(deletItems);
  }
  return (
    <center classNameName="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}

      <TodoItems todoItems={todoItems} clickDelete={handleDelete}/>
    </center>
  );
}

export default App;
