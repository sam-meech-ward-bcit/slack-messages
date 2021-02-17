const express = require('express')

const app = express()

const database = require('./database')

app.get('/api/messages', async (req, res) => {
  const messages = await database.getMessages()
  res.send({
    totalMessage: messages.length,
    color: "magenta",
    messages
  })
})

app.get('/api/messages/:id', async (req, res) => {
  const { id } = req.params
  const message = await database.getMessage({messageId: id})
  res.send({message})
})

app.listen(8080, () => {
  console.log("listening on port 8080")
})