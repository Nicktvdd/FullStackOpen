import { useState } from "react"

const blogForm = ({ createdBlog }) => {
    const [newBlog, setNewBlog] = useState('')
}
const BlogForm = ({ addBlog, handleUrlChange, handleAuthorChange, handleTitleChange, newTitle, newAuthor, newUrl}) => {
    return (
        <div>
            <h2>Create a new blog</h2>

            <form onSubmit={addBlog}>
                <div>Title: <input value={newTitle} onChange={handleTitleChange} /></div>
                <div>Author: <input value={newAuthor} onChange={handleAuthorChange} /></div>
                <div>Url: <input value={newUrl} onChange={handleUrlChange} /></div>
                <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}

export default BlogForm