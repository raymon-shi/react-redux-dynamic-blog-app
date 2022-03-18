import React, { useState } from 'react'
import {
  Card, Button, Form, Modal,
} from 'react-bootstrap'

const BlogEdit = ({
  id, title, image, description, setBlogPostEditing, dispatchEditingBlogPost,
}) => {
  const [blogPostEditTitle, setBlogPostEditTitle] = useState(title || '')
  const [blogPostEditImage, setBlogPostEditImage] = useState(image || '')
  const [blogPostEditDescription, setBlogPostEditDescription] = useState(description || '')

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} className="m-3">
      <Card className="w-50">
        <Card.Body>
          <Card.Title>{`Editing Blog Post #${id} Form`}</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter a title..." value={blogPostEditTitle} onChange={e => setBlogPostEditTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" placeholder="Enter image link..." value={blogPostEditImage} onChange={e => setBlogPostEditImage(e.target.value)} />
              <Form.Text className="text-muted">
                Only a valid link will display a picture!
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter a description..." value={blogPostEditDescription} onChange={e => setBlogPostEditDescription(e.target.value)} />
            </Form.Group>
            <Modal.Footer className="mb-3">
              <Button
                variant="warning"
                onClick={() => {
                  dispatchEditingBlogPost(blogPostEditTitle, blogPostEditImage, blogPostEditDescription, id)
                  setBlogPostEditing(false)
                }}
              >
                Save
              </Button>
              <Button variant="secondary" onClick={() => setBlogPostEditing(false)}>
                Cancel
              </Button>
            </Modal.Footer>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default BlogEdit
