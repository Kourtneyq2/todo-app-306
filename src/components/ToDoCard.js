import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

export const ToDoCard = ({ handleClose, handleShow }) =>{
    return(
        <div>
            <Card className='my-3'>
                <Card.Header>
                    <Card.Title>Special title treatment</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Stack gap={3}>
                        <Stack direction='horizontal' className='justify-content-between'>
                            <div>Created</div>
                            <div>12th June, 2023</div>
                        </Stack>
                            
                        <Stack direction='horizontal' className='justify-content-between'>
                            <div>Status</div>
                            <div className='text-danger'>Incomplete</div>
                        </Stack>
                    </Stack>
                </Card.Body>
                <Card.Footer>
                    <Stack direction='horizontal' className='justify-content-center'>
                        <Button variant='light' className='mx-3' onClick={handleShow}>
                            <i className="fas fa-edit"></i>
                        </Button>
                        <Button variant='light' className='mx-3'>
                        <i className="fa-solid fa-trash"></i>
                        </Button>
                    </Stack>
                </Card.Footer>
            </Card>
        </div>
    )
}