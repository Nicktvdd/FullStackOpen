const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))

//---------------------------------data--------------------------------------------
let persons =
  [
    {
      "id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
  ]

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId
}

const generateRandomId = () => {
  if (persons.length === 0)
    return 1;
  const existingIds = persons.map(person => person.id)
  let randomId;
  do {
    randomId = Math.floor(Math.random() * 100)
  } while (existingIds.includes(randomId))

  return randomId
}
//--------------------------------get---------------------------------------------

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the ultimate phonebook in Node.js</h1>')
})

app.get('/info', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const maxId = persons.length > 0
  res.send(`Phonebook has info for ${generateId()}<br/>${new Date()}`)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const id = Number(req.params.id)
  if (!id || id >= generateId())
    res.status(404).end()
  const person = persons.find(note => note.id === id)

  res.send(`name: ${person.name}\nnumber: ${person.number}\n`);
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(note => note.id !== id)

  response.status(204).end()
})

//------------------------------post-----------------------------------------------

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body || !body.name || !body.number){
    return response.status(400).json({
        error: 'Phonebook data insertion failed, data seems to be missing. If you have forgotten your name, please seek medical help'
    })
  }
  if (persons.some(person => person.name === body.name)){
    return response.status(400).json({
        error: `There's room for only one ${body.name} in this phonebook, change your name and try again`
    })
  }
  
  const note = {
    id: generateRandomId(),
    name: body.name,
    number: body.number
  }
  persons = persons.concat(note)

  response.json(note)
})

//------------------------------listen-----------------------------------------------
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})