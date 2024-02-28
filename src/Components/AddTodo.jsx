import React, { useState } from "react";
import { MdAddCard } from "react-icons/md";


const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    // console.log(event.target.value);
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div>
      <div classNameName="container text-center">
        <div classNameName="row kg-row">
          <div classNameName="col-6 col-sm-6">
            <input
              type="text"
              placeholder="Enter todo here"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div classNameName="col-4 col-sm-4">
            <input type="date" value={dueDate} onChange={handleDateChange} />
          </div>
          <div classNameName="col-2 col-sm-2">
            <button
              type="button"
              classNameName="btn btn-success kg-btn"
              onClick={handleAddButtonClicked}
            >
              <MdAddCard />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
