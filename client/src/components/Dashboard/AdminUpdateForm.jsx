import React, { useEffect, useState } from "react";
import axios from "axios";
import API from '../../api';

const AdminUpdateForm = () => {
  const [admin, setAdmin] = useState({ email: "" });
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Please login first.");
      return;
    }

    axios
      .get(`${API}/api/admin`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAdmin({ email: res.data.email }))
      .catch(() => setMessage("Error fetching profile. Please login again."));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Please login first.");
      return;
    }

    try {
      const res = await axios.put(
        `${API}/api/admin`,
        { email: admin.email, currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(res.data.message || "Profile updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      setMessage(error.response?.data?.error || "Failed to update profile.");
    }
  };

  return (
    <div
      className="modal fade"
      id="updateProfileModal"
      tabIndex="-1"
      aria-labelledby="updateProfileModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleUpdate}>
            <div className="modal-header bg-primary text-white rounded-top-4">
              <h5 className="modal-title" id="updateProfileModalLabel">
                Update Admin Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {message && (
                <div
                  className={`alert ${
                    message.toLowerCase().includes("success")
                      ? "alert-success"
                      : "alert-danger"
                  }`}
                >
                  {message}
                </div>
              )}

              <div className="mb-3">
                <label className="fw-semibold text-black">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  value={admin.email}
                  onChange={(e) =>
                    setAdmin({ ...admin, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* ✅ Current Password with eye icon */}
              <div className="mb-3">
                <label className="fw-semibold text-black">Current Password:</label>
                <div className="input-group">
                  <input
                    type={showCurrentPass ? "text" : "password"}
                    className="form-control"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowCurrentPass(!showCurrentPass)}
                  >
                    <i className={`fa-solid ${showCurrentPass ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </button>
                </div>
              </div>

              {/* ✅ New Password with eye icon */}
              <div className="mb-3">
                <label className="fw-semibold text-black">New Password (optional):</label>
                <div className="input-group">
                  <input
                    type={showNewPass ? "text" : "password"}
                    className="form-control"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowNewPass(!showNewPass)}
                  >
                    <i className={`fa-solid ${showNewPass ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateForm;
