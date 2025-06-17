import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../assets/Css/Longpage.module.css';
import API from '../api';
function LongpagePortfolio() {
  const [showAll, setShowAll] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`${API}/api/longpage`);
        // Map API data according to your admin panel video structure
        const data = res.data.map(item => ({
          id: item._id,
          youtubeId: item.youtubeId,
          thumbnail: `https://img.youtube.com/vi/${item.youtubeId}/0.jpg`,
          title: item.title,
          description: item.description,
        }));
        setVideos(data);
      } catch (err) {
        console.error('Error fetching videos:', err);
      }
    };
    fetchVideos();
  }, []);

  const handlePlayClick = (youtubeId) => {
    setPlayingVideo(youtubeId);
  };

  const handleSeeAllClick = () => {
    setShowAll(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setPlayingVideo(null);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`${style.portfolioSection} container py-3`}>
      <div className="tite mb-4">Portfolio</div>
      <div className="row g-4">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`col-lg-6 col-md-6 col-sm-12 ${!showAll && index >= 4 ? style.hidden : ''}`}
          >
            <div className={style.portfolioItem}>
              <div className={style.videoWrapper}>
                <div
                  className={style.youtubeFacade}
                  onClick={() => handlePlayClick(video.youtubeId)}
                >
                  {playingVideo === video.youtubeId ? (
                    <iframe
                      key={video.youtubeId}
                      loading="lazy"
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1`}
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                      frameBorder="0"
                      title={video.title}
                      width="100%"
                      height="315"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={video.thumbnail}
                        alt={`Video Thumbnail ${video.youtubeId}`}
                        className={style.youtubeThumbnail}
                      />
                      <button className={style.playButton}>▶</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-3">
        {!showAll && (
          <button onClick={handleSeeAllClick} className={style.button}>
            See All
          </button>
        )}
      </div>
    </section>
  );
}

export default LongpagePortfolio;
