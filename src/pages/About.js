import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';

const styles = {
  page: {
    minHeight: '100vh',
    padding: '40px 20px',
    background: `
      linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,40,80,0.75)),
      url("https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1600&q=80")
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'Segoe UI, sans-serif',
  },

  waterOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'linear-gradient(120deg, rgba(0,255,255,0.08), rgba(0,120,255,0.08))',
    backdropFilter: 'blur(4px)',
    zIndex: 1,
  },

  container: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px',
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 0 30px rgba(0,255,255,0.15)',
    color: '#fff',
  },

  title: {
    textAlign: 'center',
    fontSize: '42px',
    fontWeight: 'bold',
    marginBottom: '25px',
    color: '#00eaff',
    textShadow: '0 0 10px #00eaff',
    letterSpacing: '2px',
  },

  subTitle: {
    textAlign: 'center',
    fontSize: '28px',
    marginTop: '40px',
    marginBottom: '20px',
    color: '#00eaff',
    textShadow: '0 0 10px #00eaff',
  },

  content: {
    fontSize: '18px',
    lineHeight: '1.9',
    color: '#e6faff',
    textAlign: 'justify',
  },

  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
    gap: '20px',
    marginTop: '30px',
  },

  card: {
    padding: '25px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.12)',
    textAlign: 'center',
    transition: '0.3s ease',
    cursor: 'pointer',
  },

  icon: {
    fontSize: '34px',
    color: '#00eaff',
    marginBottom: '15px',
  },

  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },

  cardText: {
    fontSize: '15px',
    color: '#d9faff',
  },

  footer: {
    textAlign: 'center',
    marginTop: '35px',
    color: '#9fefff',
    fontSize: '16px',
  },
};

const features = [
  {
    icon: 'fas fa-tint',
    title: 'Pure Water Vision',
    text: 'Ensuring safe and clean drinking water for every citizen.',
  },
  {
    icon: 'fas fa-exclamation-circle',
    title: 'Complaint System',
    text: 'Raise water issues instantly and track them efficiently.',
  },
  {
    icon: 'fas fa-globe',
    title: 'Sustainable Future',
    text: 'Supporting SDG 6 for global water sanitation goals.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Smart Monitoring',
    text: 'Protecting resources with digital water management.',
  },
];

function About() {
  return (
    <div style={styles.page}>
      <div style={styles.waterOverlay}></div>

      <div style={styles.container}>
        <h1 style={styles.title}>WATER QUALITY MONITORING</h1>

        <div style={styles.content}>
          <p>
            Welcome to our futuristic Water Quality Monitoring platform.
            We are committed to protecting water resources and building a
            smarter environment through technology.
          </p>

          <p>
            Our system helps citizens report water problems, spread awareness,
            and support sustainable development with real-time complaint
            management.
          </p>

          <p>
            Together, we can create a cleaner, healthier and smarter tomorrow.
          </p>
        </div>

        <h2 style={styles.subTitle}>Core Features</h2>

        <div style={styles.featuresGrid}>
          {features.map((item, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow =
                  '0 0 20px rgba(0,255,255,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <i className={item.icon} style={styles.icon}></i>
              <div style={styles.cardTitle}>{item.title}</div>
              <div style={styles.cardText}>{item.text}</div>
            </div>
          ))}
        </div>

        <div style={styles.footer}>
          Designed for Smart Cities • Powered by Innovation
        </div>
      </div>
    </div>
  );
}

export default About;