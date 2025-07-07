import "./ComplaintDetails.css";

import { Form } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useLocation } from "react-router-dom";

const ComplaintDetails = () => {
  const location = useLocation().state;

  function formatDate(dateString) {
    const [day, month, year] = dateString.split("/");

    const dayNum = parseInt(day, 10);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const getOrdinal = (n) => {
      const s = ["th", "st", "nd", "rd"],
        v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    return `${getOrdinal(dayNum)} ${monthNames[parseInt(month) - 1]}, ${year}`;
  }

  return (
    <main className="complaint-details-main">
      <Form action="/home">
        <button className="arrow-left-btn">
          <img src="./Images/arrow-left.png" alt="arrow-left" />
        </button>
      </Form>
      <div className="logo1">
        <LazyLoadImage
          src="./Images/Logo1.png"
          alt="Logo1"
          effect="blur"
          wrapperProps={{ style: { transitionDelay: "1s" } }}
          placeholderSrc="logo1"
        />
      </div>
      <h2>Complaint Details</h2>

      {/* Status div */}
      <div className="complaint-details-status-div">
        <h4>Status:</h4>
        <p>{location.complaintStatus}</p>
      </div>

      <section className="complaint-details-sec-1">
        <div>
          <h4>Name:</h4>
          <p>{location.complaintName}</p>
        </div>
        <div>
          <h4>Matric no:</h4>
          <p>SCI21CSC044</p>
        </div>
        <div>
          <h4>Department:</h4>
          <p>{location.department}</p>
        </div>
        <div>
          <h4>Complaint Title:</h4>
          <p>{location.complaintTitle}</p>
        </div>
        <div>
          <h4>Date Submitted:</h4>
          <p>{formatDate(location.complaintDate)}</p>
        </div>
      </section>

      <section className="complaint-details-sec-2">
        <h4>Full complaint description:</h4>
        <p>{location.complaintText}</p>
      </section>
      <div className="complaint-details-div">
        <div>
          <LazyLoadImage
            src="./Images/img1.png"
            alt="Image"
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "1s" } }}
            placeholderSrc="Image"
          />
        </div>
        {location.ComplaintImage}
        <span>
          <button>Click to view image </button>
        </span>
      </div>
      <section className="complaint-details-sec-3">
        <h4>Response from UniVoice</h4>
        <p>
          The Wi-Fi service has been restored and is now functioning across
          campus. If you continue to experience any connectivity issues, please
          let us know. Thank you for your patience while we worked on resolving
          this issue.
        </p>
      </section>
    </main>
  );
};

export default ComplaintDetails;
