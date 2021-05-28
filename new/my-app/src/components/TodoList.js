import React from 'react'
import { CssBaseline, Container, Grid } from '@material-ui/core'
import CardItem from './CardItem'

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    cardGrid: {
        padding: '20px 0',
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

}));

export default function TodoList(props) {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Container className={classes.cardGrid} maxWidth="md" >
                <Grid container spacing={4}>
                    {props.data.map(todo => {
                        return (<CardItem 
                            key={todo._id}
                            data={todo}
                            />)
                    })}
                </Grid>
            </Container>
        </>
    )
}
