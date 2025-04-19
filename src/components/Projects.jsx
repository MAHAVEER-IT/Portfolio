import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "EduTrack",
      description: "School Management App with attendance tracking, role-based access, and SMS updates",
      image: "https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg",
      technologies: ["Flutter", "Firebase", "Google Sheets"],
      details: "With Team collaboration",
      github: "https://github.com/MAHAVEER-IT/bank_inish.git",
      drive: "https://drive.google.com/drive/folders/1vxKULPPqAU3odQUJQFvZ8AQCmuWauxas?usp=drive_link"
    },
    {
      title: "Bank Insight",
      image: "https://img.freepik.com/free-vector/isometric-money-saving-concept-background_52683-6820.jpg",
      description: "Finance Management App with balance check, mini-statement, loan calculators, and expense tracker",
      technologies: ["Flutter", "Firebase"],
      details: "Hackathon 3rd Prize Winner",
      github: "https://github.com/MAHAVEER-IT/bank_inish.git",
      drive: "https://drive.google.com/drive/folders/13j3pnF7rVRWrvD1OvyUghWhdSVP8HYQR?usp=drive_link"
    },
    {
      title: "IPL Action Game",
      image: "https://img.freepik.com/premium-vector/cricket-t20-concept-with-text-player-cricketer-white-background_1169097-175.jpg?w=996",
      description: "Real-time room-based communication game with password protection",
      technologies: ["Flutter", "WebSockets", "Firebase"],
      details: "In Progress - Implementing real-time multiplayer features and secure room management"
    },
    {
      title: "To-Do List App",
      description: "A comprehensive task management application with advanced filtering and organization features",
      image: "https://img.freepik.com/free-vector/task-management-abstract-concept-illustration_335657-2127.jpg",
      technologies: ["Flutter", "Firebase", "State Management"],
      details: "Implemented task categorization, date-based filters, and real-time Firebase synchronization",
      github: "https://github.com/MAHAVEER-IT/TODO.git",
      drive: "https://drive.google.com/drive/folders/1aw4L8AauleaIyY2qFD_xS3Pkh16XCyKG?usp=drive_link"
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.details && <p className="project-details">{project.details}</p>}
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn github">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href={project.drive} target="_blank" rel="noopener noreferrer" className="link-btn drive">
                <i className="fab fa-google-drive"></i> Drive
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 