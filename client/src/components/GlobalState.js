import React, { useState } from "react";
import TodoListContext from "../context/createContext";

function GlobalState(props) {
  const [userId, setUserId] = useState("");
  //initializing data for form storage
  const data = {
    username: "",
    id: "",
    password: "",
  };

  const todoData = {
    title: "",
    description: "",
  };

  //initializing state

  const [singleUserData, updateData] = useState(data);
  const [allUserData, setUserData] = useState([]);
  const [id, updateId] = useState({});
  const [todo, setTodo] = useState(todoData);

  return (
    <TodoListContext.Provider
      value={{
        userId,
        setUserId,
        singleUserData,
        updateData,
        allUserData,
        setUserData,
        id,
        updateId,
        todo,
        setTodo,
        data,
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
}

export default GlobalState;
