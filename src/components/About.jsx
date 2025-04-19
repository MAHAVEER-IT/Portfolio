import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <div className="profile-image">
            <img src="/portfolio_img.png" alt="Mahaveer K" />
          </div>
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
            I'm Mahaveer K, a passionate Flutter developer with a strong interest in mobile app development and IoT integration. I love building meaningful solutions using Firebase, real-time features, and intuitive UI/UX design. Currently pursuing my B.Tech in IT, I'm focused on creating innovative apps that make a real-world impact—especially in the areas of education, agriculture, and sustainability.
            </p>
          </div>
          
          <div className="quick-info">
            <div className="info-item">
              <span className="info-label">🎓 Education</span>
              <span>B.Tech IT at Sri Eshwar College of Engineering</span>
            </div>
            <div className="info-item">
              <span className="info-label">📍 Location</span>
              <span>Coimbatore, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About