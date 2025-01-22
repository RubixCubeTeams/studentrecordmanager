import React, { useState } from 'react';
import '../App.css';
import img2 from '../assets/img2 .webp';
import img3 from '../assets/img3.webp';
import img7 from '../assets/logo.webp';
import img6 from '../assets/profile-pic.webp';
const Home = () => {
  const handleViewClick = () => {
    alert('View button clicked!');
  };

  const handleHelpClick = () => {
    alert('Help button clicked!');
  };
  const goToSignup = () => {
    navigate('/signup'); // Redirect to the signup page
  };

  return (
    <>
      <nav>
        <div className="nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" data-aos="zoom-in" data-aos-duration="1000">
            <span>RECORDS</span>
          </div>
          <div
            className="links"
            style={{
              display: 'flex',
              justifyContent: 'space-between', // Distribute the links evenly
              width: '60%', // Adjust the width to allow for spacing
              alignItems: 'center', // Vertically align the links
            }}
          >
            <div className="link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
              <a href="/blogs">
                STUDENT SUPPORT <span style={{ color: 'rgb(247, 188, 38)' }}>▾</span>
              </a>
            </div>
            <div className="link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
              <a href="/blogs">
                Feedback/Grievance <span style={{ color: 'rgb(247, 188, 38)' }}>▾</span>
              </a>
            </div>
            <div className="link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
              <a href="/login">
                Contact <span style={{ color: 'rgb(247, 188, 38)' }}>▾</span>
              </a>
            </div>
            <div className="link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
              <a href="/blogs">
                About <span style={{ color: 'rgb(247, 188, 38)' }}>▾</span>
              </a>
            </div>
          </div>

          <i className="fa-solid fa-bars hamburg"></i>
        </div>
      </nav>

      <div
        className="flex-box-bookings"
        style={{
          background: 'linear-gradient(to right, rgb(247, 219, 188), rgb(222, 133, 37))',
          width: '1400px',
          height: '500px',
          marginLeft: '60px',
          borderRadius: '20px',
          marginTop: '20px',
        }}
      >
        <img src={img2} alt="about-us" style={{ marginLeft: '-100px', width: '500px', height: '400px', background: 'cover' }} />
        <img src={img3} alt="about-us" style={{ marginTop: '100px', marginLeft: '500px', width: '500px', height: '400px', background: 'cover' }} />
        <h1 style={{ marginLeft: '300px', marginTop: '-500px', color: '#fff', fontSize: '35px' }}>STUDENT RECORD&#8192;MANAGEMENT SYSTEMS</h1>
        <img src={img7} alt="about-us" style={{ marginLeft: '10px', width: '100px', height: '100px', background: 'cover', marginTop: '-40px' }} />

        <div
          className="flex-box"
          style={{
            width: '150px',
            height: '150px',
            background: 'rgb(28, 96, 214)',
            marginLeft: '700px',
            marginTop: '80px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={handleViewClick}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            View Result
          </button>
        </div>
        <div
          className="flex-box"
          style={{
            width: '150px',
            height: '150px',
            background: 'rgb(249, 194, 13)',
            marginLeft: '400px',
            marginTop: '-150px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={handleHelpClick}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '25px',
              cursor: 'pointer',
            }}
          >
            Help
          </button>
        </div>
      </div>
      <br />
      <div className="marquee" style={{ background: 'rgb(21, 34, 94)', width: '1400px', height: '40px', marginLeft: '60px', borderRadius: '10px' }}>
        <marquee style={{ color: '#fff' }}>
          <span style={{ color: '#fff', background: 'rgb(249, 13, 21)', borderRadius: '5px' }}>
            <b>
              AICTE sponsored workshop on Advance Computing (in BENGALI) on January 9th and 10th, 2025| 2nd International Conference on Data Analytics and
              Insights(ICDAI-2024) | Pay your semester fees online | Anti-Ragging Committee (2022-2023)| Outlook-ICARE Rankings 2022:Private Engineering
              Colleges| ARIIA 2021- Band-Performer in Private/Self Financed category | Students Credit Card Facility
            </b>
          </span>
        </marquee>
      </div>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.022872998713!2d88.4732012747573!3d22.578247832764312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02753269586b03%3A0xfbb4d0c346a81109!2sTechno%20International%20New%20Town%20(TINT)!5e0!3m2!1sen!2sin!4v1736975256982!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0, marginLeft: '60px', marginTop: '20px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="student-login" style={{ cursor: 'pointer' }}>
          <h1 style={{ color: '#000', fontSize: '50px', float: 'right', marginRight: '250px', marginTop: '-470px' }}>Student Detail</h1>
          <br />
          <div className='flex-box' style={{background:"#fff",width:"300px",height:"370px",float:"right",marginRight:"290px",marginTop:"-380px",borderRadius:"15px"}}>
     <div className='flex-box' style={{background:"rgb(255, 188, 4)",width:"180px",height:"180px",float:"right",marginRight:"60px",marginTop:"10px",borderRadius:"50%"}}>
     <img src={img6} alt="about-us" style={{  marginTop:"05px",marginLeft:"05px",width:"170px",height:"170px",background:"cover",borderRadius:"50%"}} />
      <span>ID :</span>
      <br/>
      
      <span>Roll :</span>
      <br/>
      <span>Name :</span>
      <br/>
      <span>Dept Name :</span>
      <br/>
      <span>Marks :</span>
      <br/>
      <span>Grade :</span>
       </div>
     </div>
  </div>
</section>
<br/>
      <hr
        style={{
          width: "1450px",
          marginLeft: "40px",
          marginTop: "20px",
          height: "1px",
          backgroundColor: "#333",
          color: "#333",
        }}
      />


      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col" style={{ border: '2px solid rgb(255, 255, 255)' }}>
              <div className="footer-elements">
                <h4>FEEDBACK</h4>
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
                      Techno International New Town Block - DG 1/1, Action Area 1 New Town, Kolkata - 700156 Phone: +91-33-23242050/2091 Toll Free No:
                      18002588154 FAX: +91-33-23242090 e-mail: info@tint.edu.in
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

export default Home;
