import { Router } from "express";

import { getUsers, createUser, deleteUser } from "./controllers/UserController.js";

const routes = Router()

routes.get('/users', getUsers)
routes.post('/user', createUser)
routes.delete('/users/:id', deleteUser)

export default routes