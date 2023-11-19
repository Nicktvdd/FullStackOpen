blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const { nonExistingId } = require('../tests/test_helper')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1, id: 1})
  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const body = request.body

  if (!body.title || !body.url)
    return response.status(400).end()

  const user = await User.findOne()

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    comments: body.comments,
    user: user._id
})

  const result = await blog.save()
  user.blogs = user.blogs.concat(result._id)
  
  await user.save()
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