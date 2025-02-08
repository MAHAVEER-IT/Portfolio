import './Skills.css'

const Skills = () => {
  const skills = {
    languages: ["C", "C++", "Python", "Dart", "Java", "SQL"],
    frameworks: ["Flutter", "JavaFX"],
    databases: ["Firebase", "MongoDB", "SQL", "Google Sheets"],
    tools: ["WebSockets", "Git","BLoC Architecture (learning)"]
  }

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Languages</h3>
          <ul>
            {skills.languages.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Frameworks</h3>
          <ul>
            {skills.frameworks.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Databases</h3>
          <ul>
            {skills.databases.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <ul>
            {skills.tools.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills 