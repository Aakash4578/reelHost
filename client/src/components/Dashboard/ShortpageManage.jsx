import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import API from '../../api'; //✅ import your base API URL//

const API_URL = `${API}http://localhost:5000/api/shortvideos`;

function ShortVideoManager() {
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [formData, setFormData] = useState({ title: '', youtubeId: '' });

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const res = await axios.get(API_URL);
    setVideos(res.data);
  };

  const openModal = (video = null) => {
    if (video) {
      setEditingVideo(video);
      setFormData({ title: video.title, youtubeId: video.youtubeId });
    } else {
      setEditingVideo(null);
      setFormData({ title: '', youtubeId: '' });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingVideo(null);
    setFormData({ title: '', youtubeId: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (editingVideo) {
      await axios.put(`${API_URL}/${editingVideo._id}`, formData);
    } else {
      await axios.post(API_URL, formData);
    }
    closeModal();
    fetchVideos();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      await axios.delete(`${API_URL}/${id}`);
      fetchVideos();
    }
  };

  return (
  <div className="container py-5 p-4 rounded-4 shadow-sm bg-white border border-primary border-2">
  {/* Header Section */}
  <div className="d-flex justify-content-between align-items-center mb-5">
    <h2 className="fw-bold text-primary">
      📹 Manage <span className="text-dark">Short Videos</span>
    </h2>
    <Button variant="primary" className="px-4 py-2 rounded-pill shadow" onClick={() => openModal()}>
      ➕ Add New Video
    </Button>
  </div>

  {/* Videos Grid */}
  <div className="row g-4">
    {videos.map((video) => (
      <div className="col-md-4" key={video._id}>
        <div className="card border-0 shadow-lg rounded-4 h-100 overflow-hidden">
          <iframe
            className="card-img-top rounded-top"
            height="200"
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            allowFullScreen
          ></iframe>
          <div className="card-body bg-light">
            <h5 className="card-title fw-semibold text-primary">{video.title}</h5>
            <div className="d-flex justify-content-between mt-3">
              <Button size="sm" variant="outline-primary" onClick={() => openModal(video)}>
                ✏️ Edit
              </Button>
              <Button size="sm" variant="outline-danger" onClick={() => handleDelete(video._id)}>
                🗑️ Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Add/Edit Modal */}
  <Modal show={showModal} onHide={closeModal} centered>
    <Modal.Header closeButton className="bg-primary text-white rounded-top">
      <Modal.Title className="fw-bold">
        {editingVideo ? '✏️ Update Video' : '➕ Add New Video'}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSave}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold text-black">🎬 Video Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter video title"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold text-black">🔗 YouTube Video ID</Form.Label>
          <Form.Control
            type="text"
            name="youtubeId"
            value={formData.youtubeId}
            onChange={handleChange}
            placeholder="e.g. abc123"
            required
          />
          <Form.Text className="text-muted">
            From https://www.youtube.com/watch?v=**abc123**, ID is <code>abc123</code>
          </Form.Text>
        </Form.Group>
        <div className="text-end">
          <Button variant="btn btn-outline-secondary" onClick={closeModal} className="me-2">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            {editingVideo ? 'Update' : 'Add'}
          </Button>
        </div>
      </Form>
    </Modal.Body>
  </Modal>
</div>

  );
}

export default ShortVideoManager;
