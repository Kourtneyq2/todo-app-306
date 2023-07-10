import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export const ToDoForm = ( {addTodoItem} ) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const handleOnChange = (event) => {
        setTitle(event.currentTarget.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (!title) {
           setError('Please enter a title'); 
        }
        addTodoItem(title);
    }
    return(
        <Form className='p-4 border rounded' onSubmit={handleOnSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control type='text' placeholder='Enter a title' value={title} onChange={handleOnChange}/>
                {error && (
                    <Form.Text className='text-danger'>{error}</Form.Text>
                    )
                }
            </Form.Group>
            <div className='text-center'>
                <Button variant='success' type='submit' >Enter</Button>
            </div>
        </Form>
    )
}