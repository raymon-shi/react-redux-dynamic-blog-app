import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { addBlogPost, editingBlogPost, deletingBlogPost } from '../actions'
import BlogAdd from './BlogAdd'
import BlogPost from './BlogPost'

const BlogMain = ({
  blog, dispatchAddBlogPost, dispatchEditingBlogPost, dispatchDeletingBlogPost,
}) => {
  const [addingStatus, setAddingStatus] = useState(false)

  return (
    <div className="m-3" style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ fontWeight: 'bold' }}>Blog Posts</h1>
      </div>
      <Button variant="warning" onClick={() => setAddingStatus(true)}>Add Blog Post</Button>
      {addingStatus ? <BlogAdd addingStatus={addingStatus} setAddingStatus={setAddingStatus} dispatchAddBlogPost={dispatchAddBlogPost} /> : ''}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {blog.map(post => <BlogPost key={uuidv4()} id={post.id} title={post.title} image={post.image} description={post.description} dispatchEditingBlogPost={dispatchEditingBlogPost} dispatchDeletingBlogPost={dispatchDeletingBlogPost} />)}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  blog: state.blog,
})

const mapDispatchToProps = dispatch => ({
  dispatchAddBlogPost: (title, image, description) => dispatch(addBlogPost(title, image, description)),
  dispatchEditingBlogPost: (title, image, description, id) => dispatch(editingBlogPost(title, image, description, id)),
  dispatchDeletingBlogPost: id => dispatch(deletingBlogPost(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogMain)
