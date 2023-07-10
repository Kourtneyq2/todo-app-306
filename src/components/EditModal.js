// import { Button, Modal, Form } from "react-bootstrap";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export const EditModal = ({ showModal, handleClose, todoItems, itemSelected }) => {

  const [title, setTitle] = useState(itemSelected.title);
  const [error, setError] = useState('');

  const handleOnChange = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleSaveClick = () => {
    if(!title) {
      setError('Please enter a valid title')
    } else {
      // edit item with new title and status
      handleClose()
    }
  }
    return(
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Control 
                    type='text' 
                    placeholder={'Enter a title'} 
                    value={title}
                    onChange={handleOnChange}
                  />
                  {error && (
                    <Form.Text className='text-danger'>
                      {error}
                    </Form.Text>
                    )
                  }
          </Form.Group>
          <Form.Group>
            <Form.Check 
              type="switch" 
              id="custom-switch" 
              label="Complete" 
              checked={itemSelected.status === 'COMPLETE'}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}