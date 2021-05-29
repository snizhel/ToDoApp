import React, { useRef, useState } from 'react'
import UpdateIcon from '@material-ui/icons/Update';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { CssBaseline, Grid, Card, Button, CardContent, CardHeader, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import productApi from '../api/productApi';
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardHeader: {
        // paddingTop: "56.25%"//16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    submit: {
        visibility: "hidden",
    }
}));



export default function CardItem(props) {
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
            productApi.update(props.data._id, enteredTitle, enteredContent)
            setOpen(false);
        } catch (error) {
            console.log(error);
        }
    }

    function deleteItem() {
        try {
            productApi.delete(props.data._id);
        } catch (error) {
            console.log('Failed to delete item: ', error);
        }
    }

    return (
        <>
            <CssBaseline />
            <Grid item  xs={12}  xm={6} md={4}>
                <Card className={classes.card}>
                    <CardHeader title={props.data.name} className={classes.cardHeader} />
                    <CardContent className={classes.cardContent}>{props.data.message}</CardContent>
                    <CardActions>
                        <Button
                            // variant="contained"
                            // color="primary"
                            className={classes.button}
                            onClick={handleClickOpen}
                        >
                            <UpdateIcon />Update
                        </Button>
                        <Button
                            // variant="contained"
                            // color="primary"
                            className={classes.button}
                            onClick={deleteItem}
                        >
                            <DeleteForeverIcon />Delete
                        </Button>
                    </CardActions>
                </Card>
            </Grid>



            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add todo</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                </DialogContentText> */}

                    <form id="contact" onSubmit={onSubmit}>
                        <TextField
                            defaultValue={props.data.name}
                            autoFocus
                            margin="dense"
                            label="Title"
                            type="text"
                            fullWidth
                            required

                            inputRef={titleInputRef}
                        />
                        <TextField
                            defaultValue={props.data.message}
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
                        Update
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    )
}
