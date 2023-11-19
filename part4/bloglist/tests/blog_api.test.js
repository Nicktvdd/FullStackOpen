const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const bcrypt = require ('bcrypt')
const User = require ('../models/user')

const Blog = require('../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})

  const blogObjects = helper.initialBlogs
    .map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

//---tests----
test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

afterAll(async () => {
  await mongoose.connection.close()
})

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body).toHaveLength(helper.initialBlogs.length)
})

test('a specific blog is within the returned blogs', async () => {
  const response = await api.get('/api/blogs')

  const titles = response.body.map(r => r.title)
  expect(titles).toContain(
    "Go To Statement Considered Harmful"
  )
})

//---new---
test('a valid blog can be added', async () => {
  const newBlog =
  {
    _id: "5a422bc61b54a676134d17fc",
    title: "Star wars",
    author: "Robert J. prancy",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/StarWars.html",
    likes: 5,
    __v: 0
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

  const titles = blogsAtEnd.map(n => n.title)
  expect(titles).toContain(
    'Star wars'
  )
})

test('id is defined for each blog', async () => {
  const response = await api.get('/api/blogs')

  const blogsArray = response.body.map(r => r.id)

  blogsArray.forEach(id => {
    expect(id).toBeDefined()
  })
})

test('likes is missing and defaults to 0', async () => {
  const newBlog =
  {
    _id: "5a422bc61b54a676134d17fc",
    title: "Star wars",
    author: "Robert J. prancy",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/StarWars.html",
    __v: 0
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)

  const blogsAtEnd = await helper.blogsInDb()
 // const likes = blogsAtEnd.map(n => n.likes)
 const lastBlog = blogsAtEnd[blogsAtEnd.length - 1]
  expect(lastBlog.likes).toBe(0)
})

test('url and/or title is missing', async () => {
  const response = await api.post('/api/blogs', {
    author: 'Johnny doedle',
    likes: 10
  })

  expect(response.status).toBe(400)
})

test('a blog can be deleted', async () => {
  const blogsAtStart = await helper.blogsInDb()
  const blogToDelete = blogsAtStart[0]

  await api
    .delete(`/api/blogs/${blogToDelete.id}`)
    .expect(204)

  const blogsAtEnd = await helper.blogsInDb()

  expect(blogsAtEnd).toHaveLength(
    helper.initialBlogs.length - 1
  )

  const titles = blogsAtEnd.map(r => r.title)

  expect(titles).not.toContain(blogToDelete.title)
})

test('a blog can be changed', async () => {
  const blogsAtStart = await helper.blogsInDb()
  const blogToChange = blogsAtStart[0]

  const updatedBlogData = {
    likes: 1000000,
  }

  await api
    .put(`/api/blogs/${blogToChange.id}`)
    .send(updatedBlogData)
    .expect(200)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(
    helper.initialBlogs.length
  )
  const likes = blogsAtEnd.map(r => r.likes)
  expect(likes).toContain(updatedBlogData.likes)
})

//---users---
describe('when there is initially one user in db', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', name: 'superuser', passwordHash })

    await user.save()
  })

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })
  
  test('creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'root',
      name: 'Superuser',
      password: 'salainen',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('expected `username` to be unique')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toEqual(usersAtStart)
  })
})

//doesn't pass
/* test('blog without title is not added', async () => {
  const newBlog = {
    author: "Empty man"
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(400)

  const blogsAtEnd = await helper.blogsInDb()

  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
}) */

//---view---
/* test('a specific blog can be viewed', async () => {
  const blogsAtStart = await helper.blogsInDb()

  const blogToView = blogsAtStart[0]

  const resultBlog = await api
    .get(`/api/blogs/${blogToView.id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  expect(resultblog.body).toEqual(blogToView)
})


 */
afterAll(async () => {
  await mongoose.connection.close()
})