import { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog, user }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [likes, setLikes] = useState(blog.likes)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const handleLike = async () => {
    const newLikesCount = likes + 1
    const newObject = {
      ...blog,
      likes: newLikesCount
    }
    console.log(newObject)
    const updatedBlogPost = await blogService.update(blog.id, newObject)
    setLikes(updatedBlogPost.likes)
  }

  const handleRemove = async () => {
    if (window.confirm(`remove blog ${blog.title} by ${blog.author}`)) {
      const removedBlogPost = await blogService.remove(blog.id)
      window.location.reload(false)
    }
  }

  const ExtraInfo = () => {
    return (
      <div className='blog'>
        <div>{blog.url}</div>
        <div>likes: {likes} <button onClick={handleLike}>like</button></div>
        {blog.user && <div>{blog.user.name}</div>}
        {user && user.name === (blog.user && blog.user.name) && (
          <div><button onClick={handleRemove}>remove</button></div>
        )}
      </div>
    )
  }

  return (
    <div style={blogStyle}>
      <div>{blog.title}
        <button onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
      </div>
      <div>{blog.author}</div>
      <div>{showDetails && <ExtraInfo />}</div>
    </div>
  )
}

export default Blog