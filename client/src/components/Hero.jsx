import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios'; // 👈 Future use
// import API from '../api';   // 👈 Future use

const Hero = () => {
  // Sample videos (static data) for now
  const [videos] = useState([
    {
      id: 1,
      videoUrl: "/assets/hero/Hero.mp4" // 👈 Replace with your video path
    },

  ]);

  // 👇 Uncomment this when backend is ready
  /*
  useEffect(() => {
    axios.get(`${API}/api/videos`)
      .then(res => setVideos(res.data))
      .catch(err => console.log(err));
  }, []);
  */
 // References to individual videos
  const videoRefs = useRef([]);

  // Track which videos are muted
  const [mutedStates, setMutedStates] = useState(videos.map(() => true));

  const toggleMute = (index) => {
    const updatedStates = [...mutedStates];
    updatedStates[index] = !updatedStates[index];
    setMutedStates(updatedStates);

    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = updatedStates[index];
    }
  };
  return (
    <>
      {/* Hero Section */}


       <section className="hero mt-4">
      <div className="container text-center">
      <div className="row justify-content-center align-items-center">
  {videos.map((video, index) => (
    <div key={video.id} className="col-lg-6 col-md-10 col-12 mb-4">
      <div className="videowrap">
        <video
          ref={(el) => (videoRefs.current[index] = el)}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="volume-icon" onClick={() => toggleMute(index)}>
          {mutedStates[index] ? (
            <i className="fas fa-volume-mute text-white"></i>
          ) : (
            <i className="fas fa-volume-up text-white"></i>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

          <div className="banercon mt-4">
            <h1>Creating Scroll-Stopping Content</h1>
            <h2>That Elevates Your Brand.</h2>
            <p>
              If you're a busy creator looking to grow your brand, we craft short-form <br />
              viral content that grabs attention and drives results.
            </p>
            <a
              href="https://calendly.com/reeloxmedia/30min"
              className="btn mainbanerbtn mt-2"
              data-aos="fade-up"
            >
              Try our <span>FREE 30sec</span> Demo Edit <i className="fas fa-arrow-right"></i>
            </a>
          </div>
      </div>
    </section>
      {/* <div className="dividerunderline mt-4" ></div> */}

    </>
  );
};

export default Hero;