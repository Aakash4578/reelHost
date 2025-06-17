import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../../api'; //✅ import your base API URL//

function MainPageVideoAdmin() {
  const [title, setTitle] = useState('');
  const [videoId, setVideoId] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchVideos();
  }, []);
  const fetchCategories = async () => {
    const res = await axios.get(`${API}/api/mainpagecategory`);
    setCategories(res.data);
  };

  const fetchVideos = async () => {
    const res = await axios.get(`${API}/api/mainpagevideos`);
    setVideos(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/mainpagevideos`, {
        title,
        videoId,
        category: categoryId,
      });
      alert('Video Added');
      resetForm();
      fetchVideos();
      setShowModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure to delete this video?')) {
      await axios.delete(`${API}/api/mainpagevideos/${id}`);
      fetchVideos();
    }
  };

  const openEditModal = async (id) => {
    try {
      const res = await axios.get(`${API}/api/mainpagevideos/${id}`);
      const video = res.data;
      setTitle(video.title);
      setVideoId(video.videoId);
      setCategoryId(video.category?._id || '');
      setEditId(id);
      setShowEditModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API}/api/mainpagevideos/${editId}`, {
        title,
        videoId,
        category: categoryId,
      });
      alert('Video Updated');
      resetForm();
      fetchVideos();
      setShowEditModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const resetForm = () => {
    setTitle('');
    setVideoId('');
    setCategoryId('');
    setEditId(null);
  };

  return (
<div className="container py-5 p-4 rounded-4 shadow-sm bg-white border border-primary border-2">
  {/* Header */}
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h2 className="fw-bold text-primary">🎥 Main Page categorys videos </h2>
    <button className="btn btn-primary px-4 py-2 rounded-pill shadow-sm" onClick={() => setShowModal(true)}>
      ➕ Add New
    </button>
  </div>

  {/* Cards Grid */}
  <div className="row g-4">
    {videos.map((v, i) => (
      <div className="col-md-4" key={v._id}>
        <div className="card h-100 shadow-sm border-0 rounded-4">
          <iframe
            className="card-img-top rounded-top"
            height="200"
            src={`https://www.youtube.com/embed/${v.videoId}`}
            title={v.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="card-body">
            <h5 className="card-title text-danger">{v.title}</h5>
            <p className="card-text text-muted">
              <strong>Category:</strong> {v.category?.name || 'N/A'}
            </p>
          </div>
          <div className="card-footer bg-white border-0 d-flex justify-content-between px-3 pb-3">
            <button className="btn btn-outline-primary btn-sm" onClick={() => openEditModal(v._id)}>
              ✏️ Edit
            </button>
            <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(v._id)}>
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Add Modal */}
  {showModal && (
    <>
      <div className="modal fade show d-block " tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow rounded-4">
            <div className="modal-header border-0 bg-primary text-white">
              <h5 className="modal-title text-white fw-bold">➕ Add New Video</h5>
              <button className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label text-black fw-semibold">Title</label>
                  <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label className="form-label text-black fw-semibold">YouTube Video ID</label>
                  <input className="form-control" value={videoId} onChange={(e) => setVideoId(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label className="form-label text-black fw-semibold">Category</label>
                  <select className="form-select" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                    <option value="">Select</option>
                    {categories.map(cat => (
                      <option key={cat._id} value={cat._id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button type="button" className="btn btn-outline-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="submit" className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  )}

  {/* Edit Modal */}
  {showEditModal && (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow rounded-4">
            <div className="modal-header border-0 bg-primary text-white">
              <h5 className="modal-title text-white fw-bold">✏️ Edit Video</h5>
              <button className="btn-close" onClick={() => setShowEditModal(false)}></button>
            </div>
            <form onSubmit={handleUpdate}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label text-black fw-semibold">Title</label>
                  <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label className="form-label text-black fw-semibold">YouTube Video ID</label>
                  <input className="form-control" value={videoId} onChange={(e) => setVideoId(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label className="form-label text-black fw-semibold">Category</label>
                  <select className="form-select" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                    <option value="">Select</option>
                    {categories.map(cat => (
                      <option key={cat._id} value={cat._id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              
              <div className="modal-footer border-0">
                 <button type="button" className="btn btn-outline-secondary" onClick={() => setShowEditModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  )}
</div>


  );
}

export default MainPageVideoAdmin;















