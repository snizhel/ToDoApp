import React from 'react'
import { CssBaseline, Typography, Container, Button, Box } from '@material-ui/core'
import TodoList from '../components/TodoList'

export default function TodoPage() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Todo list
                    </Typography>
                <Box textAlign='center'>
                    <Button variant="contained" color="primary">
                        Add
                        </Button>
                </Box>
            </Container>
            <TodoList/>
        </>
    )
}
