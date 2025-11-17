"use client";

import { useState, useEffect } from "react";
  
export default function BookingSystem(){
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

    return(
        <div className="page-container">
            <header className="header">
                <div className="header-content">
                <h1 className="header-title">/* Badminton Court Booking Application */</h1>
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
            </header>
            <main className="main-content">
                {/* <h1 className="section-title">// Online Booking System</h1> */}
                
                <div className="section-title">
                    <h1>Project Overview</h1>
                </div>
                <p>A full-stake web application that uses Java Springboot</p>

                <div className="skills-category">
                    <h1 className="section-title">Programming Languages</h1>
                    <div className="skills-grid">
                        <span className="skill-tag"><b>Java</b></span>
                        <span className="skill-tag"><b>SpringBoot</b></span>
                        <span className="skill-tag"><b>SQLServer</b></span>
                        <span className="skill-tag"><b>AzureDevOps</b></span>   
                    </div>
                </div>

                <div className="section-title">
                    <h1>Project Features</h1>
                </div>
                <ul className="project-features">
                    <li>User Authentication: Secure login and registration system for users managed by Spring Security.</li>
                    <li>Court Booking: Users can view available courts and book them for specific time slots.</li>
                    <li>Payment Process: Users can pay for their bookings with a simple credit card process or credits</li>
                    <li>Booking Management: Users can view, modify, or cancel their bookings through a user-friendly interface.</li>
                    <li>Admin Dashboard: Admins can manage court availability, view bookings, and handle user accounts.</li>
                </ul>

                <div className="section-title">
                    <h1>My Contributions</h1>
                </div>
                <div className="contribution">
                    <div className="contribution-item">
                        <h3>User Authentication</h3>
                        <img src="/booking-system/authentication-page.png" alt="authentication Page" className="screenshot-image"/>
                        <p></p>
                    </div>
                    <div className="contribution-item">
                        <h3>Responsive Main Page</h3>
                        <img src="/booking-system/main_page.png" alt="Main Page" className="screenshot-image"/>
                        <p>bw</p>
                    </div>
                    <div className="contribution-item">
                        <h3>Payment Processing</h3>
                        <img src="/booking-system/payment-page.png" alt="Payment Page" className="screenshot-image"/>
                        <p></p>
                    </div>
                    <div className="contribution-item">
                        <h3>Booking Management</h3>
                        <img src="/booking-system/booking-management-page.png" alt="Booking Management Page" className="screenshot-image"/>
                        <p></p>
                    </div>
                </div>
            </main>
        </div>
    );
}