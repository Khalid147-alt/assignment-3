import React from 'react';
import Link from 'next/link';  

const Contact: React.FC = () => {
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
        <h1 className="title">Contact Me</h1>
        <div className="contact-content">
          <p>I&apos;d love to hear from you! Here&apos;s how you can reach me:</p> 
          <div className="contact-info">
            <div className="contact-item">
              <h2>Email</h2>
              <p><a href="mailto:khalidunar103@gmail.com">khalidunar103@gmail.com</a></p>
            </div>
            <div className="contact-item">
              <h2>Phone</h2>
              <p>03112223345</p>
            </div>
            <div className="contact-item">
              <h2>Location</h2>
              <p>Shahdadpur, Sindh, Pakistan</p>
              <p>(25 km from my village)</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Khalid Hussain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
