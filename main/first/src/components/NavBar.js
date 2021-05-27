import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import Class from './NavBar.module.scss'
import './NavBar.scss'

function NavBar(props) {
    return (
        // <header>
        //     <div classNameName={className.header}>NavBar</div>
        //     <nav classNameName={className.logo}>
        //         <ul>
        //             <li>
        //                 <Link to="/">Todo</Link>
        //             </li>
        //             <li>
        //                 <Link to="/table">Todo table</Link>
        //             </li>

        //         </ul>
        //     </nav>

        // </header>
        <div className="nav">
            <img src="https://i.ibb.co/zQnL1sB/logo-25-01-2021.png" alt="logo" className='logo' />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/table">Table</Link></li>
                    {/* <li><a href="#">Blog</a></li> */}
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav>
        </div>

    )
}

// NavBar.propTypes = {

// }

export default NavBar

