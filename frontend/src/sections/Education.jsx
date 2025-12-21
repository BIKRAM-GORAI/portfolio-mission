function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>

      <div className="education-timeline">
        {/* vertical line */}
        <div className="timeline-line"></div>

        <div className="education-item left">
          <div className="education-card">
            <h3>Bachelor of Technology (B.Tech)</h3>
            <p>Asansol Engineering College</p>
            <p>(2024-2028)</p>
            <span>Computer Science and Engineering</span>
          </div>
        </div>

        <div className="education-item right">
          <div className="education-card">
            <h3>Higher Secondary (Class 12)</h3>
            <p>Valley Public School</p>
            <p>(2022-2024)</p>
            <span>Science Stream (CBSE)</span>
          </div>
        </div>

        <div className="education-item left">
          <div className="education-card">
            <h3>Secondary School (Class 1 – 10)</h3>
            <p>Loyola School</p>
            <p>(2012-2022)</p>
            <span>ICSE Board</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
