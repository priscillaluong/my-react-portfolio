import Header from './components/Header';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {

  return (
    <div className="container">
      <div className="content">
        <Navbar />
        <Header />
      </div>
      <div>
        <Container />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
