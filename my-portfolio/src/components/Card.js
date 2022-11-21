import "../styles/Card.css";

const Card = ({ projects }) => {
  return (
    <div className="portfolio-container">
      {projects.map((project) => (
        <article className="portfolio-item">
          <div className="portfolio-image">
          <img src={project.image} alt={project.title}></img>
          </div>
          <h3 className="portfolio-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            <a href={project.githubUrl} className="btn">
              Github Link
            </a>
            <a href={project.deployedUrl} className="btn">
              Deployed Application
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Card;
