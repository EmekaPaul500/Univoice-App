import "./User.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const User = ({ closeUser, showConfirmFunc }) => {
  return (
    <main className="user-main">
      <section>
        <button className="user-close-btn" onClick={closeUser}>
          <img src="./Images/remove.png" alt="" />
        </button>
        <div className="user-first-div">
          <LazyLoadImage
            src="./Images/Login logo.png"
            alt="User"
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "2s" } }}
            placeholderSrc="User"
          />
        </div>
        <h4>Peter Brook</h4>
        <p>brooklyn23 @gmail.com</p>
        <Link to="/userProfile">View full profile</Link>

        <span className="user-log-out-btn" onClick={showConfirmFunc}>
          <img src="./Images/logOut.png" alt="" />
          Log out
        </span>
      </section>
    </main>
  );
};

export default User;
