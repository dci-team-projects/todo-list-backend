import "./connect/db-connect.js";
import express from "express";
import cors from "cors";
import routerUsers from "../server/router/usersRouter.js";
import routerTodos from "./router/todosRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", () => {
  console.log("landing page");
});

app.use("/users", routerUsers);
app.use("/todos", routerTodos);

const PORT = "5000";
app.listen(PORT, () => {
  console.log("api initalized");
});

app.use(function errorHandler(err, req, res, next) {
  res.status(err.status || 400).send({
    error: {
      message: err.message,
      status: err.status,
    },
  });
});
