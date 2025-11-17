"use client";

import { useState, useEffect } from "react";
  
export default function BookingSystem(){
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
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
                <div className="section-title">
                    <h1>Project Overview</h1>
                </div>
                <p>A full-stack web application built with Java Spring Boot that enables users to seamlessly book badminton courts at various venues. The application features secure user authentication, real-time court availability checking, integrated payment processing, and comprehensive booking management capabilities.</p>

                <div className="skills-category">
                    <h1 className="section-title">Technologies Used</h1>
                    <div className="skills-grid">
                        <span className="skill-tag"><b>Java</b></span>
                        <span className="skill-tag"><b>Spring Boot</b></span>
                        <span className="skill-tag"><b>Spring Security</b></span>
                        <span className="skill-tag"><b>SQL Server</b></span>
                        <span className="skill-tag"><b>Thymeleaf</b></span>
                        <span className="skill-tag"><b>Azure DevOps</b></span>   
                    </div>
                </div>

                <div className="section-title">
                    <h1>Project Features</h1>
                </div>
                <ul className="project-features">
                    <li><b>User Authentication:</b> Secure login and registration system with email verification managed by Spring Security, ensuring only authenticated users can access booking features.</li>
                    <li><b>Court Booking:</b> Users can view available courts across multiple venues and book them for specific time slots with real-time availability updates.</li>
                    <li><b>Payment Processing:</b> Integrated payment system supporting credit card transactions and credit balance usage with transaction history tracking.</li>
                    <li><b>Booking Management:</b> Users can view, modify, or cancel their bookings through an intuitive interface with automatic refund processing for cancellations.</li>
                    <li><b>Admin Dashboard:</b> Comprehensive admin panel for managing court availability, viewing all bookings, and handling user accounts.</li>
                    <li><b>Email Notifications:</b> Automated email confirmations for account activation and booking confirmations using JavaMailSender.</li>
                </ul>

                <div className="section-title">
                    <h1>My Contributions</h1>
                </div>
                <div className="contribution">
                    <div className="contribution-item">
                        <h3>User Authentication & Security</h3>
                        <img src="/authentication-page.jpeg" alt="Authentication Page" className="screenshot-image"/>
                        <p>Implemented a comprehensive authentication system using Spring Security with BCrypt password encryption. Developed user registration with email verification using activation tokens and JavaMailSender integration. Created role-based access control (RBAC) distinguishing between regular users and administrators, with custom security configurations to protect sensitive endpoints. Implemented session management and CSRF protection for enhanced security.</p>
                    </div>
                    <div className="contribution-item">
                        <h3>Responsive Main Page & UI</h3>
                        <img src="/main_page.jpeg" alt="Main Page" className="screenshot-image"/>
                        <p>Designed and developed a modern, responsive landing page using Thymeleaf templates and custom CSS. Created an intuitive navigation system with venue cards displaying real-time availability. Implemented a clean user interface with consistent styling across all pages, ensuring excellent user experience on both desktop and mobile devices. Integrated profile management features with easy access to user bookings and payment history.</p>
                    </div>
                    <div className="contribution-item">
                        <h3>Payment Processing System</h3>
                        <img src="/payment-page.jpeg" alt="Payment Page" className="screenshot-image"/>
                        <p>Developed a comprehensive payment processing system supporting multiple payment methods including credit card transactions and credit balance usage. Implemented payment validation, transaction tracking, and automatic status updates. Created a credit balance system allowing users to apply existing credits toward new bookings. Built payment history tracking with detailed transaction records and integrated email confirmation for successful payments.</p>
                    </div>
                    <div className="contribution-item">
                        <h3>Booking Management & Modification</h3>
                        <img src="/booking-management.jpeg" alt="Booking Management Page" className="screenshot-image"/>
                        <p>Built a full-featured booking management system allowing users to view their booking history, modify existing bookings, and cancel reservations with automatic refunds. Implemented business logic to prevent modifications within 24 hours of booking time and validate date/time conflicts. Created an efficient availability checking system to prevent double-bookings using database queries and service layer validation. Developed the booking modification interface with real-time availability updates and integrated refund processing that converts cancelled booking amounts into user credit balance.</p>
                    </div>
                </div>

                <div className="section-title">
                    <h1>Technical Highlights</h1>
                </div>
                <ul className="project-features">
                    <li><b>Backend Architecture:</b> RESTful service architecture with clear separation of concerns using Controllers, Services, and DAOs (Data Access Objects).</li>
                    <li><b>Database Design:</b> Well-structured relational database with proper entity relationships, foreign keys, and transaction management.</li>
                    <li><b>Security Implementation:</b> Spring Security configuration with custom UserDetailsService, password encryption, and CSRF protection.</li>
                    <li><b>Transaction Management:</b> Used @Transactional annotations to ensure data consistency across booking operations and payment processing.</li>
                    <li><b>Email Integration:</b> JavaMailSender configuration for automated account activation and booking confirmation emails.</li>
                    <li><b>Version Control:</b> Managed project development using Azure DevOps with Git for version control and team collaboration.</li>
                </ul>

                <div className="section-title">
                    <h1>Challenges & Solutions</h1>
                </div>
                <ul className="project-features">
                    <li><b>Preventing Double Bookings:</b> Implemented database-level constraints and service-layer validation to ensure no two users can book the same time slot simultaneously.</li>
                    <li><b>Payment Processing:</b> Designed a flexible payment system that handles both credit card payments and credit balance usage with proper transaction tracking.</li>
                    <li><b>Booking Modifications:</b> Created business logic to handle booking edits while checking availability and respecting the 24-hour modification window.</li>
                    <li><b>Email Delivery:</b> Configured SMTP settings and implemented error handling for email notifications to ensure reliable delivery of activation links and confirmations.</li>
                </ul>

                <div className="button-group">
                    <span><a href="/" className="btn btn-secondary">← Back to Portfolio</a></span>
                    <span><a href="https://github.com/nephm/Online-Booking-App" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on GitHub</a></span>
                </div>
            </main>
        </div>
    );
}