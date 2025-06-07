import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import About from '../About/About';
import Service from '../Service/Service';
import Help from '../Help Us/Help'; // Import Help component

function Home() {
  const rideNames = ['Cab', 'Bike', 'Auto'];
  const [currentRide, setCurrentRide] = useState(0);
  const helpRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRide((prev) => (prev + 1) % rideNames.length);
    }, 1200); // Change every 1.2 seconds
    return () => clearInterval(interval);
  }, [rideNames.length]);

  const scrollToHelp = () => {
    const isLoggedIn = !!localStorage.getItem('token');
    if (!isLoggedIn) {
      window.location.href = '/login?redirect=/#helpus';
    } else {
      helpRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="home-hero">
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-title">
              Book Your{' '}
              <span
                className="next_ride animate-ride"
                style={{ display: 'inline-block', minWidth: '5ch', textAlign: 'center' }}
              >
                {rideNames[currentRide]}
              </span> Instantly
            </h1>
            <p className="home-desc">
              Fast, reliable, and affordable rides at your fingertips. Whether you need a ride to the airport, office, or anywhere in the city, CabBooking has you covered.
            </p>
            <a href="/login" className="home-btn">Book Now</a>
            <button onClick={scrollToHelp} className="home-btn" style={{ marginLeft: '10px' }}>
              Help Us
            </button>
          </div>

          <div className="home-image-grid">
            <div className="home-image-left">
              <img src="src\assets\rickshaw-2509085.jpg" alt="Driver" className="small-img" />
              <div className="decor-img"></div>
            </div>
            <div className="home-image-right">
              <img src="src\assets\traffic-7025825.jpg" alt="cab ride" className="main-img" />
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <About />
      {/* Services Section */}
      <Service />
      {/* Help Us Section */}
      <div ref={helpRef} id="helpus">
        <Help />
      </div>
    </div>
  );
}

export default Home;
