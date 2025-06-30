import { useState } from "react";
import "./SignUp.css";
import Message from "../../SmallComponents/Message/Message";
import Loading from "../../SmallComponents/Loading/Loading";

import { Form, Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(true);
  const [studentData, setStudentData] = useState({
    Fullname: "",
    Matric_no: "",
    Department: "",
    Level: "",
    Email: "",
    Password: "",
  });
  const [msg, setMsg] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [messageKey, setMessageKey] = useState(0);
  const [loading, setLoading] = useState(false);

  const signUpSummit = async (e) => {
    e.preventDefault();
    // console.log(studentData);
    const isValid = false;
    if (!isValid) {
      setShowMessage(true);
      setMessageKey((prev) => prev + 1);
    }

    if (
      studentData.Fullname === "" &&
      studentData.Matric_no === "" &&
      studentData.Department === "" &&
      studentData.Level === "" &&
      studentData.Email === "" &&
      studentData.Password
    ) {
      setShowMessage(false);
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://student-complaint-system.onrender.com/auth/signup",
        studentData
      );

      setShowMessage(false);
      console.log(response.data);
      const { message, access_token } = response.data;
      sessionStorage.setItem("signUpMsg", message);
      sessionStorage.setItem("signUpToken", access_token);
      sessionStorage.setItem("authSource", "signUp");
      navigate("/home");
    } catch (err) {
      if (!err.response) {
        // No response from server = likely network error
        console.log(err);
        setMsg("Please check your network.");
      } else {
        // Backend responded with error (like 400, 500)
        console.log(err.response.data.message);
        // setLoading(false);
        setMsg(err.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="sign-up-main">
      {loading && <Loading />}
      {showMessage && !loading && (
        <Message
          key={messageKey}
          message={msg}
          imgMessage="cancel"
          imgClassname="cancel"
        />
      )}
      <Form action="/login">
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
          placeholderSrc="People1 logo"
        />
      </div>

      {/* Sign up section */}
      <section className="sign-up-section">
        <figure>
          <LazyLoadImage
            src="./Images/sign-up logo.png"
            alt="Sign up Logo"
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "2s" } }}
            placeholderSrc="People1 logo"
          />
        </figure>
        <h3>Create your UniVoice Account!</h3>
        <Form>
          <div className="sign-up-input-div">
            <input
              type="text"
              placeholder="Full name"
              onChange={(e) =>
                setStudentData({ ...studentData, Fullname: e.target.value })
              }
            />
          </div>
          <div className="sign-up-input-div">
            <input
              type="text"
              placeholder="Matric no:"
              onChange={(e) =>
                setStudentData({ ...studentData, Matric_no: e.target.value })
              }
            />
            <small></small>
          </div>
          <div className="sign-up-input-div">
            <input
              type="text"
              placeholder="Department"
              onChange={(e) =>
                setStudentData({ ...studentData, Department: e.target.value })
              }
            />
            <small></small>
          </div>

          <div className="sign-up-input-div">
            <select
              required
              onChange={(e) =>
                setStudentData({ ...studentData, Level: e.target.value })
              }
            >
              <option value="" disabled selected hidden>
                Select Level
              </option>
              <option value="100l">100 Level</option>
              <option value="200l">200 Level</option>
              <option value="300l">300 Level</option>
              <option value="400l">400 Level</option>
            </select>
            {/* <small>Hello</small> */}
          </div>
          <div className="sign-up-input-div">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) =>
                setStudentData({ ...studentData, Email: e.target.value })
              }
            />
          </div>
          <div className="sign-up-input-div-password">
            <input
              type={eye ? "password" : "text"}
              placeholder="Password"
              onChange={(e) =>
                setStudentData({ ...studentData, Password: e.target.value })
              }
            />
            <button onClick={() => setEye(!eye)}>
              <img src={`./Images/${eye ? "view" : "hide"}.png`} alt="" />
            </button>
          </div>
        </Form>
        <div className="sign-up-last-div">
          <h5>Already have an account? </h5>
          <Link to="/login">Log in</Link>
        </div>
        <Form onSubmit={signUpSummit}>
          <button className="sign-up-btn">Sign up</button>
        </Form>
      </section>
    </main>
  );
};

export default SignUp;
