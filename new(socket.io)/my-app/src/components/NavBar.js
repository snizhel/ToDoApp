import React from 'react'
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core'
export default function NavBar() {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative" style={{width:"100%"}}>
                <Toolbar>
                    <Typography variant="h6">
                        Todo
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
