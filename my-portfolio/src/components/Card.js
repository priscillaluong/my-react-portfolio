import image1 from '../assets/tradr.png'
import image2 from '../assets/destination-guide.png'
import image3 from '../assets/baxters.png'

const Card = () => {
    return (  
        <div className="portfolio-container">
            <article className="portfolio-item">
                <div className="portfolio-image">
                    <img src={image1} alt="tradr marketplace"></img>
                </div>
                <h3 className="portfolio-title">This is the portfolio title</h3>
                <a href="/" className="btn">Github Link</a>
                <a href="/" className="btn">Deployed Application</a>
            </article>
        </div>
    );
}
 
export default Card;