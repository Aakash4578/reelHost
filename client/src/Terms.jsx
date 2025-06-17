import React from 'react';
import styles from './assets/Css/Terms.module.css';
import Footer from './components/Footer';

function Terms() {
  return (
    <>
    <div className={styles.termsPage}>
      {/* Hero Section */}
     <div className={`container-fluid ${styles.hero}`}>
  <div className="container text-start">
    <h1 className={styles.termsTitle}>Terms & Conditions</h1>
    <h5 className={styles.termsTitlep}>Please read before proceeding.</h5>
  </div>
</div>


      {/* Content Section */}
      <div className={`container `}>
        <div className="row ">
          <div className="col-1"></div>
          <div className="col-10">
            <div className={` ${styles.termssection}`}>
              <div >
                <h6>1. Services</h6>
                <p>We provide professional video editing services through monthly subscription packages...</p>

                <h6>2. Turnaround Time</h6>
                <p>We strive to deliver your video edits within the same day (Monday to Friday)...</p>

                <h6>3. Communication</h6>
                <p>All communication will be handled in real-time via Slack...</p>

                <h6>4. Revisions</h6>
                <p>We offer unlimited revisions within the scope of your active request...</p>

                <h6>5. Ownership & Usage Rights</h6>
                <p>You retain full ownership of all final edited videos delivered to you...</p>

                <h6>6. Refund Policy</h6>
                <p>Due to the nature of creative services and time invested, all payments are non-refundable...</p>

                <h6>7. Pausing or Cancelling Service</h6>
                <p>You may cancel or pause your subscription at any time...</p>

                <h6>8. Fair Use Policy</h6>
                <p>To ensure quality for all clients, we operate under a fair use policy...</p>

                <h6>9. Changes to Terms</h6>
                <p>We reserve the right to modify these terms at any time...</p>

                <h5 className={styles.termsTitlefroter}>For any questions, please reach out to our support team through the contact page.</h5>
              </div>
            </div>
          </div>
                    <div className="col-1"></div>

        </div>
      </div>
    </div>    <Footer></Footer>
  </>

  );
}

export default Terms;
