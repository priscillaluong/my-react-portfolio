import Card from './Card';
import '../styles/Card.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Trigger - Pet Rehoming",
            image: "https://user-images.githubusercontent.com/29457902/206865480-d2166e6e-85fd-443b-aac3-7ac569ece1c2.png",
            description: "Trigger is a platform that allow pet owners, who are sadly unable to keep their pets, to find them a safe and loving new home. It is a MERN-stack single-page application, with a MongoDB back end, a GraphQL API, an Express.js and Node.js server with a React front end. We've also implemented user authentication with JWT.",
            githubUrl: "https://github.com/priscillaluong/trigger",
            deployedUrl: "https://boiling-dusk-63403.herokuapp.com/",
        },
        {
            title: "Tradr Marketplace",
            image: "https://raw.githubusercontent.com/priscillaluong/tradr-marketplace-ecom/main/public/images/readme-screenshot.png",
            description: "A marketplace application for users to buy, sell and review listed items. App follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
            githubUrl: "https://github.com/priscillaluong/tradr-marketplace-ecom",
            deployedUrl: "https://calm-gorge-52770.herokuapp.com",
        },
        {
            title: "Destination Guide",
            image: "https://raw.githubusercontent.com/priscillaluong/destination-guide-w7/main/assets/images/home.png",
            description: "Destination Guide, is an all-in-one application that offers a range of services such as currency conversion, country information and weather information for tourists.",
            githubUrl: "https://github.com/priscillaluong/destination-guide-w7",
            deployedUrl: "https://priscillaluong.github.io/destination-guide-w7/",
        },
        {
            title: "MVC Tech Blog",
            image: "https://raw.githubusercontent.com/priscillaluong/mvc-tech-blog/main/assets/images/home.png",
            description: "A CMS-style blog site, where developers can publish their blog posts and comment on other posts. App follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
            githubUrl: "https://github.com/priscillaluong/mvc-tech-blog",
            deployedUrl: "https://salty-savannah-57008.herokuapp.com/",
        },
        {
            title: "PWA Text Editor",
            image: "https://raw.githubusercontent.com/priscillaluong/pwa-text-editor/main/assets/images/heroku.png",
            description: "A single-page PWA text editor that runs in the browser. This application features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. It also functions offline.",
            githubUrl: "https://github.com/priscillaluong/pwa-text-editor",
            deployedUrl: "https://floating-gorge-81885.herokuapp.com/",
        },
        {
            title: "Timed Quiz - Web APIs",
            image: "https://raw.githubusercontent.com/priscillaluong/w4-timed-quiz/main/assets/images/correct.png",
            description: "A timed multiple-choice quiz built using web APIs.",
            githubUrl: "https://github.com/priscillaluong/w4-timed-quiz",
            deployedUrl: "https://priscillaluong.github.io/w4-timed-quiz/",
        },
        {
            title: "Work Day Scheduler",
            image: "https://raw.githubusercontent.com/priscillaluong/w5-work-day-scheduler/main/assets/images/blocks.png",
            description: "A Work Day Scheduler to allow employees to manage their time effectively. Built using jQuery, Moment.js and Bootstrap.",
            githubUrl: "https://github.com/priscillaluong/w5-work-day-scheduler",
            deployedUrl: "https://priscillaluong.github.io/w5-work-day-scheduler/",
        },
    ]

    return (  
        <div>
            <Card projects={projects} />
        </div>
    );
}
 
export default Portfolio;