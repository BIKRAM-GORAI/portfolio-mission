function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>School Management System</h3>
          <p>
            A full stack web application with separate roles for students,
            teachers, and admin. Built using Node.js, Express, MongoDB, and
            HTML/CSS.
          </p>
          <span>Tech: Node.js, Express, MongoDB</span>
        </div>

        <div className="project-card">
          <h3>To-Do List Application</h3>
          <p>
            A task management application with user authentication and date-wise
            task tracking.
          </p>
          <span>Tech: Node.js, MongoDB, EJS</span>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            Personal portfolio website built using React with backend integration
            for contact messages.
          </p>
          <span>Tech: React, Express, MongoDB</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
