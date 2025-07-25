import { Form, Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

import Loading from "../../SmallComponents/Loading/Loading";
import Message from "../../SmallComponents/Message/Message";

const Login = () => {
  const navigate = useNavigate();

  const [eye, setEye] = useState(true);
  const [StudentData, setStudentData] = useState({
    Email: "",
    Password: "",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [messageKey, setMessageKey] = useState(0);

  const summitLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    const isValid = false;

    if (!isValid) {
      setShowMessage(true);
      setMessageKey((prev) => prev + 1);
    }
    try {
      const response = await fetch(
        "https://student-complaint-system.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(StudentData),
        }
      );

      if (!response.ok) {
        const error = await response.json();

        setMsg(error.message);
        throw new Error(error);
      }

      const data = await response.json();
      const { message, access_token } = data;
      sessionStorage.setItem("loginMsg", message);
      sessionStorage.setItem("loginToken", access_token);
      sessionStorage.setItem("loginAuthSource", "login");

      setMsg(data.message);
      navigate("/home");
      setShowMessage(false);
    } catch (error) {
      // if (!error.response) {
      //   setMsg("Please check your network");
      // }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-main">
      {showMessage && !loading && (
        <Message
          key={messageKey}
          message={msg}
          imgMessage="cancel"
          imgClassname="cancel"
        />
      )}
      {loading && <Loading />}
      <Form action="/splashScreen3">
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

      {/*  Login Section*/}
      <section className="login-section">
        <figure>
          <LazyLoadImage
            src="./Images/Login logo.png"
            alt="Login logo"
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "2s" } }}
            placeholderSrc="People1 logo"
          />
        </figure>
        <h1>Welcome!</h1>
        <Form>
          <div className="login-input-div">
            <input
              type="email"
              required
              placeholder="Email"
              onChange={(e) =>
                setStudentData({ ...StudentData, Email: e.target.value })
              }
            />
            {/* <small className="login-wrong-username">Invalid Email</small> */}
          </div>

          <div className="login-input-div-password">
            <input
              required
              type={eye ? "password" : "text"}
              placeholder="Password"
              onChange={(e) =>
                setStudentData({ ...StudentData, Password: e.target.value })
              }
            />

            <button onClick={() => setEye(!eye)}>
              <img src={`./Images/${eye ? "view" : "hide"}.png`} alt="" />
            </button>
          </div>

          <div className="login-password-div">
            {/* <small>Wrong Password</small> */}
            <Link to="/resetPassword1" className="login-forget-password">
              Forget Password?
            </Link>
          </div>
        </Form>

        <Form onSubmit={summitLogin}>
          <button className="login-btn">Log in</button>
        </Form>
        <div className="login-last-div">
          <h5>Don't have an account?</h5>
          <Link to="/signUp">Sign up</Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
