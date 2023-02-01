import express from "express";

import connectDatabase from "./database/db.js";
import routes from './routes.js'

const app = express();

app.use(express.json());
app.use(routes)

const PORT = 3000;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log("🚀 connected database")
    });
  })
  .catch((error) => console.log(error));

