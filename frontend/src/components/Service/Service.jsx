import './Service.css';

function Service() {
  return (
    <section className="service-section">
      <div className="service-header">
        <h2 className="service-title">Our Services</h2>
        <p className="service-desc">
          Choose from a range of reliable cab services tailored to your needs. Whether it’s a quick city ride, airport transfer, or outstation journey, we’ve got you covered!
        </p>
      </div>
      <div className="service-list">
        <div className="service-card">
          <img
            src="src\assets\bike.webp"
            alt="Bike"
            className="service-img"
          />
          <h3 className="service-card-title">Bike</h3>
          <p className="service-card-desc">
            Fast and affordable bike rides within the city. Perfect for daily commutes, shopping, or meeting friends.
          </p>
        </div>
        <div className="service-card">
          <img
            src="src\assets\cab1.webp"
            alt="Cab"
            className="service-img"
          />
          <h3 className="service-card-title">Cab</h3>
          <p className="service-card-desc">
            Comfortable and convenient cab rides for your city travel needs.
          </p>
        </div>
        <div className="service-card">
          <img
            src="src\assets\auto.webp"
            alt="Auto"
            className="service-img"
          />
          <h3 className="service-card-title">Auto</h3>
          <p className="service-card-desc">
            Affordable and quick auto rides for short city trips and daily errands.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service;