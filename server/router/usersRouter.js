import express from "express";
import {
  createUser,
  getUser,
  getAllUsers,
} from "../controllers/usersControllers.js";

const routerUsers = express.Router();

routerUsers.route("/users").get(getAllUsers).post(createUser);

routerUsers.route("/users/:id").get(getUser);

export default routerUsers;
