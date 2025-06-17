import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../assets/Css/shortpage.module.css';
import API from '../api';

const UGCShortPagePortfolio = () => {  // <-- fixed function declaration
  const [videos, setVideos] = useState([]);
  const API_URL = `${API}/api/ugcpage`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(API_URL);
        setVideos(res.data);
        setLoading(false);  // loading finished
      } catch (err) {
        setError('Failed to fetch videos');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setPlayingVideoId(null); // pause video when scrolling
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return <div className="text-center my-4">Loading videos...</div>;
  if (error) return <div className="text-center my-4 text-danger">{error}</div>;

  return (
    <section className={`${style.portfolioSection} container py-3`}>
      <div className="tite mb-4">Portfolio</div>
      <div className="row g-4">
        {videos.map((video, index) => {
          if (!showAll && index >= 3) return null; // only show first 3 if showAll is false

          const isPlaying = playingVideoId === video.youtubeId;

          return (
            <div key={video.youtubeId} className="col-lg-4 col-md-6 col-sm-12">
              <div className={style.portfolioItem}>
                <div className={style.videoWrapper}>
                  <div
                    className={style.youtubeFacade}
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      setPlayingVideoId(isPlaying ? null : video.youtubeId)
                    }
                  >
                    {isPlaying ? (
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <>
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                          alt="Video Thumbnail"
                          className={style.youtubeThumbnail}
                        />
                        <button className={style.playButton}>▶</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!showAll && videos.length > 3 && (
        <div className="text-center mt-3">
          <button onClick={() => setShowAll(true)} className={style.button}>
            See All
          </button>
        </div>
      )}
    </section>
  );
};

export default UGCShortPagePortfolio;
