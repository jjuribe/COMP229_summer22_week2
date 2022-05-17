const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/exams', (req, res) => {
    res.send('Your midterm will be held soon!')
  })

  app.get('/comp229', (req, res) => {
    res.send('This is my Class web development Comp229')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})