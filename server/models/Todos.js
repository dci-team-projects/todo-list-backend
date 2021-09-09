import mongoose from "mongoose";
import User from "./User.js";
const { Schema, model } = mongoose;

const TodosSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Todos = model("Todos", TodosSchema);

export default Todos;
