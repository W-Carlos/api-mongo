import express from "express";
import mongoose from "mongoose";

import User from "./models/User.js";

import key from "./config/key.js";

const app = express();
app.use(express.json());

const PORT = 3000;


app.get("/users", async (request, response) => {
  const users = await User.find()
  
  return response.status(200).json(users);
});

app.post("/user", async (request, response) => {
  const user = request.body;

  const newUser = await User.create(user)

  return response.status(201).json(newUser);
});

// conectando com o banco de dados
mongoose
  .connect(
    `mongodb+srv://wcarlos:${key}@cluster0.hpvl0ou.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("🚀 connected database"))
  .catch(() => console.log("connection fail"));

app.listen(PORT);
