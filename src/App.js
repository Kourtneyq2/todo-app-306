import  Container  from "react-bootstrap/Container";
import { Banner } from "./components/Banner";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";


export const App = () => {

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }

  console.log(showModal)


  return(
    <Container>
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
      <Banner />
      <ToDoForm />
      <ToDoList handleClose={handleClose} handleShow={handleShow}/>
    </Container>
  );
};
