import profileImage from '../assets/profile.png'

const Home = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={profileImage} alt="profile"></img>
      </div>
      <h1 className="profile-text">
        Hi, my name is Priscilla Luong. I am a Junior Full-Stack Developer with
        a background in Design.
      </h1>
    </div>
  );
};

export default Home;
