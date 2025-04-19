import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      name: "C Language Certification",
      issuer: "Udemy",
      icon: "💻"
    },
    {
      name: "Python Certificate",
      issuer: "HackerRank",
      icon: "🐍"
    },
    {
      name: "DSA Course in C & C++",
      issuer: "Udemy",
      icon: "🔍"
    },
    {
      name: "Flutter Bootcamp",
      issuer: "5-Day Intensive",
      icon: "📱"
    },
    {
      name: "LetsUpgrade Bootcamp",
      issuer: "5-Day Program",
      icon: "🚀"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <span className="cert-icon">{cert.icon}</span>
            <div className="cert-details">
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications