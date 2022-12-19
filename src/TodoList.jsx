import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add"; 

const TodoList = () => {
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>Todo List </h1>
          <br />
          <input type="text" placeholder="Add Items" />
          <Button className="btn_new">
            <AddIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
