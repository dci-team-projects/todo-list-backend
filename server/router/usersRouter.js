import express from "express";
import {
  getUser,
  getAllUsers,
  getUserTodos,
  login,
  logout,
  register,
  authUser
} from "../controllers/usersControllers.js";

import auth from '../middleware/auth.js'
import isAdmin from '../middleware/isAdmin.js'


const routerUsers = express.Router();

routerUsers.route("/").get( isAdmin, getAllUsers);
routerUsers.route('/login').post(login)
routerUsers.route('/logout').post(logout)
routerUsers.route('/auth').post(auth, authUser) 
routerUsers.route('/register').post(register)
routerUsers.route('/:id/todos').get(auth, getUserTodos)
routerUsers.route("/:id").get(auth, getUser);

export default routerUsers;
