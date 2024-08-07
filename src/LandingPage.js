import React from 'react';

const LandingPage = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #3498db, #8e44ad)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center',
      padding: '4rem 1rem',
    },
    h1: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    p: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
    },
    button: {
      backgroundColor: '#f1c40f',
      color: 'black',
      border: 'none',
      padding: '1rem 2rem',
      fontSize: '1.2rem',
      cursor: 'pointer',
      borderRadius: '5px',
    },
    main: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: '2rem',
    },
    card: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '2rem',
      margin: '1rem',
      borderRadius: '10px',
      textAlign: 'center',
      flexBasis: '30%',
      minWidth: '250px',
    },
    icon: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    footer: {
      textAlign: 'center',
      padding: '2rem',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.h1}>Create Your Own React App</h1>
        <p style={styles.p}>Professional, Custom-Built React Applications</p>
        <button style={styles.button}>Get Started for Just $299</button>
      </header>

      <main style={styles.main}>
        <div style={styles.card}>
          <div style={styles.icon}>💻</div>
          <h2>Custom Code</h2>
          <p>Tailored React applications built to your specifications</p>
        </div>
        <div style={styles.card}>
          <div style={styles.icon}>⚡</div>
          <h2>Fast Turnaround</h2>
          <p>Get your app up and running in no time</p>
        </div>
        <div style={styles.card}>
          <div style={styles.icon}>🚀</div>
          <h2>Launch Ready</h2>
          <p>Fully tested and optimized for immediate deployment</p>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 Your React App Service. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
