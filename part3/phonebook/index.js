require('dotenv').config()
const express = require('express')
const app = express()
const Person = require('./models/person')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

//---------------------------------use---------------------------------------------

app.use(express.static('dist'))
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

//--------------------------------get---------------------------------------------

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the ultimate phonebook in Node.js</h1>')
})

app.get('/info', (req, res) => {
    const maxId = Person.length > 0
    res.send(`Phonebook has info for ${generateId()}<br/>${new Date()}`)
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (req, res) => {
    Person.findById(request.params.id).then(person => {
        express.response.json(person)
    })
})

//--------------------------------delete-------------------------------------------

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id

    Person.findByIdAndDelete(id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => {
            console.log(error)
            response.status(400).send({ error: 'Malformatted id' })
        })
})

//------------------------------post-----------------------------------------------

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body || !body.name || !body.number) {
        return response.status(400).json({
            error: 'Phonebook data insertion failed, data seems to be missing. If you have forgotten your name, please seek medical help'
        })
    }
    const person = new Person({
        name: body.name,
        number: body.number
    })
    person.save().then(newPerson => {
        response.json(newPerson)
    })
})

//------------------------------listen-----------------------------------------------
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})