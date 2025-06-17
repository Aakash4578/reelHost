import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../../api';

function NewsletterSubscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [msg, setMsg] = useState('');

  const fetchSubscribers = async () => {
    try {
      const res = await axios.get(`${API}/api/newsletter/all`);
      setSubscribers(res.data);
    } catch (err) {
      setMsg('Error fetching subscribers');
    }
  };

  const deleteSubscriber = async (id) => {
    try {
      await axios.delete(`${API}/api/newsletter/delete/${id}`);
      setMsg('Subscriber deleted');
      fetchSubscribers(); // Refresh after deletion
    } catch (err) {
      setMsg('Error deleting subscriber');
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="mb-4">📧 Newsletter Subscribers</h3>

      {msg && <div className="alert alert-info">{msg}</div>}

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Subscribed At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.length > 0 ? (
              subscribers.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{new Date(item.subscribedAt).toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteSubscriber(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="4">No subscribers found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NewsletterSubscribers;
