import { useState } from 'react'

const Blog = ({ blog }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }
  return (
    <blog>
      <div>{blog.title}
      <button onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
      </div>
      <div>{blog.author}</div>
      <div>{showDetails && blog.url}</div>
    </blog>
    
  )
}


export default Blog