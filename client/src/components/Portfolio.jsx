import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import API from '../api';

function Portfolio() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const playersRef = useRef({});
  const [playingVideoId, setPlayingVideoId] = useState(null);

  useEffect(() => {
    fetchCategoriesAndVideos();
  }, []);

  const fetchCategoriesAndVideos = async () => {
    setLoading(true);
    try {
      const [catRes, vidRes] = await Promise.all([
        axios.get(`${API}/api/mainpagecategory`),
        axios.get(`${API}/api/mainpagevideos`)
      ]);
      setCategories(catRes.data);
      setVideos(vidRes.data);

      // Set default category to first one
      if (catRes.data.length > 0) {
        setSelectedCategory(catRes.data[0]._id);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredVideos =
    selectedCategory === 'all' || selectedCategory === null
      ? videos
      : videos.filter(video => video.category._id === selectedCategory);

  // Load YouTube API once
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }
  }, []);

  // Reset old players
  useEffect(() => {
    Object.values(playersRef.current).forEach((player) => {
      if (player && player.destroy) player.destroy();
    });
    playersRef.current = {};
  }, [selectedCategory]);

  // Retry Player Initialization
  useEffect(() => {
    if (!window.YT || !window.YT.Player) return;

    let attempts = 0;
    const maxAttempts = 10;
    const interval = setInterval(() => {
      attempts++;

      filteredVideos.forEach((video) => {
        const id = `player-${video._id}`;
        const el = document.getElementById(id);
        if (el && !playersRef.current[video._id]) {
          playersRef.current[video._id] = new window.YT.Player(id, {
            videoId: video.videoId,
            playerVars: { modestbranding: 1, rel: 0 },
            events: {
              onReady: (event) => playersRef.current[video._id] = event.target,
              onStateChange: (event) => {
                if (event.data === window.YT.PlayerState.PLAYING) {
                  Object.entries(playersRef.current).forEach(([pid, p]) => {
                    if (pid !== video._id && p.pauseVideo) p.pauseVideo();
                  });
                  setPlayingVideoId(video._id);
                }
              }
            }
          });
        }
      });

      if (attempts >= maxAttempts) clearInterval(interval);
    }, 400);

    return () => clearInterval(interval);
  }, [filteredVideos]);

  return (
    <div className="container mt-5" id="portfolio">
      {/* Heading */}
      <div className="text-center mb-5">
        <div className="tite" data-aos="fade-up">Portfolio</div>
        <h2 className="mt-4" data-aos="fade-up">
          See How Creativity Meets Quality <br /> to Deliver <strong>Exceptional Results.</strong>
        </h2>
      </div>

      {/* Category Filters */}
      <div className="category-buttons mb-4 text-center" data-aos="fade-up">
        {categories.map(cat => (
          <button
            key={cat._id}
            className={`filter-btn ${selectedCategory === cat._id ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(cat._id);
              setLoading(true);
              setTimeout(() => setLoading(false), 500); // UX delay to simulate loading
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Loader or Videos */}
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row portfolio-items">
          {filteredVideos.length === 0 ? (
            <p className="text-center">No videos found.</p>
          ) : (
            filteredVideos.map(video => (
              <div
                key={video._id}
                className="col-lg-3 col-md-4 col-sm-6 portfolio-item short-form show"
                data-aos="fade-up"
              >
                <div className="video-container">
                  <div id={`player-${video._id}`} data-videoid={video._id}></div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Portfolio;
