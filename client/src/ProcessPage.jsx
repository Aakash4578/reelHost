import React from 'react'
import styles from './assets/Css/Terms.module.css';
import DemoAndBook_Cards from './components/DemoAndBook_Cards';

import Footer from './components/Footer';

function ProcessPage() {
  return (
    <>


        <div className={`container-fluid ${styles.hero}`}>
  <div className="container text-start">
    <h1 className={styles.termsTitle}>Video Editing Process</h1>
    <h5 className={styles.termsTitlep}>
      Simple. Creative. Professional.
    </h5>
  </div>
</div>

    
     <div className={`${styles.timeline}`}>
<div className={`${styles.container1} ${styles.leftcontainer}`}>
      <img src="/public/ficon.webp" alt=""/>
        <div className={`${styles.textbox}`}>
        <h2>Briefing & Script Sample</h2>
          <p>Tell us about your project. Share your vision, goals, and any script samples or inspirations you might have. Our team is all ears, ensuring we fully grasp your unique needs and aspirations.</p>
                <span className={`${styles.leftcontainerarrow}`}></span>

      </div>
    </div>
<div className={`${styles.container1} ${styles.righrcontainer}`}>
 <img src="/public/ficon.webp" alt=""/>
        <div className={`${styles.textbox}`}>
        <h2>Script & Voice Magic​</h2>
        <p>Based on your input, our creative writers draft a compelling script while our voiceover specialists select a voice that embodies your message. You'll have the chance to review, suggest changes, and give the green light.</p>
                <span className={`${styles.rightcontainerarrow}`}></span>
      </div>
    </div>
<div className={`${styles.container1} ${styles.leftcontainer}`}>
 <img src="/public/ficon.webp" alt=""/>
        <div className={`${styles.textbox}`}>
        <h2>Video Editing</h2>
        <p>Our professional editors will seamlessly integrate your script, voiceover, and any provided footage or images into a sleek video. We'll also incorporate the licensed stock content to elevate the final product to professional-grade quality.</p>
                <span className={`${styles.leftcontainerarrow}`}></span>
      </div>
    </div>
<div className={`${styles.container1} ${styles.righrcontainer}`}>
 <img src="/public/ficon.webp" alt=""/>
        <div className={`${styles.textbox}`}>
        <h2>Your Review</h2>
        <p>We'll present you with the final edited video for your feedback. We're committed to your satisfaction and offer revisions to ensure the end product matches your vision.</p>
                <span className={`${styles.rightcontainerarrow}`}></span>
      </div>
    </div>
<div className={`${styles.container1} ${styles.leftcontainer}`}>
 <img src="/public/ficon.webp" alt=""/>
        <div className={`${styles.textbox}`}>
        <h2>Grab Your Video</h2>
        <p>Once you're completely satisfied, it's time to download your video. Armed with this professionally produced content, you're set to captivate and impress your target audience.
</p>
                <span className={`${styles.leftcontainerarrow}`}></span>
      </div>
    </div>
  </div>
  <DemoAndBook_Cards />
      <Footer></Footer>

    </>
  )
}

export default ProcessPage