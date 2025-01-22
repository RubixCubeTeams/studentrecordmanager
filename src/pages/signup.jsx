import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import img1 from '../assets/google.webp';

const Signup = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (userType === 'Admin') {
      navigate('/admin'); // Redirect to Admin page
    } else if (userType === 'Student') {
      navigate('/home'); // Redirect to Home page
    } else {
      alert('Please select a user type before logging in.');
    }
  };

  return (
    <>
      <nav>
        <div className="nav-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '0 20px' }}>
          <div className="logo" data-aos="zoom-in" data-aos-duration="1000">
            <span>STUDENT RECORD MANAGEMENT SYSTEM</span>
          </div>
          <i className="fa-solid fa-bars hamburg"></i>
        </div>
      </nav>
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form onSubmit={handleLogin}>
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" required />
              </div>
              <div className="field input-field">
                <input type="password" placeholder="Password" className="password" required />
                <i className="bx bx-hide eye-icon"></i>
              </div>
              <br />
              <select
                name="user-type"
                value={userType}
                onChange={handleUserTypeChange}
                style={{
                  padding: '0 15px',
                  width: '100%',
                  height: '50px',
                  borderRadius: '5px',
                  border: 'none',
                  color: 'rgb(124, 120, 120)',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                <option value="">--Please choose an option--</option>
                <option value="Admin">Admin</option>
                <option value="Student">Student</option>
              </select>
              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>
              <div className="field button-field">
                <button type="submit">Login</button>
              </div>
            </form>
            <div className="form-link">
              <span>
                Don't have an account? <a href="./signup.jsx" className="link signup-link">Signup</a>
              </span>
            </div>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <a href="#" className="field google" style={{ background: '#fff' }}>
              <img src={img1} alt="about-us" style={{ width: '120px', marginLeft: '-135px' }} />
              <span style={{ marginLeft: '40px' }}>Login with Google</span>
            </a>
          </div>
        </div>
      </section>
      <br />
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col" style={{ border: '2px solid rgb(255, 255, 255)' }}>
              <div className="footer-elements">
                <h4>COLLEGE FEEDBACK</h4>
                <ul>
                  <li>
                    <a href="#">Feedback Form</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col" style={{ border: '2px solid rgb(255, 255, 255)', gap: '2rem' }}>
              <div className="footer-elements">
                <h4>QUICK LINKS</h4>
                <ul>
                  <li>
                    <a href="#">University Website wbut.ac.in</a>
                  </li>
                  <li>
                    <a href="#">University Website makautexam.net</a>
                  </li>
                  <li>
                    <a href="#">CSEMOODLE: csemoodle.tint.edu.in</a>
                  </li>
                  <li>
                    <a href="#">Grievance Redressal Portal</a>
                  </li>
                  <li>
                    <a href="#">Official Facebook Page</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col" style={{ border: '2px solid rgb(255, 255, 255)' }}>
              <div className="footer-elements">
                <h4>CONTACT</h4>
                <ul>
                  <li>
                    <a href="#">
                      Techno International New Town Block - DG 1/1, Action Area 1 New Town, Kolkata - 700156 Phone:
                      +91-33-23242050/2091 Toll Free No: 18002588154 FAX: +91-33-23242090 e-mail: info@tint.edu.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col" style={{ border: '2px solid rgb(255, 255, 255)' }}>
              <div className="footer-elements">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Signup;
