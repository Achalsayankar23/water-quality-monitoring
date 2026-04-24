import axios from 'axios';
import React, { useState } from 'react';

const styles = {
  page: {
    minHeight: '100vh',
    padding: '40px 20px',
    background: `
      linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,40,80,0.75)),
      url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80")
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    fontFamily: 'Segoe UI, sans-serif',
  },

  container: {
    maxWidth: '550px',
    margin: '0 auto',
    padding: '35px',
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    backdropFilter: 'blur(14px)',
    boxShadow: '0 0 25px rgba(0,255,255,0.15)',
    color: '#fff',
  },

  title: {
    textAlign: 'center',
    fontSize: '34px',
    fontWeight: 'bold',
    marginBottom: '25px',
    color: '#00eaff',
    textShadow: '0 0 10px #00eaff',
  },

  formGroup: {
    marginBottom: '18px',
  },

  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#dffcff',
  },

  input: {
    width: '100%',
    padding: '12px',
    fontSize: '15px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'rgba(255,255,255,0.08)',
    color: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
    backdropFilter: 'blur(10px)',
  },

  select: {
    width: '100%',
    padding: '12px',
    fontSize: '15px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'rgba(255,255,255,0.08)',
    color: '#fff',
    outline: 'none',
    boxSizing: 'border-box',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    backgroundImage:
      'url("data:image/svg+xml;utf8,<svg fill=\'white\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '18px',
  },

  option: {
    backgroundColor: '#06263d',
    color: '#fff',
  },

  button: {
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(90deg,#00eaff,#007bff)',
    color: '#fff',
    cursor: 'pointer',
    marginTop: '10px',
    transition: '0.3s',
    boxShadow: '0 0 15px rgba(0,255,255,0.35)',
  },

  success: {
    color: '#00ff99',
    textAlign: 'center',
    marginBottom: '15px',
    fontWeight: 'bold',
  },

  error: {
    color: '#ff7070',
    textAlign: 'center',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
};

function Complaint() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    zone: '',
    complaintType: '',
    phoneNumber: '',
    emailAddress: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    if (
      !formData.name ||
      !formData.address ||
      !formData.zone ||
      !formData.complaintType
    ) {
      setError('Please fill all required fields.');
      return;
    }

    try {
      await axios.post(
        'http://localhost:8081/api/complaints/add',
        formData
      );

      setSuccess('Complaint submitted successfully!');

      setFormData({
        name: '',
        address: '',
        zone: '',
        complaintType: '',
        phoneNumber: '',
        emailAddress: '',
      });
    } catch (err) {
      setError('Error submitting complaint.');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Submit Complaint</h1>

        {error && <div style={styles.error}>{error}</div>}
        {success && <div style={styles.success}>{success}</div>}

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Zone</label>
            <select
              name="zone"
              value={formData.zone}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="" style={styles.option}>Select Zone</option>
              <option value="North" style={styles.option}>North</option>
              <option value="South" style={styles.option}>South</option>
              <option value="East" style={styles.option}>East</option>
              <option value="West" style={styles.option}>West</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Complaint Type</label>
            <select
              name="complaintType"
              value={formData.complaintType}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="" style={styles.option}>Select Complaint Type</option>
              <option value="Water Leakage" style={styles.option}>Water Leakage</option>
              <option value="Water Contamination" style={styles.option}>Water Contamination</option>
              <option value="Low Water Pressure" style={styles.option}>Low Water Pressure</option>
              <option value="No Water Supply" style={styles.option}>No Water Supply</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) =>
              (e.target.style.transform = 'scale(1.03)')
            }
            onMouseLeave={(e) =>
              (e.target.style.transform = 'scale(1)')
            }
          >
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}

export default Complaint;