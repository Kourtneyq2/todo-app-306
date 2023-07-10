import  Button  from "react-bootstrap/Button"
import Stack from 'react-bootstrap/Stack'
import { ToDoCard } from "./ToDoCard"
import { Alert } from "react-bootstrap"

export const ToDoList = ({ handleClose, handleShow, todoItems, selectItem }) => {
    return(
        <Stack className="border p-4 my-3 rounded" gap={3}>
            <h2 className="text-center">To Do List</h2>
            <hr />
            {todoItems.length === 0 ? (<Alert variant='danger text-center'>You have no tasks</Alert>) :
            (
            <>
                <div className="text-center">
                    <Button variant="danger">Clear List</Button>
                </div>
                {
                    todoItems.map((todoItems) => {
                        return(
                            <ToDoCard
                                handleClose={handleClose} 
                                handleShow={handleShow} 
                                todoItems={todoItems}
                                selectItem={selectItem}
                            />
                        )
                    })
                }
                
            </>
            )}
        </Stack>
    )
}