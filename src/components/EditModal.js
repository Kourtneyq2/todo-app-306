// import { Button, Modal, Form } from "react-bootstrap";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const EditModal = ({ showModal, handleClose }) => {
    return(
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit To Do Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Control type='text' placeholder='Enter a title' value='Task to edit'/>
                  <Form.Text className='text-danger'>Please enter a valid title.</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Check type="switch" id="custom-switch" label="Complete" checked/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}