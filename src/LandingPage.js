import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDescription: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('New React App Service Inquiry');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Project Description: ${formData.projectDescription}
    `);
    window.location.href = `mailto:turingssolutions@gmail.com?subject=${subject}&body=${body}`;
    setIsFormOpen(false);
  };

  return (
    <div className="landing-page">
      <header>
        <h1>Create Your Own React App</h1>
        <p>Professional, Custom-Built React Applications</p>
        <button onClick={() => setIsFormOpen(true)}>
          Get Started for Just $299
        </button>
      </header>

      <main>
        <div className="card">
          <div className="icon">💻</div>
          <h2>Custom Code</h2>
          <p>Tailored React applications built to your specifications</p>
        </div>
        <div className="card">
          <div className="icon">⚡</div>
          <h2>Fast Turnaround</h2>
          <p>Get your app up and running in no time</p>
        </div>
        <div className="card">
          <div className="icon">🚀</div>
          <h2>Launch Ready</h2>
          <p>Fully tested and optimized for immediate deployment</p>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Your React App Service. All rights reserved.</p>
      </footer>

      {isFormOpen && (
        <div className="overlay">
          <form onSubmit={handleSubmit}>
            <h2>Get Started</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="projectDescription"
              placeholder="Briefly describe your project"
              value={formData.projectDescription}
              onChange={handleInputChange}
              required
            />
            <div className="form-buttons">
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setIsFormOpen(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
