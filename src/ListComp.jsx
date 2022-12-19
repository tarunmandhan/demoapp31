import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

const ListComp = (props) => {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    if (line == false) {
      setLine(true);
    } else {
      setLine(false);
    }
  };

  return (
    <div className="todo_style">
      <span onClick={cutIt}>
        <ClearIcon className="deleteIcon" />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};

export default ListComp;
