import React from 'react'
import { CssBaseline, Typography, Container } from '@material-ui/core'

export default function ReqLogin() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm" style={{marginTop: "2%",marginBottom: "2%"}}>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Require login
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                    Please login to use function
                </Typography>
            </Container>
        </>
    )
}
