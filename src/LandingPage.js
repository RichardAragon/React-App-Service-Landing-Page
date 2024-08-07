import React, { useState } from 'react';

const LandingPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDescription: '',
  });

  const styles = {
    // ... (previous styles remain unchanged)
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '10px',
      width: '80%',
      maxWidth: '500px',
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      marginBottom: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    textarea: {
      width: '100%',
      padding: '0.5rem',
      marginBottom: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
      minHeight: '100px',
    },
    formButton: {
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      cursor: 'pointer',
      marginRight: '1rem',
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
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
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.h1}>Create Your Own React App</h1>
        <p style={styles.p}>Professional, Custom-Built React Applications</p>
        <button style={styles.button} onClick={() => setIsFormOpen(true)}>
          Get Started for Just $299
        </button>
      </header>

      <main style={styles.main}>
        {/* ... (card components remain unchanged) */}
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 Your React App Service. All rights reserved.</p>
      </footer>

      {isFormOpen && (
        <div style={styles.overlay}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <h2 style={{color: 'black', marginBottom: '1rem'}}>Get Started</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              style={styles.input}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              style={styles.input}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="projectDescription"
              placeholder="Briefly describe your project"
              style={styles.textarea}
              value={formData.projectDescription}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" style={styles.formButton}>
              Submit
            </button>
            <button type="button" style={styles.formButton} onClick={() => setIsFormOpen(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
