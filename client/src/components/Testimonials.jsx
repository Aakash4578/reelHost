import React, { useEffect } from 'react';
import t1  from '/assets/img/Testimonials/t1.webp';
import ChrisLondon  from '/assets/img/Testimonials/ChrisLondon.webp';
import jee  from '/assets/img/Testimonials/jee.webp';
import t3  from '/assets/img/Testimonials/t3.webp';
import t5  from '/assets/img/Testimonials/t5.webp';
import t6  from '/assets/img/Testimonials/t6.webp';
import t8  from '/assets/img/Testimonials/t8.webp';
import t72  from '/assets/img/Testimonials/t72.webp';
import uaEdRs  from '/assets/img/Testimonials/uaEdRs.webp';



function Testimonials() {
  useEffect(() => {
    // Wait for DOM to load Splide
    const splide1 = new window.Splide('#slider1', {
      type: 'loop',
      direction: 'ttb',
      height: '100%',
      gap: '10',
      autoScroll: {
        speed: -0.5,
      },
      arrows: false,
      pagination: false,
    });

    const splide2 = new window.Splide('#slider2', {
      type: 'loop',
      direction: 'ttb',
      height: '100%',
      gap: '3',
      autoScroll: {
        speed: 0.5,
      },
      arrows: false,
      pagination: false,
    });

    const splide3 = new window.Splide('#slider3', {
      type: 'loop',
      direction: 'ttb',
      height: '100%',
      gap: '3',
      autoScroll: {
        speed: -0.6,
      },
      arrows: false,
      pagination: false,
    });

    splide1.mount(window.splide.Extensions);
    splide2.mount(window.splide.Extensions);
    splide3.mount(window.splide.Extensions);
  }, []);

  return (
    <>
      <section>
        {/* Testimonials Section */}
        <div className="container proheading text-center" id="port" data-aos="fade-up">
          <div className="tite">Testimonials</div>
          <h3 className="mt-4">
            Words from Our <strong>Satisfied Clients.</strong>
          </h3>
        </div>

        <div className="container tess py-5">
          <div className="row d-flex" data-aos="fade-up">
            {/* First Slider */}
            <div className="splide col-12 col-sm-6 col-md-4 mb-4" id="slider1">
              <div className="splide__track">
                <ul className="splide__list">
                <li className="splide__slide align-items-center">
                    <div className="card">
                        <p className="review-text text-left">
                         Abu and his Team is a pro with motion graphics and bringing your videos to life. I had the pleasure of working with him on a 35 video training course and he absolutely crushed it. Highly recommend.
                            </p>
                            <div className="profile-section d-flex align-items-center">
                                <img src={uaEdRs} alt="Michael Lee" class="profile-pic" loading="lazy"/> <div>
                             <div className="role">Founder of Low Voltage Nation</div></div> </div>
                                </div>
                            </li>
                            <li className="splide__slide">
                                <div className="card">
                                    <p className="review-text">
                                        Abu has a way of understanding the dynamics and psychology behind video editing. Not a lot of people get that. He's a really good find among all the other applicants. I would definitely recommend him to others!
                                    </p>
                                    <div className="profile-section d-flex align-items-center">
                                        <img src={jee} alt="jee" class="profile-pic" loading="lazy"/>
                                        <div>
                                            <div className="name">Jee Dax</div>
                                            <div className="role">Founder of Jee Dax Production</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="splide__slide">
                                <div className="card">
                                    <p className="review-text">
                                        Abu is great when it come to motion graphics and the creation process of a video! I liked the communication a lot I had with him and will for sure ask for his services again!
                                    </p>
                                    <div className="profile-section d-flex align-items-center">
                                        <img src={t72} alt="Michael Lee" class="profile-pic" loading="lazy"/>
                                        <div>
                                            <div className="name">Mia Davis</div>
                                            <div className="role">YT Channel</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                </ul>
              </div>
            </div>

            {/* Second Slider */}
            <div className="splide col-12 col-sm-6 col-md-4 mb-4" id="slider2">
              <div className="splide__track">
                <ul className="splide__list">
                <li className="splide__slide">
                                <div className="card">
                                    <p className="review-text">
                                        We have used Abu for creation and editing of videos for Reels. The work has always been done to a high standard and had always been on time. I would highly recommend
                                    </p>
                                    <div className="profile-section d-flex align-items-center">
                                        <img src={ChrisLondon} alt="Chris London" class="profile-pic" loading="lazy"/>
                                        <div>
                                            <div className="name">Chris London</div>
                                            <div className="role">Founder of 22:22 Marketing</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="splide__slide">
                                <div className="card">
                                    <p className="review-text">
                                        Abu and the Reelox Media team are phenomenal at creating impactful videos. Their ability to blend creativity with precision has elevated our content to a whole new level. We’ve received amazing feedback from our audience!
                                    </p>
                                    <div className="profile-section d-flex align-items-center">
                                        <img src={t5} alt="Michael Lee" class="profile-pic" loading="lazy"/>
                                        <div>
                                            <div className="name">- Liam Thompson</div>
                                            <div className="role">Founder, Creative Heights</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="splide__slide">
                                <div className="card">
                                    <p className="review-text">
                                        Abu has a unique understanding of storytelling through video. His team at Reelox Media helped us create Reels that not only engaged but also converted viewers into customers. Highly professional and a joy to work with!
                                    </p>
                                    <div className="profile-section d-flex align-items-center">
                                        <img src={t6} alt="Michael Lee" class="profile-pic" loading="lazy"/>
                                        <div>
                                            <div className="name">- Charlotte Adams</div>
                                            <div className="role">Marketing Consultant, Visionary Edge</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                </ul>
              </div>
            </div>

            {/* Third Slider */}
            <div className="splide col-12 col-sm-6 col-md-4 mb-4" id="slider3">
              <div className="splide__track">
                <ul className="splide__list">
                <li className="splide__slide">
                                <div className="card">
                                    <p className="review-text">
                                        Reelox Media, led by Abu, delivered beyond our expectations. Their animations and motion graphics added a dynamic edge to our campaign, making it one of our most successful launches. Highly recommend them!
                                    </p>
                                    <div className="profile-section d-flex align-items-center">
                                        <img src={t3} alt="Michael Lee" class="profile-pic" loading="lazy"/>
                                        <div>
                                            <div className="name">Ethan Carter</div>
                                            <div className="role">Head of Content, Horizon Studios</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="splide__slide">
                                <div className="card">
                                    <p className="review-text">
                                        Abu and his team are incredible at what they do. The creativity and technical skills they brought to our project were top-notch. They made sure every detail was perfect, and the results speak for themselves. Can’t wait to work with them again!
                                    </p>
                                    <div className="profile-section d-flex align-items-center">
                                        <img src={t8} alt="Michael Lee" class="profile-pic" loading="lazy"/>
                                        <div>
                                            <div className="name">- Mia Davis </div>
                                            <div className="role">YT Channel Owner</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li claclassNamess="splide__slide">
                                <div className="card">
                                    <p className="review-text">
                                        Reelox Media, turned our vague ideas into a visually stunning video campaign. Their attention to detail, quick turnaround, and top-tier quality have made them our go-to for all video editing needs.
                                    </p>
                                    <div className="profile-section d-flex align-items-center">
                                        <img src={t1} alt="Michael Lee" class="profile-pic" loading="lazy"/>
                                        <div>
                                            <div className="name">-- Oliver Harris</div>
                                            <div className="role">Founder, Digital Bloom</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
