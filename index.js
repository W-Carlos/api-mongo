import express from "express"
const app = express()
app.use(express.json())

const PORT = 3000

const users = []

app.get('/users', (request, response) => {
   return response.json(users)
})

app.post('/user', (request, response) => {
    const {name, email, telephone, address} = request.body

    users.push({name, email, telephone, address})

    return response.status(201).json({name, email, telephone, address})
})

app.listen(PORT)