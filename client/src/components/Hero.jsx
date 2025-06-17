import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../api';
const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/videos`)
      .then(res => setVideos(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
   <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center mt-4">
          <div className="video mt-4">

            {videos.map(video =>(
               <iframe
              width="320"
              height="180"
              src={video.videoUrl}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            ))}

          </div>

          <div className="banercon mt-2">
            <h1>Creating Scroll-Stopping Content</h1>
            <h2>That Elevates Your Brand.</h2>
            <p>
              If you're a busy creator looking to grow your brand, we craft short-form <br />
              viral content that grabs attention and drives results.
            </p>
            <a href="https://calendly.com/reeloxmedia/30min" className="btn mainbanerbtn mt-2">
              Try our <span>FREE 30sec</span> Demo Edit <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
      <div className="dividerunderline mt-4"></div>
    </>
  );
};

export default VideoGallery;
