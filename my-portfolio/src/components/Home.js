import profileImage from '../assets/profile.png'

const Home = () => {
  return (
    <div>
      <div className="profile-image">
        <img src={profileImage} alt="profile photo"></img>
      </div>
      <h1>
        Hi, my name is Priscilla Luong. I am a Junior Full-Stack Developer with
        a background in Design.
      </h1>
    </div>
  );
};

export default Home;
