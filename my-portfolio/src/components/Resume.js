import "../styles/Resume.css";

const Experience = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-header">Technical Skills</h2>
      <div className="skills-card">
        <h2 className="skills-title">LANGUAGES</h2>
        <hr className="dark-hr"></hr>
        <ul>
          <li>JavaScript ES6+</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>SQL</li>
          <li>NoSQL</li>
        </ul>
      </div>
      <div className="skills-card">
        <h2 className="skills-title">APPLICATIONS</h2>
        <hr className="dark-hr"></hr>
        <ul>
          <li>GitHub</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Adobe Creative Cloud</li>
        </ul>
      </div>
      <div className="skills-card">
        <h2 className="skills-title">TOOLS</h2>
        <hr className="dark-hr"></hr>
        <ul>
          <li>Git</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>React</li>
          <li>RESTful APIs</li>
          <li>Handlebars</li>
          <li>jQuery</li>
          <li>Jest</li>
          <li>Webpack</li>
          <li>Babel</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="cv-btn">
      <a
        href="https://drive.google.com/file/d/12GV8k4xffAGtfKs2lngdhj97M_cDAy25/view"
        className="btn"
      >
        Download CV
      </a>
      </div>
    </div>
  );
};

export default Experience;
