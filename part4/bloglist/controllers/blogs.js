blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const { nonExistingId } = require('../tests/test_helper')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})

  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body)
  
if(request.body.title == undefined || request.body.url == undefined)
  return response.status(400).end()

  const result = await blog.save()
  response.status(201).json(result)
})

module.exports = blogsRouter