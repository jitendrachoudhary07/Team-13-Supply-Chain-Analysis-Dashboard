import React from 'react';
import './HeroSection.css';
import { useAuth0 } from "@auth0/auth0-react"
import video from './assets/video.mp4'
import logo from './assets/Logo.jpeg'

const HeroSection = () => {

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="hero-section">
      <video src={video} autoPlay muted loop className="video-bg">
        
        {/* <source src="your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag. */}
      </video>

      <div className="header">
        <div className="logo-container">
          {/* Your Logo */}
          <img src={logo} alt="Logo" className="logo" />
         
        </div>
        <div className="login-container">
          {/* Modern Login Button */}
          
        </div>
      </div>

      <div className="project-heading">
        <h1>Data Visualization Dashboard</h1>
      </div>

      <div className="get-started">
        <button className="btn-donate" onClick={(e) => loginWithRedirect()}>Get Started</button>
        
      </div>
    </div>
  );
};

export default HeroSection;
