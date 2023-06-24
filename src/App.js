import  Container  from "react-bootstrap/Container";
import { Banner } from "./components/Banner";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { useState } from "react";
import { EditModal } from "./components/EditModal";


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
      <EditModal showModal={showModal} handleClose={handleClose}/>
      <Banner />
      <ToDoForm />
      <ToDoList handleClose={handleClose} handleShow={handleShow}/>
    </Container>
  );
};
