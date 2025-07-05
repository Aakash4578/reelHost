import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../assets/Css/Testimonials.module.css'; // ✅ CSS module

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const testimonials = [
     {
      quote: "Loved the work. The reels had the exact energy we needed, and the ads looked super sharp. Everything was delivered fast and on point. Solid communication too — made the whole thing easy.",
      name: "Kale Black",
      role: "Digital Marketing",
      avatar: "/assets/img/Testimonials/black.jpg",
      // link: "https://www.instagram.com/kale_black/ ",

    },
    {
      quote: "Really happy with how the video turned out, clean, professional, and exactly what I was looking forThe process was smooth, communication was easy, and delivery was on point. Would definitely recommend working with him.",
      name: "Pasha Mogadam",
      role: "Founder of Growth-Accelerator",
      avatar: "/assets/img/Testimonials/pasha.jpg",
      // link: "https://www.instagram.com/pashamoga/",
    },
    {
      quote: "I’ve worked with Abu  on multiple projects for my clients - reels, ads, promos. He just gets it. Quick turnaround, clean edits, and no micromanaging needed. Makes my job way easier.",
      name: "Chris London",
      role: "Founder of 22:22 Marketing Agency",
      avatar: "/assets/img/Testimonials/chars.jpg",
      // link: "https://www.instagram.com/blakeurmos/ ",

    },
    {
      quote: "We had a full course to build out for Low Voltage. Abu handled it like a pro. Fast, clean edits, zero hand-holding. Everything was delivered on time and exactly how we needed it",
      name: "Blake Urmos",
      role: "Founder of Low Voltage Nation",
      avatar: "/assets/img/Testimonials/urms.jpg",
      // link: "https://www.instagram.com/blakeurmos/ ",

    },
   
    


  ];


  return (
    <section className="text-white py-5">
      <div className="container text-center" id="tes" data-aos="fade-up">
    <div class="container">
  <div class="row justify-content-center">
    <div class="col-auto">
      <div class="tite mb-4" data-aos="fade-up">Testimonials</div>
    </div>
  </div>
</div>
        <h3 className="mt-4">
          Words from Our <strong className="Gradient">Satisfied Clients.</strong>
        </h3>
      </div>
<div className={`${styles['tesmaindiv']} mt-5`}>
  <div className={styles['testimonial-grid']}>
    {testimonials.map((item, index) => (
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

<a href={item.link} className={`text-light ${styles['insta-icon']}`}>
    <span className={styles.quoteIcon}>&#8221;</span>
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
