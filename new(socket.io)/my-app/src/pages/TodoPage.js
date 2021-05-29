import React, { Component } from 'react'
// import { useEffect, useRef, useState, createRef } from 'react'
import { CssBaseline, Typography, Container, Button, Box } from '@material-ui/core'
import TodoList from '../components/TodoList'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import productApi from '../api/productApi';
import wb from '../api/webSocket'

import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from "./TodoStyle";





class TodoPage extends Component {


    constructor(props) {
        super(props)
        this.handleChangeTile = this.handleChangeTile.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            todo: [],
            event: false,
            titleValue: '',
            messageValue: ''
        }
    }


    componentDidMount = async () => {
        wb.on("test", data => {
            console.log(data);
        })

        wb.on("newData", data => {
            this.setState({ todo: [...this.state.todo, data] })
        })
        wb.on("deleteData", id => {

            const updatedTodo = this.state.todo.filter((todo) => {
                return todo._id !== id;
            });
            this.setState({ todo: updatedTodo })
        })
        wb.on("replaceData", data => {
            let temp = this.state.todo
            for (let i = 0; i < temp.length; i++) {
                if (temp[i]._id === data._id) {
                    temp[i] = data;
                    this.setState({ todo: temp })
                    return;
                }
            }
        })

        await this.fetchTodo();
    }

    fetchTodo = async () => {
        try {
            const response = await productApi.getAll();
            console.log('Fetch products successfully: ', response);
            this.setState({ todo: response })
        } catch (error) {
            console.log('Failed to fetch product list: ', error);
        }
    }

    handleChangeTile(event) {
        this.setState({ titleValue: event.target.value });
    }
    handleChangeMessage(event) {
        this.setState({ messageValue: event.target.value });
    }

    handleSubmit(event) {
        productApi.create(this.state.titleValue, this.state.messageValue)
        event.preventDefault();
        this.handleClose();
    }


    handleClickOpen = () => {
        this.setState({ event: true });

    };
    handleClose = () => {
        this.setState({ event: false });
    };

    submit = () => {
        document.getElementById('submit').click();
    }
    render() {
        const classes = this.props.classes;

        return (
            <>
                <div>

                    <CssBaseline />
                    <Container maxWidth="sm" className={classes.header} >
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Todo list
                    </Typography>
                        <Box textAlign='center'>
                            <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                                Add
                    </Button>
                        </Box>
                    </Container>


                    <div className={classes.container}>
                        <TodoList data={this.state.todo} />
                    </div>





                    <Dialog open={this.state.event} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Add todo</DialogTitle>
                        <DialogContent>
                            {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                </DialogContentText> */}

                            <form id="contact" onSubmit={this.handleSubmit}>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    label="Title"
                                    type="text"
                                    fullWidth
                                    required

                                    onChange={this.handleChangeTile}
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
                                    onChange={this.handleChangeMessage}
                                    rows={4}
                                />
                                <button name="submit" type="submit" id="submit" className={classes.submit} >Submit</button>

                            </form>

                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={this.handleClose}>
                                Cancel
                    </Button>
                            <Button color="primary" onClick={this.submit} >
                                Add
                    </Button>
                        </DialogActions>
                    </Dialog>
                </div>

            </>
        )
    }
}

TodoPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoPage);