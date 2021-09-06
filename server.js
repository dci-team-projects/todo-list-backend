import "./connect/db-connect.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", () => {
  console.log("landing page");
});

const PORT = "5000";
app.listen(PORT, () => {
  console.log("api initalized");
});
