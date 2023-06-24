import Stack from 'react-bootstrap/Stack'

export const Banner = () => {
    return(
        <Stack className='text-center p-4 border my-3 rounded' gap={4}>
            <h1>To Do Manager</h1>
            <h2 className='fs-4 text-muted'>A simple to do application banner</h2>
        </Stack>
    )
}