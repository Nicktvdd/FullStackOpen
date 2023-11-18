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

blogsRouter.delete('/:id', async (request, response) => {
  const id = request.params.id

 const result = await Blog.findByIdAndRemove(id)
 response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
  const id = request.params.id
  const body = request.body

  const updatedBlog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  }
  
  const result = await Blog.findByIdAndUpdate(id, updatedBlog, { new: true, runValidators: true, context: 'query' })
      response.json(updatedBlog)
})

module.exports = blogsRouter