blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const { nonExistingId } = require('../tests/test_helper')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body)

  await blog.save()
  response.status(201).json(result).end()
})

module.exports = blogsRouter