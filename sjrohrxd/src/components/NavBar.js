import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/NavLink'

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar className="me-auto">
                        <NavLink><a href="/">Home</a></NavLink>
                        <NavLink><a href="https://github.com/SJROHRXD">GitHub</a></NavLink>
                        <NavLink><a href="https://www.linkedin.com/in/sjrohrxd/">LinkedIn</a></NavLink>
                        </Navbar>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


























// function Nav() {
//     return (
//         <div>
//             <nav className='navbario'>
//                 <ul className='navbar-link'>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/">GitHub</a></li>
//                     <li><a href="/">LinkedIn</a></li>
//                 </ul>
//             </nav>
//         </div>
//     )
// };

// export default Nav;






        // export default function NavBar() {
        //     return (
        //         <div>
        //             <nav className='navbar'>
        //                 <ul className='navbar-link'>
        //                     <li><a href="/">Home</a></li>
        //                     <li><a href="https://github.com/SJROHRXD">GitHub</a></li>
        //                     <li><a href="https://www.linkedin.com/in/sjrohrxd/">LinkedIn</a></li>
        //                 </ul>
        //             </nav>
        //         </div>
        //     );
        // };