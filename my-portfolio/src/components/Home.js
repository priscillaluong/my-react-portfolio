import profileImage from '../assets/profile.png'

const Home = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={profileImage} alt="profile"></img>
      </div>
      <h1 className="profile-text">
        A Junior Full Stack Developer with knowledge in the fundamentals of graphics, web development, and a particular interest in new technologies. Highly skilled in digital design and a confident user of various CAD software. 
      </h1>
    </div>
  );
};

export default Home;
