import { Link, NavLink } from "react-router-dom";

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 30px",
    background: "rgba(0,0,0,0.45)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 0 20px rgba(0,255,255,0.12)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontFamily: "Segoe UI, sans-serif",
  },

  siteTitle: {
    textDecoration: "none",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#00eaff",
    letterSpacing: "1px",
    textShadow: "0 0 12px #00eaff",
  },

  linkList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "14px",
    flexWrap: "wrap",
  },

  link: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "bold",
    padding: "10px 16px",
    borderRadius: "10px",
    transition: "0.3s ease",
  },

  activeLink: {
    background: "linear-gradient(90deg,#00eaff,#007bff)",
    color: "#fff",
    boxShadow: "0 0 15px rgba(0,255,255,0.25)",
  },
};

export default function Navbar() {
  const navStyle = ({ isActive }) =>
    isActive
      ? { ...styles.link, ...styles.activeLink }
      : styles.link;

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.siteTitle}>
        WQM
      </Link>

      <ul style={styles.linkList}>
        <li>
          <NavLink to="/" style={navStyle}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/Complaint" style={navStyle}>
            Raise Complaint
          </NavLink>
        </li>

        <li>
          <NavLink to="/StayAware" style={navStyle}>
            Stay Aware
          </NavLink>
        </li>

        <li>
          <NavLink to="/About" style={navStyle}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/Login" style={navStyle}>
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}