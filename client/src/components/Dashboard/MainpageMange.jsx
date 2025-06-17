import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddCategory from './AddCategory';
import AddMainPageVideo from './AddMainPageVideo';
import API from '../../api'; //✅ import your base API URL//

const API_URL = `${API}/api/videos`; // Replace with your actual API URL

function MainpageMange() {
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState({ title: '', videoUrl: '', description: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const res = await axios.get(API_URL);
    setVideos(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`${API_URL}/${editId}`, form);
    } else {
      await axios.post(API_URL, form);
    }
    setForm({ title: '', videoUrl: '', description: '' });
    setEditId(null);
    fetchVideos();
    window.bootstrap.Modal.getInstance(document.getElementById('videoModal')).hide();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchVideos();
  };

  const handleEdit = (video) => {
    setForm(video);
    setEditId(video._id);
    const modal = new window.bootstrap.Modal(document.getElementById('videoModal'));
    modal.show();
  };

  const handleAddNew = () => {
    setForm({ title: '', videoUrl: '', description: '' });
    setEditId(null);
    const modal = new window.bootstrap.Modal(document.getElementById('videoModal'));
    modal.show();
  };

  return (
    <>
 <div className="container py-5">
  <section className="p-4 rounded-4 shadow-sm bg-white border border-primary border-2">
    <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
      <h2 className="fw-bold text-primary">🎬 Hero Section Video Manager</h2>
      <button className="btn btn-primary d-flex align-items-center gap-2" onClick={handleAddNew} data-bs-toggle="modal" data-bs-target="#videoModal">
        ➕ Add New Video
      </button>
    </div>

    {/* Video Modal */}
    <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content rounded-4 shadow-lg border-0">
          <div className="modal-header bg-primary text-white rounded-top-4">
            <h5 className="modal-title" id="videoModalLabel">{editId ? 'Update' : 'Add'} Video</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body bg-light">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Video Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="YouTube Embed Link"
              value={form.videoUrl}
              onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
              required
            />
            <textarea
              className="form-control"
              rows="3"
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            ></textarea>
          </div>
          <div className="modal-footer bg-light rounded-bottom-4">
            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" className="btn btn-primary">{editId ? 'Update' : 'Add'} Video</button>
          </div>
        </form>
      </div>
    </div>

    {/* Video Cards */}
    <div className="row mt-4">
      {videos.map((video) => (
        <div key={video._id} className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow rounded-4 border-0">
            <iframe
              className="card-img-top rounded-top-4"
              width="100%"
              height="200"
              src={video.videoUrl}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div className="card-body">
              <h5 className="card-title text-dark">{video.title}</h5>
              <p className="card-text text-muted">{video.description}</p>
            </div>
            <div className="card-footer bg-white border-0 d-flex justify-content-between px-3 pb-3">
              <button className="btn btn-sm btn-outline-primary" onClick={() => handleEdit(video)}>✏️ Edit</button>
              <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(video._id)}>🗑️ Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
</div>



    <AddCategory></AddCategory>
    <AddMainPageVideo></AddMainPageVideo>
    </>

  );
}

export default MainpageMange;
