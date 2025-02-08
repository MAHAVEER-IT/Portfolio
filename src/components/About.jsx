import './About.css'

const About = () => {
  const certifications = [
    "C Language Certification (Udemy)",
    "Python Certificate (HackerRank)",
    "DSA Course in C & C++ (Udemy)",
    "5-Day Flutter Bootcamp",
    "5-Day LetsUpgrade Bootcamp"
  ];

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate B.Tech IT student at SECE, specializing in mobile app development 
            with a strong focus on Flutter. I aspire to become a leading mobile app developer, 
            blending creativity with technical expertise to build impactful applications.
          </p>
          <p>
            As the Team Leader of Team Trailblazers, I have hands-on experience in Firebase, 
            MongoDB, IoT integration, and cybersecurity. I strive to develop secure, 
            user-friendly, and innovative solutions.
          </p>
          <div className="certifications">
            <h3>Certifications</h3>
            <ul>
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="about-image">
          <img src="/path-to-your-profile-image.jpg" alt="Mahaveer K" />
        </div>
      </div>
    </section>
  )
}

export default About 