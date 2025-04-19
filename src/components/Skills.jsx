import './Skills.css'

const Skills = () => {
  const skills = {
    languages: ["C", "C++", "Python", "Java", "Dart", "MySQL"],
    core: ["Data Structures", "Algorithms"],
    tools: ["VS Code", "PyCharm", "Canva", "GitHub", "Android Studio"],
    frameworks: ["Flutter", "BLoC (State Management)", "Node.js", "Express.js", "Socket.io"],
    databases: ["Firebase", "MongoDB"]
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
          <h3>Core</h3>
          <ul>
            {skills.core.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <ul>
            {skills.tools.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Framework / Backend</h3>
          <ul>
            {skills.frameworks.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Database</h3>
          <ul>
            {skills.databases.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills