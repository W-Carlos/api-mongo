import mongoose from "mongoose";
import key from "../config/key.js";

// conectando com o banco de dados
async function connectDatabase() {
  await mongoose.connect(
    `mongodb+srv://wcarlos:${key}@cluster0.hpvl0ou.mongodb.net/?retryWrites=true&w=majority`
  );
}

export default connectDatabase