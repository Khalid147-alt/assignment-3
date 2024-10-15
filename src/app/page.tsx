"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';  
import Image from 'next/image';
import myPic from '../app/my-pic.jpg';

const MainPage: React.FC = () => {
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>
      <main className="main">
        <div className="hero">
          <Image
            src={myPic}
            alt="Khalid Hussain"
            width={200}
            height={200}
            className="profile-image"
          />
          <h1 className={`animated-name ${showName ? 'visible' : 'hidden'}`}>
            Khalid Hussain
          </h1>
          <p className="subtitle">Frontend Developer</p>
        </div>
        <section className="portfolio-section">
          <h2 className="section-title">My Portfolio</h2>
          <div className="skills">
            <div className="skill-item">Next.js</div>
            <div className="skill-item">React</div>
            <div className="skill-item">TypeScript</div>
            <div className="skill-item">Web 3.0</div>
            <div className="skill-item">AI</div>
          </div>
          <div className="projects">
            <div className="project-card">
              <h3>Neuros.AI</h3>
              <p>AI-based services provider</p>
            </div>
            <div className="project-card">
              <h3>Alpha Trades</h3>
              <p>A shipping company</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Khalid Hussain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
