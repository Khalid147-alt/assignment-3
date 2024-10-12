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
          <p>I'd love to hear from you! Here's how you can reach me:</p>
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
          <div className="contact-form">
            <h2>Send me a message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
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