import { Button } from "react-bootstrap"
import { ToDoCard } from "./ToDoCard"
import Stack from 'react-bootstrap/Stack'

export const ToDoList = () => {
    return(
        <Stack gap={3}>
            <h2 className="text-center">To Do List</h2>
            <hr />
            <div className="text-center">
                <Button variant="danger">Clear List</Button>
            </div>
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />
        </Stack>
    )
}