import React from 'react'
import { CssBaseline, Container, Grid } from '@material-ui/core'
import CardItem from './components/CardItem'

import { makeStyles } from '@material-ui/core/styles';



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

}));

export default function Body() {
    const classes = useStyles();
    const cards = [1,2,3,4,5,6,7,8,9,10];
    return (
        <>
            <CssBaseline />
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map(key=>{
                        return (<CardItem key={key}/>)
                    })}
                </Grid>
            </Container>
        </>
    )
}
