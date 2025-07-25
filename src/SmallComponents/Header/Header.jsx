import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Form } from "react-router-dom";
import "./Header.css";
import User from "../User/User";
import { useState, useEffect } from "react";
import Confirm from "../Confirm/Confirm";
import { useNavigate } from "react-router-dom";

const Header = ({ visibility = "visible" }) => {
  const [viewUser, setViewUser] = useState(false);
  const [viewConfirm, setViewConfirm] = useState(false);

  const navigate = useNavigate();

  // Sign up Token
  const storedSignUpToken = sessionStorage.getItem("signUpToken");

  // Login Token
  const storedLoginToken = sessionStorage.getItem("loginToken");
  const storedLoginMsg = sessionStorage.getItem("loginMsg");
  const storedLoginAuthSource = sessionStorage.getItem("loginAuthSource");

  const viewUserFunc = () => {
    setViewUser(true);
  };

  const closeUser = () => {
    setViewUser(false);
  };

  const showConfirmFunc = () => {
    setViewConfirm(true);
    setViewUser(false);
  };

  const confirmBtn1 = () => {
    setViewConfirm(false);
  };

  const confirmBtn2 = (e) => {
    e.preventDefault();
    if (storedSignUpToken) {
      sessionStorage.removeItem("signUpToken");
      sessionStorage.removeItem("signUpMsg");
      sessionStorage.removeItem("authSource");
      navigate("/login");
    }

    if (storedLoginToken) {
      sessionStorage.removeItem("loginToken");
      sessionStorage.removeItem("loginMsg");
      sessionStorage.removeItem("loginAuthSource");
      navigate("/login");
    }
    setViewConfirm(false);
  };

  return (
    <>
      {viewConfirm && (
        <Confirm
          confirmText="Are you sure you want to log out?"
          confirmImg="Icon"
          confirmBtn1={confirmBtn1}
          confirmBtnText="Log out"
          confirmBtn2={confirmBtn2}
        />
      )}
      {viewUser && (
        <User closeUser={closeUser} showConfirmFunc={showConfirmFunc} />
      )}
      <Form action="/home" style={{ visibility: visibility }}>
        <button className="arrow-left-btn">
          <img src="./Images/arrow-left.png" alt="arrow-left" />
        </button>
      </Form>

      <section className="header-sec">
        <div className="logo1">
          <LazyLoadImage
            src="./Images/Logo1.png"
            alt="Logo1"
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "1s" } }}
            placeholderSrc="logo1"
          />
        </div>
        <div className="header-sec-user" onClick={viewUserFunc}>
          <LazyLoadImage
            src="./Images/user.png"
            alt="User"
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "2s" } }}
            placeholderSrc="User"
          />
        </div>
      </section>
    </>
  );
};

export default Header;
