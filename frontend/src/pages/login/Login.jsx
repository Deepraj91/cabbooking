import React, { useState } from 'react';
import './login.css'; 
function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');
    try {
      const endpoint = isSignup ? '/api/auth/signup' : '/api/auth/login';
      const body = isSignup
        ? { name: form.name, email: form.email, password: form.password }
        : { email: form.email, password: form.password };
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        setMsg(data.msg || 'Something went wrong');
      } else {
        setMsg(isSignup ? 'Signup successful! Please login.' : 'Login successful!');
        // Optionally, handle token: localStorage.setItem('token', data.token);
      }
    } catch {
      setMsg('Network error');
    }
    setLoading(false);
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h2 className="login-title">
          {isSignup ? 'Sign Up' : 'Login'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 18 }}>
            <label className="login-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={form.email}
              onChange={handleChange}
              className="login-input"
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label className="login-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={form.password}
              onChange={handleChange}
              className="login-input"
            />
          </div>
          {isSignup && (
            <div style={{ marginBottom: 18 }}>
              <label className="login-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                value={form.name}
                onChange={handleChange}
                className="login-input"
              />
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="login-btn"
          >
            {loading ? 'Please wait...' : isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        {msg && (
          <div
            className="login-msg"
            style={{ color: msg.includes('success') ? 'green' : 'red' }}
          >
            {msg}
          </div>
        )}
        <div className="login-switch">
          {isSignup ? (
            <span>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsSignup(false)}
                className="login-switch-btn"
              >
                Login
              </button>
            </span>
          ) : (
            <span>
              Don&apos;t have an account?{' '}
              <button
                type="button"
                onClick={() => setIsSignup(true)}
                className="login-switch-btn"
              >
                Sign Up
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;