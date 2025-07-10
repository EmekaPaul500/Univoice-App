import { useState } from "react";
import "./Complaint.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const Complaint = ({
  complaintName,
  department,
  complaintStatus,
  complaintTitle,
  complaintText,
  complaintDate,
  complaintImages,
  matricNo,
}) => {
  // console.log(complaint);

  const navigate = useNavigate();

  const complaintDetails = {
    complaintName: complaintName,
    department: department,
    complaintStatus: complaintStatus,
    complaintTitle: complaintTitle,
    complaintText: complaintText,
    complaintDate: complaintDate,
    complaintImages: complaintImages,
    matricNo: matricNo,
  };

  const complaintDetailsPage = () => {
    navigate("/complaintDetails", { state: complaintDetails });
  };

  return (
    <section className="complaint-sec" onClick={complaintDetailsPage}>
      <small className="complaint-status">{complaintStatus}</small>
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
          <h4>{complaintTitle} </h4>
          <p>{complaintText}</p>
        </div>
      </div>
      <small className="complaint-date">Date submitted: {complaintDate}</small>
    </section>
  );
};

export default Complaint;
