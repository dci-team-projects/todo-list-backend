import React, { useState } from "react";
import TodoListContext from "../context/createContext";

function GlobalState(props) {
  const [userId, setUserId] = useState("");

  return (
    <TodoListContext.Provider value={{ userId, setUserId }}>
      {props.children}
    </TodoListContext.Provider>
  );
}

export default GlobalState;
