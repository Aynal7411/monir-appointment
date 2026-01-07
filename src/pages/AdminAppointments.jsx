import React, { useEffect, useState } from "react";
import "./AdminAppointments.css";

const API_URL = "http://localhost:5000/api/appointments";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to load appointments");
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <section className="admin-section" aria-labelledby="admin-heading">
      <div className="admin-container">
        <h1 id="admin-heading">📅 Appointment Management</h1>

        {loading && <p className="status loading">Loading appointments...</p>}
        {error && <p className="status error">{error}</p>}

        {!loading && !error && (
          <div className="table-wrapper">
            <table className="appointments-table">
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Email</th>
                  <th>Appointment Date</th>
                  <th>Booked At</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="empty">
                      No appointments found
                    </td>
                  </tr>
                ) : (
                  appointments.map((appt) => (
                    <tr key={appt._id}>
                      <td>{appt.name}</td>
                      <td>{appt.email}</td>
                      <td>
                        {new Date(appt.date).toLocaleDateString("en-GB")}
                      </td>
                      <td>
                        {new Date(appt.createdAt).toLocaleString("en-GB")}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminAppointments;
