import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Mahaveer K</span></h1>
        <h2>Software Engineer</h2>
        <p>B.Tech Information Technology at Sri Eshwar College of Engineering, specializing in Flutter development</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero 