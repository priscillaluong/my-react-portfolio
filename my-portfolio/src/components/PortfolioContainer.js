import { useState } from "react";
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Navbar from './Navbar';
import Footer from './Footer';

const PortfolioContainer = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
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

export default PortfolioContainer;
