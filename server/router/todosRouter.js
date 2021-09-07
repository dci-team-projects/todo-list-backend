import express from "express";
import {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todosControllers.js";

const routerTodos = express.Router();

routerTodos.route("/").get(getAllTodos).post(createTodo);

routerTodos.route("/:id").put(updateTodo).delete(deleteTodo);

export default routerTodos;
