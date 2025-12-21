function Projects() {
  return (
    <section id="projects" className="projects-section">
      {/* Section Heading */}
      <h2 className="projects-title">Projects</h2>

      {/* Projects Grid */}
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3 className="project-title">Smart Attendance System</h3>

          <p className="project-description">
            A backend-driven web application built to manage attendance and academic resources efficiently. The system allows teachers to mark attendance, manage subjects, and upload notes, while students can securely view their subject-wise attendance data. The backend is developed using Node.js and Express.js with MongoDB for data storage, and the frontend is implemented using HTML and CSS. The project focuses on structured APIs, role-based access, and scalable data handling and is currently under development.<br />
            <strong>Status:</strong> In Progress ✅
            
          </p>

          <a
            href="https://github.com/BIKRAM-GORAI/smart_attendance"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3 className="project-title">Hospital Management</h3>

          <p className="project-description">
            A full-stack application with a strong backend architecture designed to handle hospital operations through role-based dashboards. Patients can book appointments, view doctor availability, and track approval status, while doctors can manage schedules, view patient data, and monitor treatment records. The backend is built using Node.js and Express.js with MongoDB for database management, and the frontend uses HTML and CSS for a clean and functional interface. The project emphasizes secure routing, database modeling, and efficient backend logic.
            <br />
            <strong>Status:</strong> In Progress ✅
          </p>

          <a
            href="https://github.com/BIKRAM-GORAI/hospital"
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
