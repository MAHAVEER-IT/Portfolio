import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="#home">
          <img 
            src="https://img.icons8.com/fluency/48/000000/code.png" 
            alt="Developer Icon" 
            className="brand-icon"
          />
          Mahaveer Portfolio
        </a>
      </div>
      
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="hamburger"></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar 