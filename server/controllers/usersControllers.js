import User from "../models/User.js";
import createError from "http-errors";

export const createUser = async (req, res, next) => {
  try {
    const user = req.body;

    const newUser = await User.create(user);

    res.json(newUser);
    console.log(newUser);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const readOneUser = await User.findById(id);
    if (!readOneUser)
      throw new createError(404, `No user with id ${id} was found.`);

    res.json({ message: "user found" });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const readAllUsers = await User.find();

    res.json(readAllUsers);
  } catch (error) {
    next(error);
  }
};


// users/:id/posts
export const getUserTodos = async (req, res, next) => {
  const {id} = re.params
  try {
    const userTodos = Todos.find({user: id}).populate({user})
    if(!userTodos) throw new createError(404, `No todos of user with id ${id} was found.`)
    res.json(userTodos) 
  } catch (error) {
    next(error)
  }
}