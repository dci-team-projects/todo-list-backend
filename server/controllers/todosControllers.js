import User from "../models/User.js";
import createError from "http-errors";

export const createTodo = async (req, res, error) => {
  try {
    const todo = req.body;
    console.log(todo);

    const newTodo = await User.create(todo);

    res.json(newTodo);
  } catch (error) {
    console.log(error);
  }
};

export const getAllTodos = async (req, res, error) => {
  try {
    const allTodos = await User.find();

    res.json(allTodos);
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req, res, error) => {
  try {
    const { id } = req.params;

    const todo = req.body;

    const updatedTodo = await User.findByIdAndUpdate(id, todo, { new: true });
    if (!updateTodo) throw createError(404, `no todo under id : ${id}`);
    res.json(`Todo with id:${id} was updated`);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (req, res, error) => {
  try {
    const { id } = req.params;

    const deletedTodo = await User.findByIdAndDelete(id);
    if (!updateTodo) throw createError(404, `no todo under id : ${id}`);
    res.json(`Todo with id:${id} was deleted`);
  } catch (error) {
    console.log(error);
  }
};
