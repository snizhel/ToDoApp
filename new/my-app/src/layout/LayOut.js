import React from 'react'
import NavBar from '../components/NavBar'
export default function LayOut(props) {
    return (
        <>
            <NavBar />
            <main>
                {props.children}
            </main>

        </>
    )
}
