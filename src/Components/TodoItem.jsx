import React from "react";
import { MdDeleteForever } from "react-icons/md";

const TodoItem = ({ todoName, todoDate,clickDelete }) => {
  return (
    <div>
      <div classNameName="container ">
        <div classNameName="row kg-row">
          <div classNameName="col-6 col-sm-6">{todoName}</div>
          <div classNameName="col-4 col-sm-4">{todoDate}</div>
          <div classNameName="col-2 col-sm-2">
            <button type="button" classNameName="btn btn-danger kg-btn" onClick={()=>clickDelete(todoName)}>
            <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
