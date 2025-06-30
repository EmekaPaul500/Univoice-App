import { Form } from "react-router-dom";
import "./Home.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Complaint from "./Complaint/Complaint";
import Message from "../../SmallComponents/Message/Message";
import Error from "../Error/Error";
import Login from "../Login/Login";

import { useEffect, useState } from "react";

const Home = () => {
  const [token, setToken] = useState(null);
  const [msg, setMsg] = useState("");
  // const [auth, setAuth] = useState("");

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

  console.log(msg);

  return token ? (
    <main className="home-main">
      <Message message={msg} imgMessage="check" imgClassname="check" />
      <Form action="/login">
        <button className="arrow-left-btn">
          <img src="./Images/arrow-left.png" alt="arrow-left" />
        </button>
      </Form>

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
        <div className="home-first-sec-user">
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
          <input type="text" placeholder="Search" />
        </div>
        <Form action="/summitComplaint">
          <button className="home-second-sec-btn">Submit Complaint</button>
        </Form>
      </section>

      <section className="home-third-sec">
        <Complaint />
        <Complaint />
        <Complaint />
        <Complaint />
        <Complaint />
        <Complaint />
        <Complaint />
        <Complaint />
        <Complaint />
        <Complaint />
        <Complaint />
        <Complaint />
      </section>
    </main>
  ) : (
    // <Error link="/login" text="Back to Login" />
    <Login />
  );
};

export default Home;
