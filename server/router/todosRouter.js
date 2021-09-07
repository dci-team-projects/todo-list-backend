import express from "express";
import {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todosControllers.js";

const routerTodos = express.Router();

routerTodos
  .route("/todos")
  .get(getAllTodos)
  .post(createTodo)
  .put(updateTodo)
  .delete(deleteTodo);

export default routerTodos;
