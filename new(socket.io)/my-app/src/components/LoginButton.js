import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <IconButton onClick={() => loginWithRedirect()}>
            <AccountCircleIcon />
        </IconButton>
    )
}

export default LoginButton
