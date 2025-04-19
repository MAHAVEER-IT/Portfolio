import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      title: "Freshothon (Project Expo)",
      position: "Third Place",
      icon: "🏆"
    },
    {
      title: "Hackastrom (36-hour Hackathon)",
      position: "Second Place",
      icon: "🥈"
    },
    {
      title: "Tech Trek Hackathon (8-hour Hackathon)",
      position: "Finalist",
      icon: "🎯"
    },
    {
      title: "Vultr Cloud Innovate Hackathon by GeeksforGeeks",
      position: "Selected for Two Rounds",
      icon: "☁️"
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <span className="achievement-icon">{achievement.icon}</span>
            <div className="achievement-details">
              <h3>{achievement.title}</h3>
              <p>{achievement.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements