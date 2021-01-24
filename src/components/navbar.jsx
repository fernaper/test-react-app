import React from 'react';

// Stateless Funcional Component

const NavBar = ({ totalCounters }) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a href="/" className="navbar-brand">
                Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
        </nav>
    );
}
 
export default NavBar;