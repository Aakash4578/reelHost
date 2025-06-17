import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/videos';

function VideoManager() {
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
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchVideos();
  };

  const handleEdit = (video) => {
    setForm(video);
    setEditId(video._id);
  };

  return (
    <div>
      <h2>🛠 Admin Panel</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="YouTube Embed Link"
          value={form.videoUrl}
          onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button type="submit">{editId ? 'Update' : 'Add'} Video</button>
      </form>

      {videos.map((video) => (
        <div key={video._id} style={{ marginBottom: '30px' }}>
          <h3>{video.title}</h3>
          <iframe
            width="320"
            height="180"
            src={video.videoUrl}
            title={video.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>{video.description}</p>
          <button onClick={() => handleEdit(video)}>Edit</button>
          <button onClick={() => handleDelete(video._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default VideoManager;
