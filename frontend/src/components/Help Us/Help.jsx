import React from 'react';
import './help.css';

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-wrapper">
        <div className="help-info">
          <h2>Help & Support</h2>
          <p>If you need any assistance or have suggestions, feel free to reach out to us.</p>
          <ul>
            <li><strong>Phone:</strong> +91 7024313357</li>
            <li><strong>Email:</strong> kushwahadeepraj91@gmail.com</li>
            <li><strong>Address:</strong> c-112,Sonagiri,Bhopal,M.P</li>
          </ul>
        </div>

        <div className="help-form">
          <h2>Reach Out to Us</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="How can we help you?" required></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
