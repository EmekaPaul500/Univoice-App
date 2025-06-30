import { Form, Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./ResetPassword1.css";
import { useEffect, useState } from "react";
import Loading from "../../../SmallComponents/Loading/Loading";
import Message from "../../../SmallComponents/Message/Message";

import { useNavigate } from "react-router-dom";

import axios from "axios";

const ResetPassword1 = () => {
  const [emailData, setEmailData] = useState({ Email: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [messageKey, setMessageKey] = useState(0);

  const navigate = useNavigate();

  const summitEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const isValid = false;

    if (!isValid) {
      setShowMessage(true);
      setMessageKey((prev) => prev + 1);
    }

    try {
      const response = await axios.post(
        "https://student-complaint-system.onrender.com/forgot_password/send_reset_code",
        emailData
      );
      const res = response.data;
      navigate("/resetPassword2", {
        state: { email: emailData.Email, res: res },
      });
      setShowMessage(false);
    } catch (err) {
      if (!err.response) {
        // No response from server = likely network error
        console.log(err);
        setMsg("Please check your network.");
      } else {
        // Backend responded with error (like 400, 500)
        console.log(err.response.data.message);
        setLoading(false);
        setMsg(err.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (emailData.Email) {
      sessionStorage.setItem("Email", emailData.Email);
    }
  }, [emailData.Email]);

  return (
    <main className="resetPassword1-main">
      {showMessage && !loading && (
        <Message
          key={messageKey}
          message={msg}
          imgMessage="cancel"
          imgClassname="cancel"
        />
      )}
      {loading && <Loading />}
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
      <section className="resetPassword1-first-sec">
        <div>
          <h2>Forgot your password?</h2>
          <p>Enter your registered email, and we will send you an OTP</p>
        </div>
        <Form onSubmit={summitEmail}>
          <input
            type="email"
            required
            placeholder="Email"
            onChange={(e) => {
              setEmailData({ ...emailData, Email: e.target.value });
            }}
          />
          <button className="resetPassword1-btn">Send OTP</button>
        </Form>
      </section>
      <div className="resetPassword1-last-div">
        <h5>Remember your password? </h5>
        <Link to="/login">Log in</Link>
      </div>
    </main>
  );
};

export default ResetPassword1;
