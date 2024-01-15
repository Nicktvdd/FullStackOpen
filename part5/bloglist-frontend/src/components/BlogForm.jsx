import { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl,
    })

    setNewBlog('')
    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
  }

  return (
    <div>
      <h2>Create a new blog</h2>

      <form onSubmit={addBlog}>
        <div>Title: <input id='title' value={newTitle} onChange={event => setNewTitle(event.target.value)} /></div>
        <div>Author: <input id='author' value={newAuthor} onChange={event => setNewAuthor(event.target.value)} /></div>
        <div>Url: <input id='url' value={newUrl} onChange={event => setNewUrl(event.target.value)} /></div>
        <div><button id='submit' type="submit">add</button></div>
      </form>
    </div>
  )
}

export default BlogForm