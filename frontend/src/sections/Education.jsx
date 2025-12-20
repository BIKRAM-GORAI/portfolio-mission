function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>

      <div className="education-timeline">
        {/* vertical line */}
        <div className="timeline-line"></div>

        {/* Item 1 */}
        <div className="education-item left">
          {/* <div className="education-year">2023 – Present</div> */}
          <div className="education-card">
            <h3>Bachelor of Technology (B.Tech)</h3>
            <p>(2024-2028)</p>
            <p>Computer Science and Engineering</p>
            <span>XYZ College, ABC University</span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="education-item right">
          {/* <div className="education-year">2021 – 2023</div> */}
          <div className="education-card">
            <h3>Higher Secondary (Class 12)</h3>
            <p>(2024-2028)</p>
            <p>Science Stream (CBSE)</p>
            <span>ABC Higher Secondary School</span>
          </div>
        </div>

        {/* Item 3 */}
        <div className="education-item left">
          {/* <div className="education-year">2011 – 2021</div> */}
          <div className="education-card">
            <h3>Secondary School (Class 1 – 10)</h3>
            <p>(2024-2028)</p>
            <p>CBSE Board</p>
            <span>XYZ School</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
