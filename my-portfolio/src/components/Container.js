import { useState } from "react";
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Experience from './Experience';
import Navbar from './Navbar';
import Footer from './Footer';

const Container = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Experience') {
            return <Experience />;
        }
        return <Contact />;
    }

    const handlePageChange = (page) =>setCurrentPage(page);
    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer />
        </div>
    )
}

export default Container;
