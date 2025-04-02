import profileImage from '../assets/profile.jpg'; // Add your photo to assets folder

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="img-fluid rounded-circle"
            style={{ maxWidth: '250px' }}
          />
        </div>
        <div className="col-md-8">
          <p>
            Hello! I'm Luis Ubidia, a web developer passionate about creating interactive applications.
            I have 4 months of experience in sofware development and everyday Im learning about new technologies my purpose is to be a full stack developer.
          </p>
          <p>
            I'm feeling more attracted by JavaScript and React , so probably I will be focusing more in front end technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;