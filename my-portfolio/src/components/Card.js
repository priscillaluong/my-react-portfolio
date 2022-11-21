import image1 from '../assets/tradr.png'
import image2 from '../assets/destination-guide.png'
import image3 from '../assets/baxters.png'
import '../styles/Card.css'

const Card = () => {
    return (  
        <div className="portfolio-container">
            <article className="portfolio-item">
                <div className="portfolio-image">
                    <img src={image1} alt="tradr marketplace"></img>
                </div>
                <h3 className="portfolio-title">Tradr Marketplace</h3>
                <p className="project-description">A marketplace application for users to buy, sell and review listed items. App follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.</p>
                <div className="project-links">
                <a href="/" className="btn">Github Link</a>
                <a href="/" className="btn">Deployed Application</a>
                </div>
            </article>
            <article className="portfolio-item">
                <div className="portfolio-image">
                    <img src={image2} alt="destination guide"></img>
                </div>
                <h3 className="portfolio-title">Destination Guide</h3>
                <div className="project-links">
                <a href="/" className="btn">Github Link</a>
                <a href="/" className="btn">Deployed Application</a>
                </div>
            </article>
            <article className="portfolio-item">
                <div className="portfolio-image">
                    <img src={image3} alt="baxters"></img>
                </div>
                <h3 className="portfolio-title">Baxters Flowers</h3>
                <div className="project-links">
                <a href="/" className="btn">Github Link</a>
                <a href="/" className="btn">Deployed Application</a>
                </div>
            </article>
        </div>
    );
}
 
export default Card;