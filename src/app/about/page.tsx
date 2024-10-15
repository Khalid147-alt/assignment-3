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
            Hey there! I&apos;m Khalid Hussain, a passionate frontend developer in the making. I&apos;m currently enrolled in the Governor&apos;s Initiative for AI, Web 3.0, and Metaverse, where I&apos;m diving deep into the world of Next.js and modern web technologies.
          </p>
          <p>
            My journey in tech is driven by a fascination with creating seamless, user-friendly interfaces that bridge the gap between complex systems and everyday users. I&apos;m particularly excited about the potential of Web 3.0 and how it&apos;s reshaping the digital landscape.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring the latest trends in UI/UX design, contributing to open-source projects, or sharing my learning journey with fellow developers in online communities.
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

