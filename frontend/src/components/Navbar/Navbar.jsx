// src/components/Navbar/Navbar.jsx
import { BellIcon } from '@heroicons/react/24/outline';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Website name or logo */}
      <div className="navbar-left">
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <span className="website-name">CabBooking</span>
        </NavLink>
      </div>

      {/* Center: Navigation links */}
      <div className="navbar-center">
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : undefined} end>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : undefined}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : undefined}>Services</NavLink>
          <NavLink to="/Help Us" className={({ isActive }) => isActive ? "active-link" : undefined}>Help Us</NavLink>
        </div>
      </div>

      {/* Right: Login button */}
      <div className="navbar-right">
        <NavLink to="/login" className="cta-btn">Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
