import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const TodoList = () => {
  const [items, setItems] = useState("buy 1kg apple");
  const itemEvent = (event) => {
    setItems(event.target.value);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>Todo List </h1>
          <br />
          <input type="text" placeholder="Add Items" onChange={itemEvent} />
          <Button className="newBtn">
            <AddIcon />
          </Button>
          <br />
          <ol>
            <li>{items}</li>
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default TodoList;
