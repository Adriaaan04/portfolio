import React, { useEffect } from 'react';
import './Home.css'; 
import profilePic from './assets/profile-pic.JPG'; 
import Typed from 'typed.js';

function Home() {
  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Software Developer"],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    };
    const typed = new Typed('.typing', options);
    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home">
      <header className="home-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Hello, I'm Mart Adrian Reyes</h1>
        <p>
          I'm a <span className="typing"></span>
        </p>
        <label>Welcome to my portfolio!</label>
        {/* <a href="/projects" className="button">See My Projects</a> */}
      </header>
    </div>
  );
}

export default Home;
