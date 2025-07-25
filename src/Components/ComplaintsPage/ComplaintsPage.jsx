import "./ComplaintsPage.css";
import { useState } from "react";
import Header from "../../SmallComponents/Header/Header";
import Complaint from "../Home/Complaint/Complaint";
import { useNavigate } from "react-router-dom";

const ComplaintsPage = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  return (
    <main className="complaint-page-main">
      <div
        className="complaint-page-div-01"
        onClick={() => navigate("/summitComplaint")}
      >
        {/* <div> */}
        <img src="./Images/add.png" alt="add" />
        {/* </div> */}
      </div>

      <Header />
      <h2>My Complaints </h2>
      <div className="complaint-page-input-div">
        <img src="./Images/search.png" alt="search" />
        <input
          type="text"
          placeholder="Search Complaint"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <section className="complaint-page-sec">
        <Complaint
          complaintTitle="Academic Issues"
          complaintText="The school’s Wi-Fi network has been completely down since yesterday, affecting both academic and administrative activities. As a student, I have been unable to access essential online materials, attend virtual sessions, or submit assignments that are due."
          // complaintText="Hello"
          complaintDate="24/2/2024"
          complaintStatus="In progress"
        />
        <Complaint
          complaintTitle="Academic Issues"
          // complaintText="The school’s Wi-Fi network has been completely down since yesterday, affecting both academic and administrative activities. As a student, I have been unable to access essential online materials, attend virtual sessions, or submit assignments that are due."
          complaintText="Hello"
          complaintDate="24/2/2024"
          complaintStatus="In progress"
        />
        <Complaint
          complaintTitle="Academic Issues"
          // complaintText="The school’s Wi-Fi network has been completely down since yesterday, affecting both academic and administrative activities. As a student, I have been unable to access essential online materials, attend virtual sessions, or submit assignments that are due."
          complaintText="Hello"
        />
        <Complaint
          complaintTitle="Academic Issues"
          // complaintText="The school’s Wi-Fi network has been completely down since yesterday, affecting both academic and administrative activities. As a student, I have been unable to access essential online materials, attend virtual sessions, or submit assignments that are due."
          complaintText="Hello"
        />
        <Complaint
          complaintTitle="Academic Issues"
          // complaintText="The school’s Wi-Fi network has been completely down since yesterday, affecting both academic and administrative activities. As a student, I have been unable to access essential online materials, attend virtual sessions, or submit assignments that are due."
          complaintText="Hello"
        />
        <Complaint
          complaintTitle="Academic Issues"
          // complaintText="The school’s Wi-Fi network has been completely down since yesterday, affecting both academic and administrative activities. As a student, I have been unable to access essential online materials, attend virtual sessions, or submit assignments that are due."
          complaintText="Hello"
        />
        <Complaint
          complaintTitle="Academic Issues"
          // complaintText="The school’s Wi-Fi network has been completely down since yesterday, affecting both academic and administrative activities. As a student, I have been unable to access essential online materials, attend virtual sessions, or submit assignments that are due."
          complaintText="Hello"
        />
      </section>
    </main>
  );
};

export default ComplaintsPage;
