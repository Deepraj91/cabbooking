import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Cab Booking</h4>
          <a href="#">Book a Ride</a>
          <a href="#">Ride Options</a>
          <a href="#">Driver Signup</a>
          <a href="#">Customer App</a>
        </div>

        <div className="footer-column">
          <h4>Tools</h4>
          <a href="#">Fare Estimator</a>
          <a href="#">Ride Tracker</a>
          <a href="#">CabLocator</a>
          <a href="#">Promotions</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Support</a>
          <a href="#">Report an Issue</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} CabBooking. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
