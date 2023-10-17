require('dotenv').config()
const express = require('express')
const app = express()
const Person = require('./models/person')
const morgan = require('morgan')
const cors = require('cors')

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }

//---------------------------------use---------------------------------------------

app.use(cors())
app.use(requestLogger)
app.use(express.static('dist'))
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

app.get('/info', (request, response) => {
    Person.countDocuments({}, (error, count) => {
        if (error) {
            console.log(error)
            return response.status(500).send('Error while fetching data')
        }
        response.send(`Phonebook has info for ${count} persons<br/>${new Date()}`)
    })
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person)
            }
            else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

//--------------------------------delete-------------------------------------------

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id

    Person.findByIdAndRemove(id)
        .then(() => {
            response.status(204).end()
        })
        .catch(error => next(error))
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

//--------------------------------error-------------------------------------------

app.use(express.json())

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } 
  
    next(error)
  }

app.use(errorHandler)

//------------------------------listen-----------------------------------------------
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
