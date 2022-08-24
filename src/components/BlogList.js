import { Link } from 'react-router-dom'

export default ({blogs, title}) => {
    return <>
    <div>Blog List</div>
    {blogs.map(blog => <>
        <div>id:{blog.id} {blog.title}</div>
        <div>{blog.body}</div>
    </>)}
    </>
}