import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <IconButton aria-label="delete" onClick={() => logout()}>
            <ExitToAppIcon />
        </IconButton>


    )
}

export default LogoutButton
