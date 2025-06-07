import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-header">
        <h2>
          Your trusted <strong>ride booking</strong> partner
        </h2>
        <p>
          Book cabs instantly, enjoy safe rides, and experience affordable travel across 100+ cities in India.
        </p>
      </div>

      <div className="about-images">
        <img src="src/assets/office-2360063.jpg" alt="Office" />
        <img src="src/assets/pneumatic-desk-6952955.jpg" alt="Employe" />
        <img src="src/assets/job-5382501.jpg" alt="Team" />
      </div>

      <div className="about-stats">
        <h3>
          Making rides easy, safe, and affordable for everyone.
        </h3>
        <div className="stats-grid">
          <div className="stat-box">
            <h2>10,000+</h2>
            <p>Happy Riders</p>
          </div>
          <div className="stat-box">
            <h2>5,000+</h2>
            <p>Daily Bookings</p>
          </div>
          <div className="stat-box">
            <h2>100+</h2>
            <p>Cities Covered</p>
          </div>
          <div className="stat-box">
            <h2>24/7</h2>
            <p>Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
