import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

function Candly() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { theme: "dark", hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <>
            <div class="container candly py-2" id="candly" data-aos="fade-up">
                <div class="title-candly text-center" data-aos="fade-up">Ready to Engage Audience?</div>
                <div class="subtitle text-center" data-aos="fade-up">Let's talk <span>!</span></div>
                <div class="descriptionbook text-center" data-aos="fade-up">Book a free call to get started</div>
                
                <Cal
        namespace="30min"
        calLink="reeloxmedia/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "dark" }}
      />
            </div>
    
    </>
  );
}

export default Candly;
