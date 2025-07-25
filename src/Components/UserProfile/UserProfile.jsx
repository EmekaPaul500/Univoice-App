import { Form, Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <main className="user-profile-main">
      <Form action="/home">
        <button className="arrow-left-btn">
          <img src="./Images/arrow-left.png" alt="arrow-left" />
        </button>
      </Form>

      <section className="user-profile-first-sec">
        <div className="user-profile-user-div">
          <LazyLoadImage
            src="./Images/user1.png"
            alt="User"
            effect="blur"
            wrapperProps={{ style: { transitionDelay: "2s" } }}
            placeholderSrc="User"
          />
        </div>

        <h3>Peter Brook</h3>
        <p>brookyln23@gmail.com</p>
        <span className="user-profile-span">User</span>
      </section>

      <section className="user-profile-second-sec">
        <Link to="/personalInfo">
          Personal Information
          <img src="./Images/arrow-down-01.png" alt="arrow" />
        </Link>

        <Link to="/complaintsPage">
          My Complaints
          <img src="./Images/arrow-down-01.png" alt="arrow" />
        </Link>

        <Link>
          Notifications
          <img src="./Images/arrow-down-01.png" alt="arrow" />
        </Link>
      </section>
    </main>
  );
};

export default UserProfile;
