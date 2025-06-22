import React, { useEffect } from 'react';

function Faq() {
  useEffect(() => {
    const detailsElements = document.querySelectorAll(".details");
    detailsElements.forEach((el) => {
      el.addEventListener("click", function () {
        detailsElements.forEach((other) => {
          if (other !== this) {
            other.removeAttribute("open");
          }
        });
      });
    });

    // Cleanup to avoid memory leaks
    return () => {
      detailsElements.forEach((el) => {
        el.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <section id="faq" className="container faqsec" >
      <div className="row" data-aos="fade-up">
        <div className="col-12" >
          {faqList.map((faq, index) => (
            <details key={index} className="details">
              <summary>
                <span>{faq.question}</span>
                <span className="icon">+</span>
              </summary>
              <div className="content">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqList = [
  {
    question: "How fast will I receive my video?",
    answer:
      "The delivery time for your videos depends on the package you choose. Typically, you can expect to receive your videos within a day to 2–3 days.",
  },
  {
    question: "How do I request a video?",
    answer:
      "We'll grant you access to our internal system where you upload your videos with ease. Send us your videos, and we'll do the rest.",
  },
  {
    question: "Why wouldn't I just hire my own editor?",
    answer:
      "Hiring your own editor can be challenging. We simplify the process, manage the editing, and ensure quality control.",
  },
  {
    question: "What if I'm not happy with my video?",
    answer:
      "This doesn't happen very often, but if it does — you get unlimited revisions! We'll tweak it until you're happy.",
  },
  {
    question: "Do you offer trials or make example videos?",
    answer:
      "No worries! We'll continue to revise the design until you're 100% satisfied.",
  },
  {
    question: "Are there any refunds if I don't like the service?",
    answer:
      "Due to the high-quality nature of the work, there will be no refunds issued.",
  },
];

export default Faq;
