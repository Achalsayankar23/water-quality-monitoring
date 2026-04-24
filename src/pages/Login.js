import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px 20px",
    backgroundImage:
      'linear-gradient(135deg, rgba(0,0,0,0.82), rgba(0,40,80,0.82)), url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    fontFamily: "Segoe UI, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    minHeight: "100vh",
  },

  container: {
    width: "100%",
    maxWidth: "500px",
    padding: "35px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    boxShadow: "0 0 35px rgba(0,255,255,0.22)",
    color: "#fff",
  },

  title: {
    fontSize: "34px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "30px",
    color: "#00eaff",
    textShadow: "0 0 12px #00eaff",
  },

  formGroup: {
    marginBottom: "20px",
  },

  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#eafcff",
  },

  input: {
    width: "100%",
    padding: "12px",
    fontSize: "15px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.20)",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    outline: "none",
    boxSizing: "border-box",
  },

  button: {
    width: "100%",
    padding: "14px",
    marginTop: "10px",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    cursor: "pointer",
    background: "linear-gradient(90deg,#00eaff,#007bff)",
    boxShadow: "0 0 18px rgba(0,255,255,0.28)",
    transition: "0.3s ease",
  },

  errorMessage: {
    color: "#ff6b6b",
    textAlign: "center",
    marginTop: "15px",
    fontWeight: "bold",
  },

  hint: {
    textAlign: "center",
    marginBottom: "18px",
    color: "#d9fcff",
    fontSize: "14px",
  },
};

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === "admin" &&
      formData.password === "admin123"
    ) {
      navigate("/Admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <div style={styles.container}>
          <h1 style={styles.title}>Administrator Login</h1>

          <p style={styles.hint}>
            Secure access to complaint dashboard
          </p>

          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Username</label>

              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <button
              type="submit"
              style={styles.button}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              Click Here To Login
            </button>

            {error && (
              <p style={styles.errorMessage}>{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;