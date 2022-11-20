import React from 'react';
import '../styles/Navbar.css'

function Navbar({ currentPage, handlePageChange }){
    return (
        <nav className="navbar">
            <h1 className="name">
                Priscilla Luong
            </h1>
            <div className="links">
                <a href="#Home" onClick={() => handlePageChange('Home')}>Home</a>
                <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                <a href="#Experience" onClick={() => handlePageChange('Experience')}>Experience</a>
                <a href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</a>
            </div>
        </nav>
    );
}
 
export default Navbar;