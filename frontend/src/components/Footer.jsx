function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">Bikram Gorai</p>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/bikram-gorai/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
            />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/BIKRAM-GORAI"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
            />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.instagram.com/bikram____776/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              style={{ width: "18px", height: "18px" }}
            />

            <span>Instagram</span>
          </a>
        </div>
        <p className="footer-copyright">© 2025 Bikram Gorai. All rights reserved</p>

      </div>
    </footer>
  );
}

export default Footer;
