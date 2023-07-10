import  Container  from "react-bootstrap/Container";
import { Banner } from "./components/Banner";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";
import { useEffect, useState } from "react";
import { EditModal } from "./components/EditModal";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";
import uuid4 from "uuid4";
import { format } from "date-fns";


export const App = () => {

  const [todoItems, setTodoItems] = useState();
  const [showModal, setShowModal] = useState(false);
  const [itemSelected, setItemSelected] = useState();

  useEffect(() => {
    const itemsFromLocalStorage = getFromLocalStorage('todoItems')
    
    setTodoItems(itemsFromLocalStorage);
  }, [])

  const handleShow = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setItemSelected()
    setShowModal(false)
  }

  const addTodoItem = (title) => {
    const itemToAdd = {
      id: uuid4(),
      title, 
      status: 'Incomplete',
      createdAt: format(new Date(), "EEE do MMMM, yyyy 'at' HH:mm")
    };

    const itemsFromLocalStorage = getFromLocalStorage('todoItems');

    const newItems = [itemToAdd, ... itemsFromLocalStorage]

    localStorage.setItem('todoItems', JSON.stringify(newItems));

    setTodoItems(newItems)
  }

  const selectItem = (item) => {
    setItemSelected(item)
  }


  return(
    <Container>
      {itemSelected && (
        <EditModal 
          showModal={showModal} 
          handleClose={handleClose} 
          itemSelected={itemSelected}
        />
      )}
      <Banner />
      <ToDoForm 
        addTodoItem={addTodoItem}
      />
      {todoItems && (
        <ToDoList
          handleClose={handleClose}
          handleShow={handleShow}
          todoItems={todoItems}
          selectItem={selectItem}
        />)}
    </Container>
  );
};
