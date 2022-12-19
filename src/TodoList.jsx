import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ListComp from "./ListComp";

const TodoList = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]); //create new empty array to store input Text get from listOfItems

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    // button click hoga toh kya action hoga is function mien define kiya h. then setNewItem mien store karna h jo updated data hoga newItem ka
    setNewItem((preValue) => {
      return [...preValue, item]; //user jo likhega usse is jahag add karna h array ke andar aur previous value bhi
    });
    setItem(" ");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>Todo List </h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Add Items"
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newItem.map((val, index) => {
              // Display input text one by one using mapping method
              return (<li>{val}</li>), (<ListComp key={index} text={val} />);
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default TodoList;
