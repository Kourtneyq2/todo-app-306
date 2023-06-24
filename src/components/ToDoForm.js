import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormRange from 'react-bootstrap/esm/FormRange'

export const ToDoForm = () => {
    return(
        <Form className='p-4 border rounded'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control type='text' placeholder='Enter a title'/>
                <Form.Text className='text-danger'>Please enter a valid title.</Form.Text>
            </Form.Group>
            <div className='text-center'>
                <Button variant='success' type='submit'>Enter</Button>
            </div>
        </Form>
    )
}