import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from "../assets/Css/Shortpage.module.css";
import API from '../api';
const API_URL = `${API}/api/shortvideos`;

function ShortPagePortfolio() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState(null); // <-- only one playing

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(API_URL);
        setVideos(res.data);
      } catch (err) {
        setError('Failed to fetch videos');
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setPlayingVideoId(null); // pause on scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return <div className="text-center my-4" >Loading videos...</div>;
  if (error) return <div className="text-center my-4 text-danger">{error}</div>;

  return (
    <section className={`${style.portfolioSection} container py-3`}>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-auto">
      <div class="tite mb-4" data-aos="fade-up">Portfolio</div>
    </div>
  </div>
</div>
      <div className="row g-4"data-aos="fade-up">
        {videos.map((video, index) => {
          if (!showAll && index >= 3) return null;

          const isPlaying = playingVideoId === video.youtubeId;

          return (
            <div key={video.youtubeId} className="col-lg-4 col-md-6 col-sm-12">
              <div className={style.portfolioItem}>
                <div className={style.videoWrapper}>
                  <div
                    className={style.youtubeFacade}
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      setPlayingVideoId(
                        playingVideoId === video.youtubeId ? null : video.youtubeId
                      )
                    }
                  >
                    {isPlaying ? (
                      <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
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
}

export default ShortPagePortfolio;
