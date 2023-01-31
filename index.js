const express = require('express')
const app = express()

const PORT = 3000

app.get('/users', (request, response) => {
   return response.send('Hollo Wolrd')
})

app.listen(PORT)