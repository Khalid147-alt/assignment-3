import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
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
        <h1 className="title">About Me</h1>
        <div className="about-content">
          <p>
            Hey there! I'm Khalid Hussain, a passionate frontend developer in the making. I'm currently enrolled in the Governor's Initiative for AI, Web 3.0, and Metaverse, where I'm diving deep into the world of Next.js and modern web technologies.
          </p>
          <p>
            My journey in tech is driven by a fascination with creating seamless, user-friendly interfaces that bridge the gap between complex systems and everyday users. I'm particularly excited about the potential of Web 3.0 and how it's reshaping the digital landscape.
          </p>
          <p>
            When I'm not coding, you can find me exploring the latest trends in UI/UX design, contributing to open-source projects, or sharing my learning journey with fellow developers in online communities.
          </p>
          <h2>Skills & Expertise</h2>
          <ul className="skills-list">
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Responsive Web Design</li>
            <li>Version Control (Git)</li>
            <li>Web Accessibility</li>
          </ul>
          <p>
            I'm always eager to learn and grow. Feel free to reach out if you'd like to collaborate on a project or just chat about the exciting world of web development!
          </p>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Khalid Hussain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;