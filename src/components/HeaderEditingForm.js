import React, { useState } from 'react'
import {
  Button, Form, Card, Modal,
} from 'react-bootstrap'

const HeaderEditingForm = ({
  image, description, setEditingStatus, dispatchEditingHeader,
}) => {
  const [editingImage, setEditingImage] = useState(image || '')
  const [editingDescription, setEditingDescription] = useState(description || '')

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} className="m-3">
      <Card className="w-50">
        <Card.Body>
          <Card.Title>Editing Header Form</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="text" placeholder="Enter image link..." value={editingImage} onChange={e => setEditingImage(e.target.value)} />
              <Form.Text className="text-muted">
                Only a valid link will display a picture!
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter a description..." value={editingDescription} onChange={e => setEditingDescription(e.target.value)} />
            </Form.Group>
            <Modal.Footer className="mb-3" controlId="formBasicButtons">
              <Button
                variant="warning"
                onClick={() => {
                  dispatchEditingHeader(editingImage, editingDescription)
                  setEditingStatus(false)
                }}
              >
                Save
              </Button>
              <Button variant="secondary" onClick={() => setEditingStatus(false)}>
                Cancel
              </Button>
            </Modal.Footer>

          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default HeaderEditingForm
