import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Foundations</h4>
                <h5>Self-Learning & Personal Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Learned HTML, CSS, JavaScript, and responsive web design.
              Built personal projects and explored modern web technologies.
              Developed a strong foundation in frontend development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Development</h4>
                <h5>Academic & Personal Projects</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked with PHP, PostgreSQL, MongoDB, and Git/GitHub.
              Built database-driven applications and dynamic websites.
              Gained experience in backend development and API integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Krytil</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing responsive and user-friendly web interfaces.
              Collaborating with developers and designers to improve user experience.
              Implementing modern frontend technologies and best practices.
              Contributing to real-world projects in a professional environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
