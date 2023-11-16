require('dotenv').config()

const express = require('express')
const app = express()
const Blog = require('./models/blog')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)

module.exports = app