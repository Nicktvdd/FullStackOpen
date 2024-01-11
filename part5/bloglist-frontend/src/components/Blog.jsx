import { useState } from 'react'

const Blog = ({ blog }) => {
  const [showDetails, setShowDetails] = useState(false)

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

  const ExtraInfo = () => {
    return(
      <div>
      <div>{blog.url}</div>
      <div>likes: {blog.likes} <button>like</button></div>
      <div>{blog.username}</div>
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