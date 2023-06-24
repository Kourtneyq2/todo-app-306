import { Button } from "react-bootstrap"
import { ToDoCard } from "./ToDoCard"
import Stack from 'react-bootstrap/Stack'

export const ToDoList = ({ handleClose, handleShow }) => {
    return(
        <Stack className="border p-4 my-3 rounded" gap={3}>
            <h2 className="text-center">To Do List</h2>
            <hr />
            <div className="text-center">
                <Button variant="danger">Clear List</Button>
            </div>
            <ToDoCard handleClose={handleClose} handleShow={handleShow}/>
        </Stack>
    )
}