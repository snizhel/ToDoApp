import React from 'react'
import UpdateIcon from '@material-ui/icons/Update';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { CssBaseline, Grid, Card, Button, CardContent, CardHeader, CardActions } from '@material-ui/core'
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

export default function CardItem(props) {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Grid item xs={12} xm={6} md={4}>
                <Card className={classes.card}>
                    <CardHeader title="title..." className={classes.cardHeader} />
                    <CardContent className={classes.cardContent}>Content...</CardContent>
                    <CardActions>
                        <Button
                            // variant="contained"
                            // color="primary"
                            className={classes.button}
                        >
                            <UpdateIcon />
                                            Update
                                        </Button>
                        <Button
                            // variant="contained"
                            // color="primary"
                            className={classes.button}
                        >
                            <DeleteForeverIcon />
                                            Delete
                                        </Button>
                    </CardActions>
                </Card>
            </Grid>

        </>
    )
}
