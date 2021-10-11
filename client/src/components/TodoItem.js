import React from "react";

const TodoItem = ({ todo }) => {
  // fetch todo from database, use effect or pass down the todo, for performance reason go with the second joice

  console.log(todo);

  return (
    <section className="wrapper-todo">
      <h4>the last todo</h4>
      <div className="todo-title">{todo.title}</div>
      <div className="todo-description">{todo.description}</div>
    </section>
  );
};

export default TodoItem;
