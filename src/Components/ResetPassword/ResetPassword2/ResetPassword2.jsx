import "./ResetPassword2.css";
import { Form } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Message from "../../../SmallComponents/Message/Message";
import Loading from "../../../SmallComponents/Loading/Loading";

import axios from "axios";

const ResetPassword2 = () => {
  const navigate = useNavigate();
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [messageKey, setMessageKey] = useState(0);

  const length = 4;
  const inputs = useRef([]);

  useEffect(() => {
    inputs.current.forEach((input) => {
      if (input) input.value = "";
    });
    if (inputs.current[0]) {
      inputs.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) {
      return;
    }
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);

    if (value && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    // const otp = inputs.current.map((input) => input.value).join("");
    // if (otp.length === length && !otp.includes("")) {
    //   console.log("Complete OTP:", otp);
    // }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const [time, setTime] = useState(60);
  const [phase, setPhase] = useState(1);
  const [enableLink, setEnableLink] = useState(false);

  useEffect(() => {
    if (phase === 1 && time <= 0) {
      setPhase(2);
      setTime(20);
    } else if (phase === 2 && time === 0) {
      setEnableLink(true);
      return;
    }
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time, phase]);

  const formattedTime = (timeInSec) => {
    if (phase === 1) {
      const minutes = Math.floor(timeInSec / 60);
      const sec = timeInSec % 60;
      return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
    }
  };

  const Code = digits.join("");

  const location = useLocation();

  const incomingEmail = location.state?.email;
  const incomingRes = location.state?.res;

  useEffect(() => {
    if (incomingEmail) {
      setEmail(incomingEmail); // ✅ set email in state
    } else {
      // Optionally handle if email is not found (e.g., direct access)
      const stored = sessionStorage.getItem("Email");

      if (stored) {
        setEmail(stored);
      }
    }
  }, []);

  const verifyFunc = async () => {
    setLoading(true);
    const isValid = false;

    if (!isValid) {
      setShowMessage(true);
      setMessageKey((prev) => prev + 1);
    }
    try {
      const res = await axios.post(
        "https://student-complaint-system.onrender.com/forgot_password/verify_code",
        {
          Email: email,
          Code: Code,
        }
      );
      navigate("/resetPassword3", {
        state: { email: email, response: res.data },
      });
      console.log(res.data);
    } catch (err) {
      if (!err.response) {
        // No response from server = likely network error

        setMsg("Please check your network.");
      } else {
        // Backend responded with error (like 400, 500)
        // setLoading(false);
        setMsg(err.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const resendBtnSummit = async (e) => {
    if (!enableLink) {
      e.preventDefault();
    } else {
      setTime(60);
      setPhase(1);
      setEnableLink(false);
    }

    try {
      const response = await axios.post(
        "https://student-complaint-system.onrender.com/forgot_password/send_reset_code",
        {
          Email: email,
          Code: Code,
        }
      );
      const res = response.data;
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
    }
    // finally {
    //   setLoading(false);
    // }
  };

  return (
    <main className="resetPassword-main">
      {/* <Message
        message={incomingRes.message}
        imgMessage="check"
        imgClassname="check"
      /> */}
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
      <section className="resetPassword2-first-sec">
        <div>
          <h2>Check your Mail</h2>
          <p>
            A one-time password (OTP) has been sent to your registered email
            address. Enter the code here to complete verification.
          </p>
        </div>
      </section>
      <Form>
        <div className="resetPassword2-input-div">
          {Array.from({ length }).map((_, index) => (
            <input
              key={index}
              type="tel"
              inputMode="numeric"
              maxLength={1}
              ref={(el) => (inputs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="resetPassword2-input"
            />
          ))}
        </div>
      </Form>
      <section className="resetPassword2-last-sec">
        <div>
          <Form onSubmit={resendBtnSummit}>
            <button
              className={
                enableLink
                  ? `resetPassword2-btn-a-enabled`
                  : `resetPassword2-btn-a-disabled`
              }
            >
              Resend
            </button>
          </Form>
          {/* <button>Resend</button> */}
          <small>{phase === 2 ? time : 20} secs</small>
        </div>
        <small>{phase === 1 ? formattedTime(time) : "0:00"}</small>
      </section>
      <div className="resetPassword2-btn-div">
        <Form onSubmit={verifyFunc}>
          <button className="resetPassword2-btn">Verify</button>
        </Form>
      </div>
    </main>
  );
};

export default ResetPassword2;
