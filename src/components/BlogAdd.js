import React, { useState } from 'react'
import {
  Modal, Button, Form, Card,
} from 'react-bootstrap'

const BlogAdd = ({ addingStatus, setAddingStatus, dispatchAddBlogPost }) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  return (
    <>
      <Modal show={addingStatus} onHide={() => setAddingStatus(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Adding New Blog Post</Modal.Title>
        </Modal.Header>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter blog post title..." value={title} onChange={e => setTitle(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="Enter image link..." value={image} onChange={e => setImage(e.target.value)} />
                <Form.Text className="text-muted">
                  Only a valid link will display a picture!
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter a description..." value={description} onChange={e => setDescription(e.target.value)} />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Modal.Footer>
          <Button
            variant="warning"
            onClick={() => {
              dispatchAddBlogPost(title, image, description)
              setAddingStatus(false)
            }}
          >
            Save
          </Button>
          <Button variant="secondary" onClick={() => setAddingStatus(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BlogAdd
