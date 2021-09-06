import mongoose from "mongoose";
import User from "./User";
const { Schema, model } = mongoose;

const TodosSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
    id: true,
  }
);

const Todos = model("Todos", TodosSchema);

export default Todos;
