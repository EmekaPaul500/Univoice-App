import "./Complaint.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Complaint = () => {
  return (
    <section className="complaint-sec">
      <small className="complaint-status">In progress</small>

      <div className="complaint-sec-div">
        <div className="complaint-sec-img-div">
          <LazyLoadImage
            src="./Images/book.png"
            alt="Book"
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "2s" } }}
            placeholderSrc="Book"
          />
        </div>

        <div>
          <h4>Academic Issues </h4>
          <p>
            My exam result for CSC401 is missing on the portal, and I have
            checked multiple times without seeing it. I need this issue resolved
            as soon as possible.
          </p>
        </div>
      </div>
      <small className="complaint-date">Date submitted: 24/2/2024</small>
    </section>
  );
};

export default Complaint;
