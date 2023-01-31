import express from "express";
import mongoose from "mongoose";
import key from "./config/key.js";

const app = express();
app.use(express.json());

const PORT = 3000;

const users = [];

app.get("/users", (request, response) => {
  return response.json(users);
});

app.post("/user", (request, response) => {
  const { name, email, telephone, address } = request.body;

  users.push({ name, email, telephone, address });

  return response.status(201).json({ name, email, telephone, address });
});

// conectando com o banco de dados
mongoose
  .connect(
    `mongodb+srv://wcarlos:${key}@cluster0.hpvl0ou.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("🚀 connected database"))
  .catch(() => console.log("connection fail"));

app.listen(PORT);
