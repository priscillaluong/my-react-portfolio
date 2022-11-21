import React from 'react';
import '../styles/Navbar.css'

function Navbar({ currentPage, handlePageChange }){
    return (
        <nav className="navbar">
            <h1 className="name">
                <a href="#Home" onClick={() => handlePageChange('Home')}>Priscilla Luong</a>
            </h1>
            <hr></hr>
            <div className="links">
                <a className="item-link hide" href="#Home" onClick={() => handlePageChange('Home')}>Home</a>
                <a className="item-link" href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                <a className="item-link" href="#Experience" onClick={() => handlePageChange('Resume')}>Resume</a>
                <a className="item-link" href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</a>
            </div>
        </nav>
    );
}
 
export default Navbar;