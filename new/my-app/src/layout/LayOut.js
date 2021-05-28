// import React from 'react'
// import navBar from '../components/navBar'

// export default function layOut(props) {
//     return (
//         <>
//             <navBar />
//             <h1>asd</h1>
//             <main>
//                 {props.children}
//             </main>
//         </>
//     )
// }

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
