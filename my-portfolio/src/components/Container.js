import { useState } from "react";
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Experience from './Experience';

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
    return (
        <div>
        </div>
    )
}

export default Container
