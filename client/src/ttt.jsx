import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UgcVideoPortfolio = () => {
  const [videos, setVideos] = useState([]);
  const API_URL = 'http://localhost:5000/api/ugcpage';

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(API_URL);
        setVideos(res.data);
      } catch (err) {
        console.error('Failed to fetch videos:', err);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🎥 Portfolio - UGC Videos</h2>
      <div className="row">
        {videos.length > 0 ? (
          videos.map((video) => (
            <div className="col-md-4 mb-4" key={video._id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body p-0">
                  <iframe
                    width="100%"
                    height="215"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-footer bg-white">
                  <h5 className="card-title text-center">{video.title}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default UgcVideoPortfolio;
