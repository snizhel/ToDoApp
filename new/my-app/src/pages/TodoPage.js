import React, { useEffect, useRef, useState } from 'react'
import { CssBaseline, Typography, Container, Button, Box } from '@material-ui/core'
import TodoList from '../components/TodoList'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import productApi from '../api/productApi';

const useStyles = makeStyles((theme) => ({
    submit: {
        visibility: "hidden",
    },
    
}));
export default function TodoPage() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const submit = () => {
        document.getElementById('submit').click();
    }
    const titleInputRef = useRef();
    const contentInputRef = useRef();
    function onSubmit(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredContent = contentInputRef.current.value;
        try {
            productApi.create(enteredTitle,enteredContent);
            setOpen(false);
        } catch (error) {
            console.log(error);
        }
    }


    const [isLoading, setIsLoading] = useState(true);
    const [loadedItem, setloadedItem] = useState([]);

    useEffect(() => {
        const fetchTodoList = async () => {
            try {
                const response = await productApi.getAll();
                console.log('Fetch products successfully: ',response);
                setIsLoading(false);
                setloadedItem(response);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchTodoList();
    }, []);
    // return <ProductList productList={productList} />;
    if (isLoading) {
        return <section><p>loading...</p></section>
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Todo list
                </Typography>
                <Box textAlign='center'>
                    <Button variant="contained" color="primary" onClick={handleClickOpen}>
                        Add
                    </Button>
                </Box>
            </Container>



            <TodoList data={loadedItem}/>


            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add todo</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                </DialogContentText> */}

                    <form id="contact" onSubmit={onSubmit}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Title"
                            type="text"
                            fullWidth
                            required
                            inputRef={titleInputRef}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Type your message here...."
                            type="text"
                            size="medium"
                            fullWidth
                            multiline
                            required
                            inputRef={contentInputRef}
                            rows={4}
                        />
                        <button name="submit" type="submit" id="submit" className={classes.submit} >Submit</button>

                    </form>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={submit} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
