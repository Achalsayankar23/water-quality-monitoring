import axios from "axios";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React, { useCallback, useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const styles = {
  page: {
    minHeight: "100vh",
    padding: "30px",
    background:
      "linear-gradient(135deg, #03111f, #06283d, #0a4f6b, #03111f)",
    backgroundSize: "400% 400%",
    color: "#fff",
  },

  title: {
    textAlign: "center",
    fontSize: "38px",
    fontWeight: "bold",
    marginBottom: "25px",
    color: "#6ee7ff",
    textShadow: "0 0 15px rgba(110,231,255,0.8)",
  },

  layout: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "25px",
  },

  leftPanel: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "20px",
    padding: "25px",
    backdropFilter: "blur(18px)",
  },

  rightPanel: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "20px",
    padding: "25px",
    backdropFilter: "blur(18px)",
    height: "fit-content",
  },

  card: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "18px",
    padding: "20px",
    marginBottom: "18px",
  },

  complaintType: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#6ee7ff",
    marginBottom: "10px",
  },

  text: {
    margin: "6px 0",
    color: "#e8faff",
  },

  status: {
    marginTop: "12px",
    fontWeight: "bold",
  },

  buttonRow: {
    display: "flex",
    gap: "12px",
    marginTop: "15px",
  },

  btn: {
    flex: 1,
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  solvedBtn: {
    background: "linear-gradient(90deg,#00c853,#00e676)",
    color: "#fff",
  },

  rejectBtn: {
    background: "linear-gradient(90deg,#ff1744,#ff5252)",
    color: "#fff",
  },

  statCard: {
    background: "rgba(255,255,255,0.06)",
    padding: "15px",
    borderRadius: "14px",
    marginBottom: "12px",
    textAlign: "center",
  },

  statNumber: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#6ee7ff",
  },

  statLabel: {
    marginTop: "5px",
  },

  empty: {
    textAlign: "center",
    padding: "30px",
  },
};

function Admin() {
  const [complaints, setComplaints] = useState([]);
  const [statusCounts, setStatusCounts] = useState({
    solved: 0,
    rejected: 0,
    pending: 0,
  });

  const updateStatusCounts = useCallback((data) => {
    const counts = {
      solved: 0,
      rejected: 0,
      pending: 0,
    };

    data.forEach((item) => {
      if (item.status === "Solved") counts.solved++;
      else if (item.status === "Rejected") counts.rejected++;
      else counts.pending++;
    });

    setStatusCounts(counts);
  }, []);

  const fetchComplaints = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/complaints/getAll"
      );

      setComplaints(response.data);
      updateStatusCounts(response.data);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  }, [updateStatusCounts]);

  useEffect(() => {
    fetchComplaints();
  }, [fetchComplaints]);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:8081/api/complaints/updateStatus/${id}?status=${status}`
      );

      fetchComplaints();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const chartData = {
    labels: ["Solved", "Rejected", "Pending"],
    datasets: [
      {
        data: [
          statusCounts.solved,
          statusCounts.rejected,
          statusCounts.pending,
        ],
        backgroundColor: ["#00e676", "#ff5252", "#ffd54f"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Admin Complaint Dashboard</h1>

      <div style={styles.layout}>
        <div style={styles.leftPanel}>
          {complaints.length === 0 ? (
            <div style={styles.empty}>No Complaints Found</div>
          ) : (
            complaints.map((item) => (
              <div key={item.id} style={styles.card}>
                <div style={styles.complaintType}>
                  {item.complaintType}
                </div>

                <p style={styles.text}>Name: {item.name}</p>
                <p style={styles.text}>Address: {item.address}</p>
                <p style={styles.text}>Zone: {item.zone}</p>
                <p style={styles.text}>Phone: {item.phoneNumber}</p>
                <p style={styles.text}>Email: {item.emailAddress}</p>

                <p style={styles.status}>
                  Status: {item.status || "Pending"}
                </p>

                <div style={styles.buttonRow}>
                  <button
                    style={{ ...styles.btn, ...styles.solvedBtn }}
                    onClick={() => updateStatus(item.id, "Solved")}
                  >
                    Mark Solved
                  </button>

                  <button
                    style={{ ...styles.btn, ...styles.rejectBtn }}
                    onClick={() => updateStatus(item.id, "Rejected")}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div style={styles.rightPanel}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>
              {complaints.length}
            </div>
            <div style={styles.statLabel}>
              Total Complaints
            </div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statNumber}>
              {statusCounts.solved}
            </div>
            <div style={styles.statLabel}>Solved</div>
          </div>

          <div style={styles.statCard}>
            <div style={styles.statNumber}>
              {statusCounts.pending}
            </div>
            <div style={styles.statLabel}>Pending</div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <Pie data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;