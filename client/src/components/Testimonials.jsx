import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../assets/Css/Testimonials.module.css'; // ✅ CSS module import

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const testimonials = [
    {
      quote: "Abu and his Team is a pro with motion graphics and bringing your videos to life. I had the pleasure of working with him on a 35 video training course and he absolutely crushed it. Highly recommend.",
      name: "Michael Lee",
      role: "Founder of Low Voltage Nation",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    },
    {
      quote: "Abu has a way of understanding the dynamics and psychology behind video editing. Not a lot of people get that. He's a really good find among all the other applicants. I would definitely recommend him to others!",
      name: "Jee Dax",
      role: "Founder of Jee Dax Production",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    },
    {
      quote: "Abu is great when it come to motion graphics and the creation process of a video! I liked the communication a lot I had with him and will for sure ask for his services again!",
      name: "Mia Davis",
      role: "YT Channel",
      avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    },
  ];

  return (
    <section className="text-white py-5">
      <div className="container text-center" id="tes" data-aos="fade-up">
        <button className="tite">Testimonials</button>
        <h3 className="mt-4">
          Words from Our <strong className='Gradient'>Satisfied Clients.</strong>
        </h3>
      </div>

      <div className={`${styles['testimonial-slider']} mt-5 ${styles['tesmaindiv']}`}>
        <div className={styles['testimonial-track']}>
          {[...testimonials, ...testimonials].map((item, index) => (
            <div className={styles['testimonial-item']} key={index}>
              <div className={`card text-white d-flex flex-column ${styles.cardtess}`}>
                <div className={`d-flex justify-content-between align-items-center ${styles['testimonial-profile']} mb-2`}>
                  <div className="d-flex align-items-center">
                    <img
                      src={item.avatar}
                      alt=""
                      className="rounded-circle me-3"
                      style={{ width: "45px", height: "45px", objectFit: "cover" }}
                    />
                    <div className={styles['profile-details']}>
                      <h6 className={`${styles.tessname} mb-0`}>{item.name}</h6>
                      <small className={styles.tessrole}>{item.role}</small>
                    </div>
                  </div>
                  <a href="#" className={`text-light ${styles['insta-icon']}`}>
                    <i className="bi bi-instagram fs-5"></i>
                  </a>
                </div>

                <div className="divider mb-2" style={{ borderTop: "1px solid #444" }}></div>

                <div className="flex-grow-1 d-flex flex-column justify-content-between">
                  <p className={`${styles['review-text']} mb-3`}>{item.quote}</p>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1" style={{ borderTop: "1px solid #444" }}></div>
                    <div className="px-3 text-warning d-flex justify-content-center">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill mx-1" style={{ color: "#A586F9" }}></i>
                      ))}
                    </div>
                    <div className="flex-grow-1" style={{ borderTop: "1px solid #444" }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
