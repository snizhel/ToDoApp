import React from 'react'
import NavBar from '../components/NavBar'
export default function layout(props) {
    return (
        <div>
            <NavBar />
            <main>
                {props.children}
            </main>
        </div>
    )
}
