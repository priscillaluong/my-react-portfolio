import React from 'react';

const Navbar = ({ currentPage, handlePageChange }) => {
    return (
        <nav className="navbar">
            <h1 className="name">
                Priscilla Luong
            </h1>
            <div className="links">
                <a href="#Home">Home</a>
                <a href="#Portfolio">Portfolio</a>
                <a href="#Experience">Experience</a>
                <a href="#Contact">Contact</a>
            </div>
        </nav>
    );
}
 
export default Navbar;