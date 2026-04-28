import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const styles = {
  page: {
    minHeight: "100vh",
    padding: "35px",
    background:
      "linear-gradient(135deg,#02131f,#05263a,#0b4f6c,#02131f)",
    backgroundSize: "400% 400%",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },

  title: {
    textAlign: "center",
    fontSize: "42px",
    fontWeight: "bold",
    color: "#7df9ff",
    marginBottom: "10px",
    textShadow: "0 0 18px rgba(0,255,255,0.9)",
  },

  subtitle: {
    textAlign: "center",
    color: "#d9faff",
    marginBottom: "30px",
    fontSize: "16px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  statCard: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "22px",
    padding: "24px",
    textAlign: "center",
    backdropFilter: "blur(16px)",
    boxShadow: "0 0 22px rgba(0,255,255,0.12)",
  },

  number: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#7df9ff",
    textShadow: "0 0 10px rgba(0,255,255,0.6)",
  },

  label: {
    marginTop: "10px",
    fontSize: "15px",
    color: "#ffffff",
  },

  middleSection: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
    gap: "25px",
    marginBottom: "30px",
  },

  chartBox: {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "24px",
    padding: "25px",
    backdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 0 22px rgba(0,255,255,0.12)",
  },

  chartTitle: {
    textAlign: "center",
    fontSize: "22px",
    marginBottom: "20px",
    color: "#7df9ff",
    fontWeight: "bold",
  },

  trackerBox: {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "24px",
    padding: "25px",
    backdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 0 22px rgba(0,255,255,0.12)",
  },

  trackerTitle: {
    fontSize: "22px",
    marginBottom: "18px",
    color: "#7df9ff",
    fontWeight: "bold",
    textAlign: "center",
  },

  complaintRow: {
    background: "rgba(255,255,255,0.06)",
    padding: "14px",
    borderRadius: "14px",
    marginBottom: "12px",
    borderLeft: "4px solid #7df9ff",
  },

  rowName: {
    fontWeight: "bold",
    marginBottom: "5px",
  },

  status: {
    marginTop: "5px",
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    marginTop: "20px",
    color: "#d7fbff",
    fontSize: "14px",
  },
};

function Home() {
  const [complaints, setComplaints] = useState([]);
  const [stats, setStats] = useState({
    solved: 0,
    rejected: 0,
    pending: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8081/api/complaints/getAll"
      );

      setComplaints(res.data);

      let solved = 0;
      let rejected = 0;
      let pending = 0;

      res.data.forEach((item) => {
        if (item.status === "Solved") solved++;
        else if (item.status === "Rejected") rejected++;
        else pending++;
      });

      setStats({ solved, rejected, pending });
    } catch (error) {
      console.log(error);
    }
  };

  const chartData = {
    labels: ["Solved", "Rejected", "Pending"],
    datasets: [
      {
        data: [stats.solved, stats.rejected, stats.pending],
        backgroundColor: [
          "#00ff99",
          "#ff3d71",
          "#ffd93d",
        ],
        borderColor: "#03111f",
        borderWidth: 3,
        hoverOffset: 18,
      },
    ],
  };

  const getStatusColor = (status) => {
    if (status === "Solved") return "#00ff99";
    if (status === "Rejected") return "#ff3d71";
    return "#ffd93d";
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>
        Water Quality Monitoring 
      </h1>

      <p style={styles.subtitle}>
        Real-Time Complaint Monitoring & Resolution Center
      </p>

      {/* Stats */}
      <div style={styles.grid}>
        <div style={styles.statCard}>
          <div style={styles.number}>
            {complaints.length}
          </div>
          <div style={styles.label}>
            Total Complaints
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.number}>
            {stats.solved}
          </div>
          <div style={styles.label}>
            Solved Issues
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.number}>
            {stats.pending}
          </div>
          <div style={styles.label}>
            Pending Issues
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.number}>
            {stats.rejected}
          </div>
          <div style={styles.label}>
            Rejected Cases
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div style={styles.middleSection}>
        {/* Premium Pie Chart */}
        <div style={styles.chartBox}>
          <div style={styles.chartTitle}>
            Resolution Analytics
          </div>

          <div
            style={{
              width: "280px",
              height: "280px",
              margin: "0 auto",
              padding: "15px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,255,255,0.15), rgba(0,0,0,0.1))",
              boxShadow:
                "0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.25)",
            }}
          >
            <Pie
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                cutout: "35%",
                plugins: {
                  legend: {
                    labels: {
                      color: "#ffffff",
                      font: {
                        size: 14,
                        weight: "bold",
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Tracker */}
        <div style={styles.trackerBox}>
          <div style={styles.trackerTitle}>
            Live Complaint Tracker
          </div>

          {complaints.length === 0 ? (
            <p>No complaints found</p>
          ) : (
            complaints.map((item) => (
              <div
                key={item.id}
                style={styles.complaintRow}
              >
                <div style={styles.rowName}>
                  {item.name}
                </div>

                <div>
                  {item.complaintType}
                </div>

                <div
                  style={{
                    ...styles.status,
                    color: getStatusColor(
                      item.status
                    ),
                  }}
                >
                  {item.status}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div style={styles.footer}>
        Smart Water Quality Monitoring System
      </div>
    </div>
  );
}

export default Home;