import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import API from '../api';
function Portfolio() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Refs for youtube players keyed by video._id
  const playersRef = useRef({});
  // Currently playing video id
  const [playingVideoId, setPlayingVideoId] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchVideos();
  }, []);

  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]._id);
    }
  }, [categories]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${API}/api/mainpagecategory`);
      setCategories(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchVideos = async () => {
    try {
      const res = await axios.get(`${API}/api/mainpagevideos`);
      setVideos(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredVideos =
    selectedCategory === 'all' || selectedCategory === null
      ? videos
      : videos.filter(video => video.category._id === selectedCategory);

  // Load YouTube IFrame API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }
  }, []);

  // Create player on iframe ready
  const onPlayerReady = (event, videoId) => {
    playersRef.current[videoId] = event.target;
  };

  // When user clicks play on a video iframe, pause previous video
  const onStateChange = (event, videoId) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      // Pause other videos
      Object.entries(playersRef.current).forEach(([id, player]) => {
        if (id !== videoId && player && player.pauseVideo) {
          player.pauseVideo();
        }
      });
      setPlayingVideoId(videoId);
    }
  };

  // Pause videos when they go out of viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoId = entry.target.getAttribute('data-videoid');
          const player = playersRef.current[videoId];
          if (player) {
            if (!entry.isIntersecting) {
              player.pauseVideo();
              if (playingVideoId === videoId) {
                setPlayingVideoId(null);
              }
            }
          }
        });
      },
      { threshold: 0.5 } // 50% visible
    );

    // Observe all iframe elements
    Object.values(document.querySelectorAll('iframe[data-videoid]')).forEach((iframe) => {
      observer.observe(iframe);
    });

    return () => {
      observer.disconnect();
    };
  }, [filteredVideos, playingVideoId]);

  // Create YouTube players after iframe is rendered
  useEffect(() => {
    if (!window.YT || !window.YT.Player) return;

    filteredVideos.forEach((video) => {
      if (!playersRef.current[video._id]) {
        playersRef.current[video._id] = new window.YT.Player(`player-${video._id}`, {
          videoId: video.videoId,
          events: {
            onReady: (event) => onPlayerReady(event, video._id),
            onStateChange: (event) => onStateChange(event, video._id),
          },
          playerVars: {
            modestbranding: 1,
            rel: 0,
            autoplay: 0,
          },
        });
      }
    });
  }, [filteredVideos]);

  return (
    <div className="container mt-5" id="port">
      {/* Heading */}
      <div className="text-center mb-5">
        <div className="tite">Portfolio</div>
        <h2 className="mt-4">
          See How Creativity Meets Quality <br /> to Deliver <strong>Exceptional Results.</strong>
        </h2>
      </div>

      {/* Category Filter Buttons */}
      <div className="category-buttons mb-4">
        {categories.map(cat => (
          <button
            key={cat._id}
            className={`filter-btn ${selectedCategory === cat._id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat._id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      <div className="row portfolio-items">
        {filteredVideos.length === 0 && (
          <p className="text-center">No videos found.</p>
        )}
        {filteredVideos.map(video => (
          <div key={video._id} className="col-lg-3 col-md-4 col-sm-6 portfolio-item short-form show">
            <div className="video-container">
              {/* Iframe with id for YT API */}
              <div id={`player-${video._id}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
