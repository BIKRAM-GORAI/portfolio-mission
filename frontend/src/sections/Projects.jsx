function Projects() {
  return (
    <section id="projects" className="projects-section">
      {/* Section Heading */}
      <h2 className="projects-title">Projects</h2>

      {/* Projects Grid */}
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3 className="project-title">School Management System</h3>

          <p className="project-description">
            A role-based web application for managing students, teachers, and
            administrators with secure authentication and backend support.
          </p>

          <a
            href="https://github.com/your-username/school-management-system"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3 className="project-title">To-Do List Application</h3>

          <p className="project-description">
            A task management app with user authentication and date-wise task
            tracking, built to manage daily productivity efficiently.
          </p>

          <a
            href="https://github.com/your-username/todo-app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
