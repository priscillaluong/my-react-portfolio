import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  return (
    <div className="container">
      <div className="content">
        <Navbar />
        <Header />
      </div>
      <div className="content">
        <Portfolio />
      </div>
      <div className="content">
        <Contact />
      </div>
    </div>
  );
}

export default App;
