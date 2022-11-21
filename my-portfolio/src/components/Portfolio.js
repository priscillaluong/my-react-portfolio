import Card from './Card';
import '../styles/Card.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Tradr Marketplace",
            image: "../assets/tradr.png",
            description: "A marketplace application for users to buy, sell and review listed items. App follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
            githubUrl: "https://github.com/priscillaluong/tradr-marketplace-ecom",
            deployedUrl: "https://calm-gorge-52770.herokuapp.com",
        },
        {
            title: "Destination Guide",
            image: "../assets/destination-guide.png",
            description: "Destination Guide, is an all-in-one application that offers a range of services such as currency conversion, country information and weather information for tourists.",
            githubUrl: "https://github.com/priscillaluong/destination-guide-w7",
            deployedUrl: "https://priscillaluong.github.io/destination-guide-w7/",
        },
        {
            title: "MVC Tech Blog",
            image: "../assets/mvc.png",
            description: "A CMS-style blog site, where developers can publish their blog posts and comment on other posts. App follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
            githubUrl: "https://github.com/priscillaluong/mvc-tech-blog",
            deployedUrl: "https://salty-savannah-57008.herokuapp.com/",
        },
    ]

    return (  
        <div>
            <Card projects={projects}/>
        </div>
    );
}
 
export default Portfolio;