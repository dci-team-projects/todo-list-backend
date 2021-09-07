import User from "../models/User.js";
import createError from "http-errors";

export const createUser = async (req, res, error) => {
  try {
    const user = req.body;

    const newUser = await User.create(user);

    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res, error) => {
  try {
    const { id } = req.params;

    const readOneUser = await User.findById(id);
    if (!readOneUser)
      throw new createError(404, `No user with id ${id} was found.`);

    res.json({ message: "user found" });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res, error) => {
  try {
    const readAllUsers = await User.find();

    res.json(readAllUsers);
  } catch (error) {
    console.log(error);
  }
};
