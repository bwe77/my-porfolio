"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">/* Greetings */</h1>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {darkMode ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              )}
            </svg>
          </button>
        </div>
        <nav className="navbar">
          <a href="#about" className="nav-link"><b>About</b></a>
          <a href="#skills" className="nav-link"><b>Skills</b></a>
          <a href="#education" className="nav-link"><b>Education</b></a>
          <a href="#projects" className="nav-link"><b>Projects</b></a>
          <a href="#experience" className="nav-link"><b>Experience</b></a>
          <a href="#contact" className="nav-link"><b>Contact</b></a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <h2 className="section-title">// Brian Wisely</h2>
          <p className="hero-subtitle"><b>3rd Year University Student | Cybersecurity | Software Development</b></p>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <h2 className="section-title">// A little bit about me...</h2>
          <div className="about-content">
            <p className="code-text">&lt;p&gt;I’m a third-year student at the University of Technology Sydney (UTS), completing a double major in Cybersecurity and Software Development. I’m passionate about building secure, efficient, and innovative systems, combining my technical programming skills with a deep understanding of cybersecurity principles. My goal is to pursue a career that bridges both fields — developing robust software solutions while ensuring the highest standards of security and reliability.&lt;/p&gt;</p>
            <div className="placeholder-box"><img src="/profile.jpeg" alt="Profile photo" /></div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <h2 className="section-title">// My Technical Skills</h2>
          
          <div className="skills-category">
            <h3 className="skills-subtitle">Programming Languages</h3>
            <div className="skills-grid">
              <span className="skill-tag"><b>Java</b></span>
              <span className="skill-tag"><b>JavaScript</b></span>
              <span className="skill-tag"><b>C++</b></span>
              <span className="skill-tag"><b>Python</b></span>
              <span className="skill-tag"><b>Swift</b></span>
              <span className="skill-tag"><b>SQL</b></span>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-subtitle">Tools and Frameworks</h3>
            <div className="skills-grid">
              <span className="skill-tag"><b>VMware</b></span>
              <span className="skill-tag"><b>Wireshark</b></span>
              <span className="skill-tag"><b>Scapy</b></span>
              <span className="skill-tag"><b>SpringBoot</b></span>
              <span className="skill-tag"><b>Microsoft365</b></span>
              <span className="skill-tag"><b>Git/Github</b></span>
              <span className="skill-tag"><b>Nmap</b></span>
              <span className="skill-tag"><b>React</b></span>
              <span className="skill-tag"><b>AzureDevOps</b></span>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <h2 className="section-title">// My Education</h2>
          <p className="code-text">&lt;p&gt;about me&lt;/p&gt;</p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2 className="section-title">// My Projects</h2>
          
          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-info">
              <h3 className="project-title">Online Booking System</h3>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-info">
              <h3 className="project-title">Real Time Network Traffic Analyser</h3>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-info">
              <h3 className="project-title">Network Design and Simulation Case Study</h3>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image"></div>
            <div className="project-info">
              <h3 className="project-title">Macros Tracker Mobile Application</h3>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <h2 className="section-title">// My Experience</h2>
          <p className="code-text">&lt; My Hyde - Cafe All Rounder&gt;</p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2 className="section-title">// My Contacts</h2>
          <div className="contact-links">
            <a href="#" className="contact-link">Github Link</a>
            <a href="#" className="contact-link">LinkedIn Link</a>
            <a href="mailto:brianwisely21@gmail.com" className="contact-link">brianwisely21@gmail.com</a>
            <a href="tel:0456807733" className="contact-link">0466807733</a>
          </div>
        </section>
      </main>
    </div>
  );
}