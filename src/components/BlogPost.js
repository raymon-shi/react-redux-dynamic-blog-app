import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import BlogEdit from './BlogEdit'

const BlogPost = ({
  id, title, image, description, dispatchEditingBlogPost, dispatchDeletingBlogPost,
}) => {
  const [blogPostTitle, setBlogPostTitle] = useState(title || '')
  const [blogPostImage, setBlogPostImage] = useState(image || '')
  const [blogPostDescription, setBlogPostDescription] = useState(description || '')
  const [blogPostEditing, setBlogPostEditing] = useState(false)

  return (
    <>
      {blogPostEditing ? <BlogEdit id={id} title={blogPostTitle} image={blogPostImage} description={blogPostDescription} setBlogPostEditing={setBlogPostEditing} dispatchEditingBlogPost={dispatchEditingBlogPost} />
        : (
          <Card style={{ width: '18rem', alignSelf: 'center' }} className="m-3 w-25">
            <Card.Img variant="top" src={blogPostImage} alt="blog-post-image" style={{ width: '50%', alignSelf: 'center' }} />
            <Card.Body>
              <Card.Title>{`Blog Post #${id}: ${blogPostTitle}`}</Card.Title>
              <Card.Text>
                {blogPostDescription}
              </Card.Text>
              <Modal.Footer>
                <Button variant="warning" onClick={() => setBlogPostEditing(!blogPostEditing)}>Edit</Button>
                <Button variant="danger" onClick={() => dispatchDeletingBlogPost(id)}>Delete</Button>
              </Modal.Footer>
            </Card.Body>
          </Card>
        )}
    </>
  )
}

export default BlogPost
