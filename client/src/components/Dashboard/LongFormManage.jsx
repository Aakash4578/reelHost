import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VideoManager() {
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState({ title: '', youtubeId: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchVideos = async () => {
    const res = await axios.get('http://localhost:5000/api/longpage');
    setVideos(res.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:5000/api/longpage/${editingId}`, form);
    } else {
      await axios.post('http://localhost:5000/api/longpage', form);
    }
    setForm({ title: '', youtubeId: '', description: '' });
    setEditingId(null);
    fetchVideos();
    window.bootstrap.Modal.getInstance(document.getElementById('videoModal')).hide();
  };

  const deleteVideo = async (id) => {
    await axios.delete(`http://localhost:5000/api/longpage/${id}`);
    fetchVideos();
  };

  const openEditModal = (video) => {
    setForm(video);
    setEditingId(video._id);
    new window.bootstrap.Modal(document.getElementById('videoModal')).show();
  };

  const openAddModal = () => {
    setForm({ title: '', youtubeId: '', description: '' });
    setEditingId(null);
    new window.bootstrap.Modal(document.getElementById('videoModal')).show();
  };

  return (
    <div className="container mt-5 p-4 rounded-4 shadow-sm bg-white border border-primary border-2">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">🎬 YouTube Video Manager</h2>
        <button className="btn btn-primary" onClick={openAddModal}>
          + Add New Video
        </button>
      </div>

      <div className="row">
        {videos.map((video) => (
          <div className="col-md-4 mb-4" key={video._id}>
            <div className="card shadow h-100">
              <iframe
                className="card-img-top"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allowFullScreen
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.description}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-sm btn-primary" onClick={() => openEditModal(video)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteVideo(video._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={handleSubmit}>
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="videoModalLabel">
                {editingId ? 'Edit Video' : 'Add New Video'}
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label fw-bold text-black">Title</label>
                <input type="text" className="form-control" value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-black">YouTube ID</label>
                <input type="text" className="form-control" value={form.youtubeId}
                  onChange={(e) => setForm({ ...form, youtubeId: e.target.value })} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold text-black">Description</label>
                <textarea className="form-control" rows="3" value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-primary">{editingId ? 'Update' : 'Upload'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VideoManager;
