import mongoose from "mongoose";
import User from "./User";
const { Schema, model } = mongoose;

const TodosSchema = new Schema(
  {
    id: User.id,
    title: { type: String },
    description: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Todos = model("Todos", TodosSchema);

export default Todos;
