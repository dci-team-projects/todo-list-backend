import express from "express";
import {
  createUser,
  getUser,
  getAllUsers,
  getUserTodos
} from "../controllers/usersControllers.js";

const routerUsers = express.Router();

routerUsers.route("/").get(getAllUsers).post(createUser);
routerUsers.route('/:id/todos').get(getUserTodos)
routerUsers.route("/:id").get(getUser);

export default routerUsers;
