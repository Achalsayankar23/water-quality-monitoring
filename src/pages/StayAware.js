import React from "react";

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
  },

  overlay: {
    minHeight: "100vh",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
  },

  container: {
    maxWidth: "950px",
    margin: "0 auto",
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
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "30px",
    color: "#00eaff",
    textShadow: "0 0 14px #00eaff",
    letterSpacing: "1px",
  },

  section: {
    marginBottom: "28px",
    padding: "20px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    transition: "0.3s ease",
  },

  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#00eaff",
    textShadow: "0 0 8px #00eaff",
  },

  content: {
    fontSize: "17px",
    lineHeight: "1.8",
    color: "#eafcff",
    textAlign: "justify",
  },

  intro: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#ffffff",
    marginBottom: "25px",
    textAlign: "justify",
  },
};

export default function StayAware() {
  const sections = [
    {
      title: "Understanding Water Quality",
      text:
        "Water quality refers to the chemical, physical, biological and radiological characteristics of water. It directly affects human health, agriculture, industries and ecosystem balance.",
    },
    {
      title: "Common Water Pollutants",
      text:
        "Water pollution can arise from industrial discharge, sewage leakage, agricultural runoff, plastics, chemicals, pathogens and heavy metals entering lakes, rivers and groundwater.",
    },
    {
      title: "Impact of Water Pollution",
      text:
        "Polluted water causes disease outbreaks, damages aquatic biodiversity, contaminates drinking sources and creates long-term environmental and economic losses.",
    },
    {
      title: "Protecting Water Quality",
      text:
        "Citizens can conserve water, reduce waste, avoid dumping chemicals, use eco-friendly products and support awareness programs that keep water resources clean.",
    },
    {
      title: "Sustainable Development Goal 6",
      text:
        "SDG 6 focuses on ensuring availability of clean water and sanitation for all by improving access, treatment systems and responsible water management worldwide.",
    },
    {
      title: "Conclusion",
      text:
        "By staying informed and acting responsibly, every person can help build a healthier environment and a sustainable future through better water practices.",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <div style={styles.container}>
          <h1 style={styles.title}>Stay Aware</h1>

          <p style={styles.intro}>
            Water quality is essential for sustaining life, supporting nature
            and creating healthier communities. Awareness and action today
            create a safer tomorrow.
          </p>

          {sections.map((item, index) => (
            <div
              key={index}
              style={styles.section}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(0,255,255,0.20)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <h2 style={styles.sectionTitle}>{item.title}</h2>
              <p style={styles.content}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}