import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useToast } from "../contexts/ToastContext";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

export default function UserDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user, isAuthenticated } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    fetchAppointments();
  }, [isAuthenticated, navigate]);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/appointments");
      if (!response.ok) throw new Error("Failed to load appointments");
      const data = await response.json();
      
      // Filter appointments for current user's email
      const userAppointments = data.filter(apt => apt.email === user?.email);
      setAppointments(userAppointments);
      setError("");
    } catch (err) {
      setError(err.message);
      addToast("Failed to load appointments", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this appointment?")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: "DELETE",
      });
      
      if (!response.ok) throw new Error("Failed to delete appointment");
      
      setAppointments(appointments.filter(apt => apt._id !== id));
      addToast("✅ Appointment cancelled successfully", "success");
    } catch (err) {
      addToast("❌ Failed to cancel appointment", "error");
    }
  };

  const getStatusBadgeClass = (status) => {
    return `status-badge status-${status || "pending"}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="user-dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="user-profile">
            <div className="avatar">👤</div>
            <div className="profile-info">
              <h1>Welcome, {user?.name}!</h1>
              <p>{user?.email}</p>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="appointments-section">
            <div className="section-header">
              <h2>📅 Your Appointments</h2>
              <button className="new-appointment-btn" onClick={() => navigate("/appointment")}>
                + Book New Appointment
              </button>
            </div>

            {loading && <div className="status loading">⏳ Loading appointments...</div>}
            {error && <div className="status error">❌ {error}</div>}

            {!loading && !error && (
              <>
                {appointments.length === 0 ? (
                  <div className="empty-state">
                    <div className="empty-icon">📭</div>
                    <h3>No Appointments Yet</h3>
                    <p>You haven't booked any appointments. Book one now to get started!</p>
                    <button className="btn-primary" onClick={() => navigate("/appointment")}>
                      Book Appointment
                    </button>
                  </div>
                ) : (
                  <div className="appointments-list">
                    {appointments.map((apt) => (
                      <div key={apt._id} className="appointment-card">
                        <div className="card-header">
                          <h3>{apt.name}</h3>
                          <span className={getStatusBadgeClass(apt.status)}>
                            {apt.status || "pending"}
                          </span>
                        </div>
                        <div className="card-body">
                          <div className="appointment-detail">
                            <span className="label">📧 Email:</span>
                            <span className="value">{apt.email}</span>
                          </div>
                          <div className="appointment-detail">
                            <span className="label">📅 Date:</span>
                            <span className="value">{formatDate(apt.date)}</span>
                          </div>
                          {apt.notes && (
                            <div className="appointment-detail">
                              <span className="label">📝 Notes:</span>
                              <span className="value notes">{apt.notes}</span>
                            </div>
                          )}
                          <div className="appointment-detail">
                            <span className="label">⏰ Booked on:</span>
                            <span className="value">{formatDate(apt.createdAt)}</span>
                          </div>
                        </div>
                        <div className="card-footer">
                          {apt.status === "pending" && (
                            <button 
                              className="btn-danger"
                              onClick={() => handleDelete(apt._id)}
                            >
                              🗑️ Cancel
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
