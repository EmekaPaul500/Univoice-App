import { Form } from "react-router-dom";
import "./Home.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Complaint from "./Complaint/Complaint";
import Message from "../../SmallComponents/Message/Message";
import Error from "../Error/Error";
import User from "../../SmallComponents/User/User";
import Loading from "../../SmallComponents/Loading/Loading";
// import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { p } from "framer-motion/client";

const Home = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [msg, setMsg] = useState("");
  const [showUser, setShowUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [complaintData, setComplaintData] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedSignUpMsg = sessionStorage.getItem("signUpMsg");
    const storedSignUpToken = sessionStorage.getItem("signUpToken");
    // const storedAuthSource = sessionStorage.getItem("authSource");
    // console.log(storedSignUpMsg, storedSignUpToken);

    if (storedSignUpToken) {
      setMsg(storedSignUpMsg);
      setToken(storedSignUpToken);
      // setAuth(storedAuthSource);

      //Remove login Items in local storage
    }

    const storedLoginMsg = sessionStorage.getItem("loginMsg");
    const storedLoginToken = sessionStorage.getItem("loginToken");
    // const storedLoginAuthSource = sessionStorage.getItem("loginAuthSource");

    if (storedLoginToken) {
      setMsg(storedLoginMsg);
      setToken(storedLoginToken);
      // setAuth(storedLoginAuthSource);
    }
  }, []);

  useEffect(() => {
    const getComplaint = async () => {
      if (!token) return; // Don't call if token isn't ready

      try {
        const res = await axios.get(
          "https://student-complaint-system.onrender.com/complaint/get_complaints",

          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setComplaintData(res.data);
      } catch (err) {
        if (!err.response) {
          // No response from server = likely network error
          // console.log(err);
        } else {
          // Backend responded with error (like 400, 500)
          // setLoading(false);
          // console.log(err.response?.data);
        }
      } finally {
        setLoading(false);
      }
    };
    getComplaint();
  }, [token]);

  const summitComplaint = (e) => {
    e.preventDefault();
    navigate("/summitComplaint", { state: token });
  };

  let displayComplaints = complaintData?.Complaints || [];

  function displayComplaintDate(rawDate) {
    const dateObj = new Date(rawDate);

    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const filteredComplaints = displayComplaints.filter(
    (complaint) =>
      complaint.title.toLowerCase().includes(search.toLowerCase()) ||
      complaint.description.toLowerCase().includes(search.toLowerCase())
  );

  return token ? (
    <main className="home-main">
      {/* {showUser && <User />} */}
      <Message message={msg} imgMessage="check" imgClassname="check" />
      {/* Home First Sec */}
      <section className="home-first-sec">
        <div className="logo1">
          <LazyLoadImage
            src="./Images/Logo1.png"
            alt="Logo1"
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "1s" } }}
            placeholderSrc="logo1"
          />
        </div>
        <div
          className="home-first-sec-user"
          onClick={() => setShowUser(!showUser)}
        >
          <LazyLoadImage
            src="./Images/user.png"
            alt="User"
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "2s" } }}
            placeholderSrc="User"
          />
        </div>
      </section>

      {/* Second sec(Search button sec) */}
      <section className="home-second-sec">
        <div>
          <img src="./Images/search.png" alt="search" />
          <input
            type="text"
            placeholder="Search Complaint by Title"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Form onSubmit={summitComplaint}>
          <button className="home-second-sec-btn">Submit Complaint</button>
        </Form>
      </section>
      <section className="home-third-sec">
        {loading && <Loading />}

        {filteredComplaints.length === 0 ? (
          <p>No complaint Found</p>
        ) : (
          filteredComplaints.map((displayComplaint) => {
            return (
              <Complaint
                key={displayComplaint.id}
                complaintName={displayComplaint.name}
                department={displayComplaint.department}
                complaintStatus={displayComplaint.status}
                complaintTitle={displayComplaint.title}
                complaintText={displayComplaint.description}
                complaintDate={displayComplaintDate(
                  displayComplaint.created_at
                )}
                complaintImages={displayComplaint.file_path}
                matricNo={displayComplaint.matric_no}
              />
            );
          })
        )}
      </section>
    </main>
  ) : (
    <Error link="/login" text="Back to Login" />
    // <Login />
  );
};

export default Home;
