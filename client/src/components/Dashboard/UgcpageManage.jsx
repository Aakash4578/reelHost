import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UgcVideoManager = () => {
  const [videos, setVideos] = useState([]);
  const [formData, setFormData] = useState({ title: '', youtubeId: '', _id: '' });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const API_URL = 'http://localhost:5000/api/ugcpage';

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await axios.get(API_URL);
      setVideos(res.data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (formData._id) {
        await axios.put(`${API_URL}/${formData._id}`, formData);
        alert('✅ Video updated!');
      } else {
        const { title, youtubeId } = formData;
        await axios.post(API_URL, { title, youtubeId });
        alert('✅ Video added!');
      }
      setFormData({ title: '', youtubeId: '', _id: '' });
      setShowModal(false);
      fetchVideos();
    } catch (error) {
      console.error('Submission error:', error.response?.data || error.message);
      alert('❌ Failed to save video. Check console.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (video) => {
    setFormData(video);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchVideos();
      } catch (err) {
        console.error('Delete error:', err);
      }
    }
  };

  const handleReset = () => {
    setFormData({ title: '', youtubeId: '', _id: '' });
  };

  const openModalForAdd = () => {
    handleReset();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
  <div className="container mt-5 p-4 rounded-4 shadow-sm bg-white border border-primary border-2">
  {/* Heading and Add Button in One Row */}
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h2 className="mb-0 text-primary">🎬 Admin - UGC Video Manager</h2>
    <button className="btn btn-primary" onClick={openModalForAdd}>
      + Add New Video
    </button>
  </div>

  {/* Modal */}
  {showModal && (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">
              {formData._id ? 'Edit Video' : 'Add New Video'}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={closeModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_id" value={formData._id} />

              <div className="mb-3">
                <label className="form-label fw-bold text-black">Video Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter video title"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold text-black">YouTube ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="youtubeId"
                  value={formData.youtubeId}
                  onChange={handleChange}
                  required
                  placeholder="Enter YouTube video ID"
                />
              </div>

              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-outline-secondary me-2"
                  onClick={closeModal}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : formData._id ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )}

  {/* Video Cards */}
  <div className="row">
    {videos.length > 0 ? (
      videos.map((video) => (
        <div className="col-md-4 mb-4" key={video._id}>
          <div className="card h-100 shadow-sm">
            <iframe
              className="card-img-top"
              style={{ height: '200px', objectFit: 'cover' }}
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{video.title}</h5>
              <div className="mt-auto d-flex justify-content-between">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => handleEdit(video)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(video._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="col-12 text-center">
        <p className="text-muted">No videos found.</p>
      </div>
    )}
  </div>
</div>

  );
};

export default UgcVideoManager;
